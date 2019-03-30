## Turning the Static Dynamic

One of the most beautiful things about the JAMstack is how you can progressively add functionality to a static site just like you would add visual components. In particular, often want to add authentication and serverless functions to make our sites more and more dynamic... and, of course, authenticated serverless functions! In this talk we discuss the why and the how of the blurring line between static and dynamic, and show how to do it with React, Gatsby, and Netlify!

## Let's Put Everything-In-JS

6 years ago, React put HTML-in-JS. More recently, CSS-in-JS has become as popular as it has been controversial. What if... we just skipped ahead and took this to its logical conclusion? An exploration of the absolutely insane, totally illogical, standards-bending future of Single File Components that might just be possible.

> This is my "lets go wild" talk. I've been doing some research recently on bringing Vue's Single File Components to React, and concluded that most people are still too unambitious when it comes to the possibilities. I think a framework agnostic SFC spec may be possible, and that it can cover a whole lot more than templates, styling, and javascript. I will have practical demos, but I also want people to go nuts thinking about what they can do when Compilers are the new Frameworks.

## Reusable Time Travel with React Hooks and Immer

Learn how and why to make a `useTimeTravel` React hook that we can use to make Tolerant User Interfaces - and a discussion about how custom hooks open the doors to reusable behavior that make great UX so much easier to write!

## What Humans Can Learn from Machine Learning

Over the last half century, we've taught Machines to speak, move, react, see, think, and now to teach themselves. Is it game over for Humans? On the contrary, because we're now able to see and adjust the variables of learning, we've learned a great deal about _how_ to learn. In this talk, we explore five tricks of general computational learning algorithms and how we can apply them in our own learning!

---

Hi Organizers! I write and think a lot about Learning and Meta-Learning topics, and one of my top requested topics is always Learning How To Learn. I also do Machine Learning on the side and I think nobody has really tried to meld the two disciplines together and draw lessons from one to the other. I have an outline that I am very excited about, including:

- the alpha parameter
- momentum
- optimality in the face of an impossibly large search space
- generalize > memorize by using a testing set
- epsilon exhaustion and Probably Approximately Correct learning

Would love to have the chance to introduce these ideas in a way that will be engaging for the audience regardless of whether or not they know Machine Learning.

## You Gotta Love JAMStack

The JAMStack stands for JavaScript, APIs, and Markup, and at first glance it seems a truism - of course everyone uses that, right? What kind of stack is that? At its core, however, it describes a new architecture for web apps and sites that is at the confluence of multiple trends in serverless, JavaScript frameworks, static site generators, and Git-centric workflows. At the center of it all: The All-Powerful Frontend Developer!

JAMStack, Serverless, Devops, Frontend

## Serverless GraphQL

GraphQL is often synonymous with the return of Monolithic architecture. Does this mean the benefits of Serverless are irrelevant? In this talk we explore how Serverless and GraphQL work together, explore ways to stitch individual function schemas, and get hard numbers to fight performance concerns.

This talk is a gentle reintroduction to the serverless movement for skeptics, who may not have been paying attention to all the GraphQL capabilities that are slowly emerging even on the Serverless side because most tutorials assume monolithic architectures. Nothing in the spec requires a monolith, and in fact resolvers are all mini-serverless functions anyway. We just lack the tools and wholistic viewpoint to address this gap in the market. In this talk we will discuss what we're doing at Netlify to fix that

## A Skeptic's Intro to the JAMStack

A delightful exploration of how JavaScript web apps, serverless APIs, the static-site renaissance, and Git-centric workflows are enabling a whole new architecture, from a fellow skeptic wary of marketing acronyms.

> Abstract (Detailed description of your presentation, including key audience takeaways)

The JAMStack stands for JavaScript, APIs, and Markup, and at first glance it seems a truism - of course everyone uses that, right? What kind of stack is that? At its core, however, it describes a new architecture for web apps and sites that is at the confluence of multiple trends in serverless, JavaScript frameworks, static site generators, and Git-centric workflows.

Over the past 20 years, the stack of web apps has slowly shifted from fully server-side driven (LAMP) to a "full stack" straddling front-end and back-end (MEAN). Thanks to furious innovation in JavaScript and serverless technologies in the last 5 years, the stack has shifted even further forward to empower front-end developers to be responsible for fully dynamic web app experiences on par with mobile apps. JavaScript frameworks like React have arisen to make writing compenentized web apps much easier. Their ability to statically render and rehydrate have allowed a new generation of static site generators like Gatsby and Vuepress to offer dynamic and fast experiences previously not possible for static sites. On the backend, the proliferation of the third party API economy and the launch of AWS Lambdas and other serverless functionality make it ever easier to build without a monolithic server. This allows a clear decoupling between front-end and back-end, and a fundamental re-examining of the application delivery architectures as a direct result. By leaning on serverless functions and static-building, we can use a Git-centric workflow to eliminate a lot of the complexity inherent in today's architectures, with direct implications for reliability, security, performance, and simplified caching. Finally, we can unlock new possibilities with the new JAMstack architecture, like deploy previews and atomic deploys.

> Who is this presentation for?

CTOs, VP Engs, Web App Team Leads

> What's the takeaway for the audience?

- JAMStack is shorthand for a fundamental rethinking of web architecture taking advantage of latest technologies in serverless and JavaScript.

## Learning from 100,000 React Developers

React communities exist in many spaces online, and they don't all overlap. In this talk we explore statistics and quotes from /r/reactjs, answering burning questions everybody wants to know:
What technologies are people interested in? What do beginners struggle with? What are companies hiring for?

At present growth rates, /r/reactjs will surpass 100,000 subscribers in April, and I feel React Amsterdam would be the perfect place to celebrate this benchmark and reflect on our learnings and what the broader community can take away from it.

Talk structure:

- Why do people like discussing React on Reddit?
- The recent history of React in 2018 and 2019
- Projects that React beginners can try
- What do beginners struggle with? A visualization
- Unresolved debates in React
- What are the biggest library and blogpost launches?
- What are companies hiring for?
- Dark Matter Devs and why we all need to participate more in the online discussion

## STAR Apps: Design Systems, TypeScript, Apollo GraphQL, and React

A new front-end stack is emerging. They involve building Design Systems for visual consistency, using TypeScript for internal consistency, Apollo GraphQL for data manipulation, and server- or statically-rendered React for data representation. In this talk we explore how these trends fit together, and _why_ leading product teams from AirBnb to the New York Times are embracing them.

Talk structure:

- Introducing and defining Design Systems and the tools used
- Introducing TypeScript and why teams have embraced it for large React apps
- Introducing Apollo and why it has become the leading GraphQL client for React
- Discussing server-side (Next.js) vs static (Gatsby) React and React is growing at ~70% annually
- Exploring combinations:
  - Design Systems + React: React-sketchapp, Framer X
  - GraphQL + React: Discussing the componentization of Data
  - TypeScript + React: Documentation, and static checking vs proptypes
- Inviting the audience to explore how these trends are expressions of a deeper underlying desire
  for better tooling that matches the needs of product engineering teams.

## JAMStack Jumpstart: Gatsby + Netlify

There is a lot of developer and investment interest in JAMStack technologies: from the serverless movement to new authentication models to continuous atomic deployment to the static site generator renaissance. But with so many new terms and options, it is hard for people to figure out where to start.

This workshop will teach developers to set up a simple but state of the art Gatsby and Netlify stack, which lets people create blazing fast sites and apps with React and GraphQL, backed up by a continuous deployment and serverless platform complete with authentication and CMS. It has never been easier to get a great Lighthouse score, or to deploy complex, secure webapps for free.

Links:

- Info on JAMstack: https://jamstack.org/
- VC interest in JAMStack:
  - a16z: https://a16z.com/2017/08/09/netlify/
  - KPCB: https://www.kleinerperkins.com/perspectives/netlify-modernizing-the-web
  - CRV: https://medium.com/@CRVVC/the-jamstack-startup-landscape-c06cc3cdb917
  - Redpoint: https://medium.com/memory-leak/the-jamstack-its-pretty-sweet-e0834e4e6bb7
- Developer interest in JAMStack:
  - Conf https://www.youtube.com/channel/UC8bRyfU7ycLXnEBfvdorpUg
  - Hackathon https://hackathon.freecodecamp.org/

> Hi Organizers! I'd love a chance to lead a workshop for your folks on React, Gatsby, and serverless authentication and function execution. I believe many attendees will have passing familiarity with them but don't use them in their day jobs, and would like to attend a session to ramp up on this. I would love to be their guide.

##Hooked on Change

React Hooks are finally here! Nothing's changed, yet everything's changed. Hooks don't unlock any new capability in React, so what's the big fuss? In this talk we introduce the Hooks API, explore the wonderful world of custom hooks, and finally discussed how your APIs and tools can also be Optimized for Change.

5 reasons:

- Hooks represent the React team's vision of the future
- There is a lot of FUD around Hooks from people who don't see the benefits
- The concept of Hooks have a broader applicability even outside React; they may even be adopted in Vue
- Custom Hooks make injecting and refactoring any functionality easy
- Library authors and app architects alike can draw broad API design lessons from Hooks, and apply it in many other contexts

Links:

- Speaking:
- React Rally: https://www.youtube.com/watch?v=nyFHR0dDZo0
- Hooks and Concurrent React: https://youtu.be/vhWaMPQhMLQ
- Info on Hooks: https://reactjs.org/hooks

## Reacting Ahead of Time

What's faster than O(1)? Step changes in performance and scalability
come from paradigm changes rather than incremental optimizations. The
inexorable march forward in "table stakes" product requirements has
forced developers to explore ways to push computation from client to
server, from runtime to buildtime, from fat SPAs to code-split
frameworks. Cutting edge UX is exploring how to prefetch and cache
resources intelligently, trading off memory usage for compute time.
Lastly, DX has also been pushed forward with fascinating ideas from
hot reloading to GraphQL. Where is all this taking us?

## Learning React in Public

Developers are used to the idea of constant learning, especially in
the fast moving Javascript ecosystem. But how often do we take a step
back from learning to consider -how- we learn? In this talk we explore
how Learning in Public can accelerate your career, bring value to your
professional network, and ultimately make you a better developer, with
examples all drawn from personal experience with React.

## Learning in Public

Developers are used to the idea of constant learning, especially in
the fast moving Javascript ecosystem. But how often do we take a step
back from learning to consider -how- we learn? In this talk we explore
how Learning in Public can accelerate your career, bring value to your
professional network, and ultimately make you a better developer, with
examples all drawn from personal experience.

## React Suspense Workers

React Suspense doesn't work without a caching layer, so every Suspense
library has built one - except in service workers! In this talk we go
through what React Suspense is, then explore a prototype of how
"Suspense Workers" could be useful in future Concurrent React apps.

## Better Docs with Docz

We all know good documentation is important for adoption and developer
experience - isn't it worth investing in tooling to make it easier?
Docz burst onto the scene this year as a fantastic new way to make
great documentation for your React libraries with MDX. Let's take it
out for a spin!
