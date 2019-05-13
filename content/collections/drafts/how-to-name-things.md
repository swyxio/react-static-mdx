---
title: How To Name Things
slug: how-to-name-things
category: Tech
begun: 2019-05-09
---

> There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors. - [Leon Bambrick](https://twitter.com/secretgeek/status/7269997868?lang=en)

I've vacillated on my opinion on naming things. I think most people start out with no or weak opinions, looking slightly askance at the weirdos who do have strong opinions. They absorb naming conventions by osmosis, and then run into real problems at scale/over time, and then develop extremely strong opinions informed by that experience. The Weirdo's Journey.

I've given this essay a slightly clickbaity title. Spoiler: I'm not going to solve the problem of naming things today. All I hope to do is describe some opinions I've formed from my experience in Python and JS, list some considerations, invite you to [share yours](https://twitter.com/swyx), and suggest you have this debate on your team.

## Likely Bad Names

Inherent in having any opinion on naming things is some intuition that some names are worse than others.

This can feel a bit silly in languages where naming has no impact on program behavior, especially in JavaScript where everything gets minified. In that sense, naming is [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding).

But code is not just written for correctness, it is also written for other humans to read (and maintain). In that sense, naming is -not- bikeshedding.

And yes, I've unironically been in standups where we bikeshedded on whether something was bikeshedding. The rabbit hole goes deep.

I'll motivate the discussion with some examples:

- [**Metasyntactic names**](https://en.wikipedia.org/wiki/Metasyntactic_variable), the "lorem ipsum" of code: `foo`, `bar`, `baz`. You're not likely to see these in actual code. But you might.
- **Vague names**: `thething`, `that`, `someObject`. Everything's a thing. In JS, everything's an object. So what?
- **Too short, likely overloaded names**: `id`, `name`, `url`. There's nothing inherently wrong with these, but often you need more than one of these. So you start with one `id` in your code, and then later on have an `app.id`, and its no longer clear what `id` means. It is then harder and harder to grep and rename names in your code. This is especially important when the language allows shadowing (_ahem JS_). Probably my most controversial, and recent, opinion.
- **Overly Long names**: >30 characters is pushing it IMO. You can namespace names inside a dict/object.
- **Scary Technical names**: `ModifiedApplicativeFunctor`. As much as this makes sense to you, it has to make sense to the next person. Again, if you're on a team that all shares your context, go ahead. But at least pause to consider if they do.
- **Nonconventional names**: Naming conventions don't exist in a vacuum. If everyone in a community does `import React from 'react'` and you do `import Bunny from 'react'` because you thought it would be a fun idea... it loses its fun quickly. More seriously, you can establish convenient aliases for names and concepts, but be careful that your code becomes an unreadable mess of custom convention.

## Name Pollution

It is possible to have too much of a good thing! Even if all names technically fit whatever guidelines you choose, it is still possible to have way too many names. Every new name demands more space in your working memory. One very pervasive way this happens is when names cross file and module boundaries:

- `styleInjection.js` has only one export, and that export is named `genStylesCode`.
- A different file imports `styleInjection.js` and calls it `styleInjector`.

This was adapted from real code in a popular framework. Here we end up with 3 different names for the exact same thing. Triple the bikeshedding. As [Joe Fiorini](https://twitter.com/joegrammer2/status/1127744685978652679) puts it, **name files after their default export**. (If it makes sense).

## Controversial Names

Not all names are obviously bad, even though they may seem bad to you.

- Single Letter Names: You may dislike the TypeScript community using `T`, `U`, or `V` for generic type variables, but that does genuinely reflect the mathematical/set theory framing of the type system, and emphasize the genericness of the type variable. You may dislike using `e` for errors or for events, but if its usage is scoped, the impact really is very small and not worth arguing over. However, non-descriptive abbreviations that show up in errors seen by end users and your library consumers are bad news. Other forms of abbreviations may or may not be worth banning, check [this ESLint rule](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md) for ideas.
- Plurals vs Arrays: You can have `names` variable be an array of `name`s, or a `nameArray`, which is more verbose and explicit but less aesthetic.
- [Block, Element, Modifier](http://getbem.com/introduction/): BEM was wildly popular for a reason - the global nature of CSS - but scoping methods have evolved a lot since then and BEM is far less necessary than used to be. It is also, to put it mildly, verbose.

## Probably Good Ideas and their Considerations

Having dealt with the easy stuff above, I'm now on much more equivocal territory. Here we deal with some considerations you may want to think about in forming your naming guidelines and where I stand:

- **Encoding Types**: In dynamically typed languages it can be helpful to give a hint as to what the variable is. But even in statically typed languages it can help give hints to the reader, especially where type inference means there isn't explicit annotation at every step:
  - **Is it an array?** I mentioned this is controversial, and I've gone both ways between `names` and `nameArray`. But I do like giving a hint that something is an array.
  - **Is it nullable?** I -really- like this for JavaScript, and because I have done some Haskell I often inject a monad, e.g. `maybeResult`. This reminds me to check if the result is falsy first. However, be warned that this can often not be the right choice for variables that can have more than two states, e.g. `undefined | Error | Success`. Pick a name that reflects the true nature of the concept.
  - **Is it sync?** A similar monadic hint. The Node-style convention where [the default, shorter name is async](https://twitter.com/swyx/status/1127663193722060800) and the blocking, synchronous version has the longer name is a good idea, especially because asynchrony tends to be introduced and spread through codebases later on.
  - **Is it a boolean?** I do like boolean verb prefixes: `isDone`, `hasProperty`, `didChange` over `done`, `!!object[property]`, `changed`. [Here is an ESLint rule for that.](https://github.com/typescript-eslint/typescript-eslint/issues/515). [Daniel Lo Nigro](https://twitter.com/Daniel15/status/1127736210590289921) mentions that banning inverse booleans also seems like a good idea - `notDone`, `noHeaders` - to avoid double negatives - but I haven't personally done that yet.
  - **Is it an important enum or constant?** use SCREAMING_CASE, e.g. `DISPLAY_MODE_NONE`, `DISPLAY_MODE_INLINE`, `DISPLAY_MODE_BLOCK`. Often used in Redux action constants, and environment variables.
  - **Is it an internal variable?** This one I like a _lot_ - if the variable is not meant to be exposed, it can often help to prefix `_internal` variables, especially if you are mirroring an argument just for mutability in order to output it again.
- **Filenames**: We already discussed crossing file and module boundaries above. [Jonathan Johnson](https://twitter.com/LaughingBrook/status/1127805752905748480) also mentions that dates should come first in YYY-MM-DD format.
- **Namespacing**: We all agree descriptive names are better, but also that names that are too long are bad. One way to break this knot is by various namespacing strategies. Use your language's module system and data structures when naming convention fails you. For example, break up a collection of longish names like `DISPLAY_MODE_NONE`, `DISPLAY_MODE_INLINE`, `DISPLAY_MODE_BLOCK` into a `DISPLAY_MODE` dict or enum that you can access like `DISPLAY_MODE.NONE`. It doesnt have to just be variables, it can be functions too.
- **Grammar**: One of the most impactful naming decisions documented was in [the React lifecycle naming](https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#api-churn), which established a grammar of **Concepts, Actions and Operands** to help make lifecycles easier to remember. For CLI's, Heroku insists that `topics` are plural nouns and `commands` are verbs in their [CLI Style Guide](https://devcenter.heroku.com/articles/cli-style-guide#naming-the-command). Your users will very quickly learn your grammar and that is a fantastic way to communicate and structure your public API.

As usual, it is possible to take good ideas too far - encoding types into EVERYTHING and being concise leads you to [Hungarian Notation](https://twitter.com/jose_r_varela/status/1127651367861018625), which nobody likes.

## The Cost of Enforcement

I do have a strong opinion that naming opinions should be breakable guidelines rather than strict rules. If you are spending more than 30 seconds discussing a name in a code review, and opinions differ, its probably not worth further debate. Your team's time is valuable and this costs more the bigger your team is.

But wait, what about code standards? Without constant vigilance, my codebase will descend into a pit of chaos!

Well, first of all, nice to see that you trust your colleagues that much.

Second of all, **whatever can't be automated can't be enforced.** Code reviews cost. Human code review will have inconsistencies. The person who nitpicks names all the time will either be resented or joked about because they don't see the bigger picture. It just never ends well. [Don't be the bad cop](https://hackernoon.com/dont-be-the-bad-cop-in-pull-request-reviews-let-software-do-that-job-1eb9e574c2d1) - let the machine do it. The base level is trusting in syntax and tests - if the code is valid and works as advertised, you very likely already have bigger problems you should pay attention to. The next level is autoformatting ([prettier](https://prettier.io) for JS, [black](https://github.com/python/black) for python) and linting where you write or adopt code that looks at your AST and enforces simple naming rules. Be careful: Overly eager linting is a problem.

As Nick Shrock says: **Delegate to Tooling Whenever Possible**. [His advice on Code Reviews](https://medium.com/@schrockn/on-code-reviews-b1c7c94d868c) is worth a full read here. Importantly: **the goal of a code review is not to make it so that the code looks as if you wrote it**. Internalize that.

Sindre Sorhus has some strong opinions on naming. You may not agree with all of them, but at least they are enforced in code. [Check `eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn#rules).

## Your Opinion Here!

I [asked for more opinions on Twitter](https://twitter.com/swyx/status/1127648507676983296), and here are some I got:

- Dan Abramov: [Longer names to discourage use](https://twitter.com/dan_abramov/status/1127664407239114752) - for context, React uses this a lot in [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) and more subtly in [getDerivedStateFromProps](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html) and most famously in [DO_NOT_USE_OR_YOU_WILL_BE_FIRED](https://news.ycombinator.com/item?id=11447020)
- Ivan Babak: [Context-independent names](https://twitter.com/sompylasar/status/1127694272604413952)
- [Don't camelcase filenames](https://twitter.com/b_sted/status/1127650071393136640) for Unix compatibility
- Danny Eck: [Mark unstable, sync and unsafe code!](https://twitter.com/EckDaniel/status/1127694055054266368)
- Ersagun Kuruca: [More bad names](https://twitter.com/JimmyTheXploder/status/1127704565762142208): `script, callback, data, object, value, event, number, list`
- Matthew Weeks: [Keep it Simple but Descriptive](https://twitter.com/weeksling/status/1127669880302522370)

And last but not least, [a very great talk by Kevlin Henney: "Giving Code a Good Name".](https://www.youtube.com/watch?v=CzJ94TMPcD8).
