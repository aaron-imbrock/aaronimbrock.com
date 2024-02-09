---
layout: ../../layouts/MarkdownPostLayout.astro
title: '5 Signs of an Inexperienced Self-Taught Developer (and how to fix)'
pubDate: 2024-02-08
description: 'We need to ensure we are growing so that we prove valuable teammates, dependable programmers, and competent "engineers."'
author: 'Aaron Imbrock'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["youtube", "career"]
---

I caught a really interesting [Youtube Video](https://www.youtube.com/watch?v=B_HR2R3xsnQ) by Travis Media just now. A minute in I started taking notes as he discussed a workflow pattern for to start a new project. His later discussion points are just as good. I've done them all and suffered through the overwhelm and confidence hit.

There's so many ideas in my head and there's so much to learn. Every day I throw out code and discover new patterns. At this point I'm still learning the fundamentals and yet I'm awed by the mystery and feel a visceral something pass through me in that moment when I realize this too is just another layer of abstraction and discover what's underneath. What a thing.

## Making it Work - That's all you care about, and then you move on

You don't start with writing code.

Get a notebook and layout what you're building, what your requirements and which will likely lead to getting more information about what's important.

Ultimately you want a clear understanding of what you're doing. And once you have this clear understanding, think about what fits in the current code base.

Things like constants, or existing code, that you can tie your code into, try not to reinvent things. And then consider the readability of the code, maintainability of the code, and the scalability of the code. It's far more than "making it work".

## Huge changes to the code base at once

Meaning, your pull requests are too big to make sense of. They're too big for any meaningful comments or remediation. In not checking your code often you can introduce problems that
are harder to diagnose because of all the changes to the codebase that you've introduced.

A pull request should have one cohesive feature that you're working on. Not multiple. And if that feature is big, break it up into multiple logical parts. So commit often and make sure to
test each commit. If you've sketched or planned out your feature first you've probably ended up with a checklist of steps needed to get your feature working. Everytime you check off a step or a task, test it and commit it. Once the feature as a whole is fully working and tested then push the code and create the PR.

## Always learning new frameworks or languages

Always on the hype train. Just deciding one day you want to master something completely new just for the challenge of it. It's really a vain pursuit. Being a constant learner is a really good thing, you have to do that, always be learning.

But the question is: What are you learning? It's much more beneficial to be learning the concepts of programming and how things are really working, than learning many different languages.

Every language is just a new syntax. Why do that? If you really understand the concepts a for-loop can be looked up in any language, a switch statement can be looked up in any language. It's all just syntax.

So if you're asked to build a feature in a new framework or language, something that you haven't used before, you should be able to 1/ read a quick overview of that technology and how it works and 2/ be able to build that feature based on programming concepts or sudo code even and then transfer it to whatever syntax that language speaks. Your second language should be a lower language like C or Rust, or even Go or C# if you're coming from a language like Python, and once you've learned the deeper concepts that those languages force you to understand, you can really jump in anywhere.

## You're working on too many different things at once

As a new developer you want people to think you're efficient, that you're somehow this coding prodigy that came out of nowhere. But if you take a look at mid-level to senior developers they reject the extra work because they're in the middle of something. They're in the middle of one thing. They have a really good grasp of that one thing and the requirements for that one thing. And they get it done well.

You on the other hand have 3 things going on of which you still don't fully understand, and your brain is having to jump back and forth between them. As a new dev don't be embarrassed to say 'I'm currently in the middle of something. Let me get this done and then I'll jump on that.' Stop volunteering for everything. Get your one assignment. Understand your requirements well and then knock it out of the park.

Be a dev that always delivers over one that's always in the middle of 10 different things. And always has to give updates and excuses for all the things you're doing. Take one task assignment at a time and complete it. And commit to a new task only when the previous task is delivered as requested.

Building software is a slower process than you think. Especially if you want to do it right.

## Avoiding Critiques

You don't want others seeing or critiquing your code. If you did, they'd probably be suggesting that you do things differently or speak on how inefficient. But you don't want to touch it again because you got it working and you wrestled with it for so long that you're sick of it. And we just don't like the criticism as new developers. Strangely enough we want to be praised for our super complex and unmaintainable code. Thankfully there is Code Reviews and gates setup so that Senior Devs will have to approve or reject your Pull Requests. This is a learning process. The point is to accept that you're a junior dev, and write junior level code. And the only way to get better at it is to have people critic your code. In learning what's wrong with it and making adjustments and how you code along the way. So write the code, and take the criticism and advice of others and let it fuel you into becoming a better programmer.
