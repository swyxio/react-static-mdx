---
title: Getting Closure on Hooks (JSConf Edition)
slug: react-hooks-jsconf
topic: React
venues: JSConf Asia
date: Jun 2019
url: https://2019.jsconf.asia/#program
desc: Cloning the React Hooks API in raw JS
description: The design of React Hooks requires a good understanding of closures in JavaScript. In this talk, we’ll reintroduce closures by building a tiny clone of React! This will serve two purposes – to demonstrate the effective use of closures, and to show how you can build a Hooks clone in just 29 lines of readable JS. Finally, we arrive at how you get Custom Hooks and the Rules of Hooks out of this incredible mental model!
---

more info from pomber: https://codesandbox.io/s/crazy-mcnulty-7gxrd

```js
import { createElement, render } from "./utils"

const React = (function() {
  let hooks = []
  let currentHook = 0

  function workLoop() {
    currentHook = 0
    render()
    setTimeout(workLoop, 300)
  }
  requestIdleCallback(workLoop)

  return {
    createElement,
    render: render,
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue
      const setStateHookIndex = currentHook
      const setState = (newState) => (hooks[setStateHookIndex] = newState)
      return [hooks[currentHook++], setState]
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray
      const deps = hooks[currentHook]
      const hasChangedDeps = !deps || !depArray.every((el, i) => el === deps[i])
      if (hasNoDeps || hasChangedDeps) {
        callback()
        hooks[currentHook] = depArray
      }
      currentHook++
    }
  }
})()

/** @jsx React.createElement */
function Counter() {
  const [state, setState] = React.useState(3)
  const [state2, setState2] = React.useState([])
  const list = ["hi", "hi2"]
  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((x) => x.json())
      .then((x) => setState2(Object.keys(x.message)))
  }, [])
  return (
    <div>
      <button onClick={() => setState(state + 1)}>Click me {state}</button>
      <ul>
        {state2.map((foo) => (
          <li>{foo}</li>
        ))}
      </ul>
    </div>
  )
}

const element = <Counter />
const container = document.getElementById("root")
React.render(element, container)

// utils.js
let _Component = null
let _root = null
export let render = (Component = _Component, root = _root) => {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  const Comp = reconcile(Component, root)
  _Component = Component
  _root = root
  const dom = createDom(Comp)
  root.appendChild(dom)
}

// recursive funciton
export function reconcile(Component, root) {
  const type = Component.type
  if (Array.isArray(Component)) {
    return Component.map((child) => reconcile(child, root))
  }
  const Comp = typeof type === "string" ? Component : type()
  if (Comp.props && Comp.props.children) {
    Comp.props.children.forEach((child, idx) => {
      if (child.type !== "string") {
        // recursive call for children
        Comp.props.children[idx] = reconcile(Comp.props.children[idx], root)
      }
    })
  }
  return Comp
}

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === "object" ? child : createTextElement(child)))
    }
  }
}
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  }
}

// recursive
export function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type)
  const props = fiber.props || {}
  updateDom(dom, {}, props)
  if (props.children) {
    props.children.forEach((child) => {
      // recursion
      if (Array.isArray(child)) {
        child.forEach((x) => {
          dom.appendChild(createDom(x))
        })
      } else {
        dom.appendChild(createDom(child))
      }
    })
  }
  return dom
}
const isEvent = (key) => key.startsWith("on")
const isProperty = (key) => key !== "children" && !isEvent(key)
const isNew = (prev, next) => (key) => prev[key] !== next[key]
const isGone = (prev, next) => (key) => !(key in next)
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2)
      dom.removeEventListener(eventType, prevProps[name])
    })
  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = ""
    })
  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name]
    })
  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2)
      dom.addEventListener(eventType, nextProps[name])
    })
}
```
