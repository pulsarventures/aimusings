---
layout: page
title: "Blog"
permalink: /blog/
---

<div class="blog-posts">
  {%- for post in site.posts -%}
  {% if post.categories contains "blog" or post.category == "blog" or post.path contains "_content/blog" %}
  <article class="post-item">
    <header class="post-header">
      <h2 class="post-title">
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
      
      <div class="post-meta">
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-date">{{ post.date | date: date_format }}</span>
        
        {% if post.author %}
          <span class="post-author">by {{ post.author }}</span>
        {% endif %}
        
        {% if post.tags and post.tags != empty %}
        <span class="post-tags">
          {% for tag in post.tags %}
            <a class="tag" href="/notes#{{ tag }}">{{ tag }}</a>
          {% endfor %}
        </span>
        {% endif %}
      </div>
    </header>
    
    {% if post.image %}
    <div class="post-thumbnail">
      <a href="{{ post.url | relative_url }}">
        <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}">
      </a>
    </div>
    {% endif %}
    
    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>
    
    <div class="post-read-more">
      <a href="{{ post.url | relative_url }}">Read more →</a>
    </div>
  </article>
  {% endif %}
  {%- endfor -%}
</div>