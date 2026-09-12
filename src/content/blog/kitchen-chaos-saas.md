---
title: What a kitchen chaos taught me about SaaS product design
description: Designing AYCE's kitchen operations system taught me something no design course could. A behind-the-scenes look at operational software design.
pubDate: 2025-02-20
category: Field Notes
tags:
  - field-notes
  - saas
  - operations
  - ayce
heroImage: /images/uploads/Hero.png
heroImageAlt: in the busy kitchen
---

Before I designed a single screen for AYCE, I spent a day standing in a working restaurant kitchen during the lunch service rush.

It was louder than I expected. Hotter. More chaotic. And more instructive than anything I could have learned from a product brief.

Orders came in simultaneously from three different channels. The kitchen staff communicated in a shorthand that had evolved over years of working together. It was a language of nods and numbers that was invisible to anyone new. The manager moved between stations holding a tablet in one hand and having a conversation with a server while checking inventory on a different device with the other. Every decision was made in seconds. Every mistake had a cost that rippled across the whole operation. The margin for error was effectively zero.

I went in expecting to understand the software requirements. What I actually learned was a principle that has changed how I think about every SaaS product I've worked on since: **operational software isn't about adding capability. It's about removing decisions.**

## What the Brief Said and What the Problem Actually Was

When AYCE first briefed me, the ask was familiar: make the kitchen management interface cleaner and more intuitive. Standard design brief language. The kind of sentence that sounds clear but means almost nothing until you've seen the actual context it's used in.

I accepted the brief and then immediately questioned its framing.

"Clean" is a design output. "Intuitive" is another way of saying "I want people to stop complaining about it." Neither tells you anything about what's actually going wrong, or why. So before I designed anything, I spent two days just watching and asking. Following staff through their shifts. Counting the number of times someone had to look away from what they were doing to interact with the software. Noting the moments of visible frustration. The pauses, the repeated taps, the times someone called across the kitchen for help navigating a flow.

What I found wasn't what I expected. The interface wasn't especially ugly. It wasn't even that confusing in isolation. Sitting with it on a slow afternoon, you could figure it out. The problem only revealed itself when you watched someone using it under real conditions, during a rush, when five things needed attention simultaneously and you had ten seconds to deal with each of them.

The software was asking staff to make micro-decisions at exactly the moments when they had the least mental bandwidth available to make them.

![Decision fatigue in operations](/images/uploads/unsplash_JCHlsKSgbSk.png)

## The Anatomy of Decision Fatigue in Operations

Every screen had three options where one definitive action would have done. Every flow required a confirmation before another confirmation. It was a design pattern that exists to prevent errors but in practice just added friction to every single interaction. The dashboard showed fourteen pieces of information when, in the middle of service, you needed exactly one: _is there a problem right now, and if so, where?_

The system wasn't broken in the traditional sense. It was designed for the wrong moment. It was designed for a calm user sitting at a desk with time to think, time to read, time to navigate. But the actual users were kitchen staff managing controlled chaos. Those are two completely different people in completely different cognitive states. They need completely different interfaces.

> Operational software doesn't fail because it's hard to learn. It fails because it's hard to use when you're under maximum pressure. Those are completely different design problems, and they require completely different solutions.

![The redesign principle](/images/uploads/unsplash_plxIS_ANlCI.png)

## The Redesign Principle That Changed Everything

Once I understood the real problem, the redesign became clear. The question wasn't "how do we organize this information better?" It wasn't even "how do we simplify the visual design?" The actual question was: _which decisions need to happen here, by this person, at this precise moment, and which ones can we eliminate, automate, or safely defer?_

Most of them could be eliminated. The software was making staff manually manage things the system could track automatically. Status updates that should have been automatic required manual input. Confirmation dialogs that protected against errors that never actually occurred added three seconds to every action. Default states were wrong, which meant every interaction started from a position that required correction before anything useful could happen.

We fixed every default to reflect the most common correct state. We automated status updates that the system could infer from context. We cut every confirmation that didn't prevent a real, documented error. We rebuilt the primary view around the single thing that mattered most during active service. We moved everything else, including the reporting, the configuration, and the historical data, to secondary screens that were accessible but not competing for attention during high-demand moments.

The result was a system that kitchen staff described as "finally making sense", which, from an operational software user, is one of the highest compliments a designer can receive. It means the software stopped getting in the way of the actual work.

![Operational design in practice](/images/uploads/AYCE%20-%20Overview.svg)

## What Operational Design Actually Means in Practice

Here's the principle I carry from this project into every operational product I work on now: the measure of good operational software is not how much it can do. It's how invisible it becomes during actual use.

When staff stop thinking about the interface, when the software disappears into the background of the work itself, that's when it's doing its job. When the system is invisible enough that people can focus entirely on what they're actually trying to accomplish, not on navigating the tool that's supposed to help them accomplish it, that's the success state.

This sounds simple. It is not. It requires a fundamental willingness to say no, to features, to screens, to options, to flexibility, in service of the specific user at the specific moment they need to act. It requires humility about what your software can and cannot do better than a person. It requires designing for the worst-case scenario, not the demo scenario.

The best SaaS design doesn't impress in product demos. It disappears during real use.

If your users are thinking about your UI while doing their actual work, the UI has already failed them. Design for the moment of maximum stress. Remove every decision you can. Make the correct default state obvious enough that it never needs to be chosen. It just happens.

That's what a kitchen taught me about software.
