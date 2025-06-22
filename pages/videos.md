---
layout: page
title: Videos
permalink: /videos/
---

<div>
  {%- if site.videos.size > 0 -%}
    <h3 class="post-list-heading">{{ page.list_title | default: "" }} (Total {{ site.videos.size }})</h3>
    <ul class="post-list">
      {%- for video in site.videos -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ video.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ video.url | relative_url }}">
            {{ video.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ video.excerpt | strip_html }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>
  {%- endif -%}
</div>