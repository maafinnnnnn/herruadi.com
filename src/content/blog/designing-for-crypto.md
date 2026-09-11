---
title: Designing for crypto when you know nothing about crypto
description: "What happens when you have to design for a domain you don't understand. A story about learning fast, asking better questions, and not faking expertise."
pubDate: 2025-02-03
category: Field Notes
tags: [field-notes, crypto, research, vantagelab]
heroImage: /images/blog/designing-for-crypto/hero.png
---

When Vantagelab reached out, I was honest about one thing upfront: I knew very little about crypto.

I understood the basics, like wallets, tokens, the volatility that makes it fascinating to some people and terrifying to others. But DeFi protocols, on-chain analytics, liquidity positions, and impermanent loss were a different language entirely. One I hadn't spoken.

I took the project anyway. And it taught me more about design than most "standard" projects combined.

## The Setup

Vantagelab was building an AI-powered crypto analytics dashboard for traders in the UK. The goal was to make complex market data faster to understand and act on. The brief I received was clear on the surface: cleaner, more intuitive, better visual hierarchy, smarter information architecture. Standard design language for what would turn out to be a very non-standard design problem.

The real challenge wasn't making something look better. It was understanding what "better" actually meant to someone who lives and breathes on-chain data for a living. That's someone whose relationship with information is fundamentally different from a typical SaaS user.

![Two weeks before a single frame](/images/blog/designing-for-crypto/image-1.png)

## Two Weeks Before a Single Frame

Before I opened Figma, I gave myself two weeks to do nothing but understand the domain.

I read documentation. Not marketing documentation, but actual protocol documentation and trading guides. I watched experienced traders explain their workflows on video. I studied how different types of users approached the same data and arrived at completely different decisions. I had long calls with the client where I asked them to walk me through their morning routine: what do you look at first, what number tells you whether today is a good day or a bad one, what would you need to see if you had ten seconds to check the dashboard?

Most designers would be embarrassed to admit they don't know the domain. I leaned into it.

There's a real superpower in being the least informed person in the room: you ask the questions that everyone else stopped asking years ago. When you're a domain expert, you stop noticing the things that are confusing. You've internalized them. But a new user, or a designer who approaches a problem with genuine curiosity and no assumptions, sees things that insiders have become blind to.

Questions like *"why does this specific number matter and not that one?"* or *"if you only had ten seconds to look at a screen, what would need to be on it?"* These sound basic. They often unlock the most important design decisions in the entire project.

> Not knowing the domain forces you to design for clarity. You can't fall back on assumed understanding. Every label, every data point, every interaction has to justify its existence.

## The Shift From "Cleaner" to "Faster Clarity"

Crypto dashboards have a specific and consistent problem: they show everything because they can. Every metric, every chart, every indicator running simultaneously. For a certain type of power user, someone who has spent years building mental models of what all this data means, that density can be comfortable. For anyone else, or even for that expert in a high-pressure moment, it becomes noise.

The original brief was to make the interface cleaner. After sitting with real users and watching how they actually worked, the brief evolved into something more specific: *make it faster to understand what matters right now.*

That shift, from a visual design outcome to a functional clarity goal, changed everything about how I approached the information architecture. We weren't just organizing data; we were building a decision support tool. That's a fundamentally different design problem. It changes how you think about hierarchy, how you think about primary versus secondary information, how you think about the cognitive load of each screen state.

![Hierarchy in a data-dense interface](/images/blog/designing-for-crypto/image-2.png)

## What Hierarchy Actually Means in a Data-Dense Interface

When information density is high, hierarchy isn't about visual balance. It's about urgency and relevance at the specific moment the user is looking at the screen.

A trading dashboard in the morning is a different use case from the same dashboard during an active trade. The information that matters changes based on context. Most dashboards don't account for this. They show the same layout regardless of what the user is actually trying to do.

For Vantagelab, we shifted to thinking about moments of use: what state is the user in, what decision are they making, and what is the single most important piece of information for that state? Everything else becomes secondary, still accessible, but not competing for attention.

We cut anything that required the user to interpret rather than read. Every abbreviation was either eliminated or made expandable. Labels became precise. The default view was rebuilt around the one question every trader asks first thing in the morning.

![Lessons from designing outside your domain](/images/blog/designing-for-crypto/image-3.png)

## What Designing Outside Your Domain Teaches You

Two things stuck with me from this project that I carry into every engagement now.

First: designing for a domain you don't understand is actually an advantage, if you approach it honestly. Domain familiarity creates invisible assumptions. Not having those assumptions forces you to design for genuine clarity, not perceived clarity.

Second: the faster your users need to act, the more work the UI has to do on their behalf. A dashboard that requires interpretation is a dashboard that's failing during the moments that matter most. Every second a user spends understanding your interface is a second they're not doing their actual job.

I still don't fully understand DeFi. But I understand what people who use it every day need to see in order to make good decisions quickly. That gap, between domain knowledge and design knowledge, is exactly where good product design lives.
