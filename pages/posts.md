---
layout: page
title: Posts
permalink: /posts/
---

<div>
  {%- if site.posts.size > 0 -%}
    <h3 class="post-list-heading">{{ page.list_title | default: "" }} (Total {{ site.posts.size }})</h3>
    <ul class="post-list">
      {%- for post in site.posts -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ post.excerpt | strip_html }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>
  {%- endif -%}
</div>