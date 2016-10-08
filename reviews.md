---
layout: page
title: Reviews
permalink: /reviews/
---

<p>
  These are my reviews of books, podcasts, videos and other media.
  <br />
  If something is here, then it's kind of worthy stuff.
</p>

<h2></h2>
{% for post in site.categories.review %}
  {% capture currentdate %}{{post.date | date: "%Y %B"}}{% endcapture %}
  {% if currentdate != year %}
    {% unless forloop.first %} {% endunless %}     
<p>{{ currentdate }}</p>    
    {% capture year %}{{currentdate}}{% endcapture %}
  {% endif %}
<ul class="list-unstyled">
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
</ul>
{% endfor %}
