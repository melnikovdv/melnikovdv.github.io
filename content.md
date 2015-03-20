---
layout: page
title: Content
permalink: /toc/
---

{% for post in site.posts %}
  {% capture currentyear %}{{post.date | date: "%Y %B"}}{% endcapture %}
  {% if currentyear != year %}
    {% unless forloop.first %} {% endunless %}
      
<p>{{ currentyear }}</p>    

    {% capture year %}{{currentyear}}{% endcapture %} 
  {% endif %}
<ul class="list-unstyled">
  <li><a href="{{ post.url }}">{{ post.title }}</a> - <span class="small">{{ post.excerpt | strip_html }}</span></li>
</ul>

{% endfor %} 
