---
layout: post
title: "Vibe Debugging"
date: 2025-05-12 12:00:00 -0500
categories: ai musings
---

𝗔𝗜 𝗠𝘂𝘀𝗶𝗻𝗴𝘀 — 𝗩𝗶𝗯𝗲 𝗗𝗲𝗯𝘂𝗴𝗴𝗶𝗻𝗴

Off late everyone loves to talk about “creating and building.”

But any real programmer will tell you: a huge chunk of your time isn’t spent writing code—it’s spent figuring out why your code isn’t working.

Despite what the vibe coders on social media might have you believe, the real work is often slow, silent, and maddeningly invisible.

We’re building an AI chatbot that interacts with all my previous AI Musings posts. React frontend. Python backend. Distributed team — Atlanta, Munich, Istanbul and Bangalore.

It worked perfectly on everyone else’s machine.
Except mine.

Same repo. Same code.
But I kept hitting this vague CORS issue.

Tried incognito mode.
Tried different browsers.
Tried nuking everything and reinstalling.
Nothing.

Here’s what the next few hours looked like:

→ Checked browser dev tools
→ Tweaked headers
→ Took screenshots
→ Ranted internally
→ Switched to Cursor
→ Added more logs
→ Still broken

And then… a breakthrough.

So I turned on ChatGPT as well to work with my Cursor Tab - it was like phone a friend (in my case I had two)

ChatGPT casually says:
“Is anything else using port 5000?”

I run: lsof -i :5000

And there it is.
AirPlay was running on port 5000.

Of all things.

The fix? Change the backend to port 5050.

This is the real reality of programming.
Looking back I could say - agh, but why didn't I think of it - but reality is sometimes you don't ..

Not saying that I wouldn't have thought of this in a while or one of my other teammates would have pointed out. But when you are juggling a lot of things and switching context - every bit of help counts.

Welcome to vibe debugging.

It’s navigating weird environments, misconfigurations, and edge cases that never show up in tutorials.

It’s that strange phase where:
 • Nothing’s broken, but nothing works
 • StackOverflow has no answers
 • Your team can’t reproduce the issue
 • And your best tools are curiosity, intuition, and sheer perseverence

...the invisible grind of software development

So why share this?

Because:
 • Programming is less about “code” and more about “context”
 • The hardest bugs aren’t just in your functions (or Agents !) —they’re in your environment and settings as well
 • The real skill is staying calm when things don’t make sense

I shared screenshots of the ChatGPT convos and Cursor session.
Not because they’re beautiful—but because they’re real.

And sometimes, showing the messy middle is more helpful than showing the clean output.

hashtag#AIMusings hashtag#BuildInPublic hashtag#DeveloperLife hashtag#ChatGPT hashtag#Cursor

 ![1](https://media.licdn.com/dms/image/v2/D4E22AQEahg9wbPo2jQ/feedshare-shrink_800/B4EZbByjKfGQAg-/0/1747007976652?e=1749686400&v=beta&t=WfgWdi1df8cSljeP7hpQSMPt20K3-BDXkQGZlGMW2fs)

 ![2](https://media.licdn.com/dms/image/v2/D4E22AQE-1JZvkovL_A/feedshare-shrink_800/B4EZbByjKiHIAg-/0/1747007977565?e=1749686400&v=beta&t=MLSSz4NfLxDCGGqFtli64gjl1g8gRChODYFiSEZOlSU)

 ![3](https://media.licdn.com/dms/image/v2/D4E22AQEumiH5E2F-aQ/feedshare-shrink_800/B4EZbByjKiHMAg-/0/1747007978191?e=1749686400&v=beta&t=OzzHq7MhObmRoHpXB7BCDAJGZSnN_wnOL4gRzTkmQgA)
 