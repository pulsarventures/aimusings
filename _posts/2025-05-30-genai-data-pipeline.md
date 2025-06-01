---
layout: post
title: "GenAI Data Pipeline"
date: 2025-05-30 12:00:00 -0500
categories: ai musings
---

In this post, I recap a conversation with Asish Nelapati on how to architect and deploy real-world Generative AI systems. We covered the full pipeline—from data ingestion and chunking to embedding, RAG vs fine-tuning, and model deployment strategies. It’s a practical guide for anyone looking to build intelligent, production-ready AI workflows.


This week, I had the chance to sit down with Asish Nelapati — someone I’ve worked with for over a year and who turn to when I want to think deeply (and practically) about Data Science, AI/ML and full-stack systems.

Asish recently completed his master’s from Penn State and brings a rare blend of academic rigor and engineering versatility — from LLM research papers to React Native interfaces. It’s that full-spectrum perspective that makes conversations with him so rich.


In this session, we broke down what it really takes to go from raw data to a working GenAI system. Here are a few highlights.

Segment 1 – Designing the Data Pipeline

We walked through a typical Generative AI pipeline:

    •   Start with data sources: PDFs, HTML, transcripts, SQL/NoSQL databases
    •   Clean and preprocess the content (strip scripts, dedupe, etc.)
    •   Chunk the data – via fixed token size or semantic grouping
    •   Generate embeddings, store them in a vector DB along with metadata
    •   Use retrieval + context injection (e.g., user role, chat history) to power dynamic prompts


The goal? Structured, searchable knowledge that makes your chatbot feel like it actually knows what it’s talking about.

Segment 2 – RAG vs Fine-Tuning

A classic question: When do you fine-tune vs build a Retrieval-Augmented Generation (RAG) pipeline?
- Use RAG when your data changes frequently
- Use Fine-tuning when deep domain knowledge is required


Also, PSA: “training” ≠ “fine-tuning” — and many people use the terms interchangeably. 


Segment 3 – Model Deployment = Software Release

Your model is ready — now what?

You’ve got 3 main paths:
    1.  Managed: Azure ML, Amazon Bedrock etc
    2.  Self-hosted: EC2, Kubernetes
    3.  Specialized platforms: Hugging Face, Scale AI

Model serving needs its own versioning, testing, and release cadence — just like any other software product. 



We wrapped up with this: there’s no one-size-fits-all in Generative AI. But having a mental map helps — and we hope this conversation gave you one.

Curious which parts of this you’ve already tackled — and where you’re stuck. RAG vs fine-tuning? Chunking vs embedding? Serving vs scaling?

Drop your thoughts below or shoot me a DM — happy to dive deeper.

PS : took me a lot more time than I anticiapted to edit this video - hope you find it helpful 😀 


#AI #GenAI #RAG #LLM #DataScience #AIStack #BuildInPublic

