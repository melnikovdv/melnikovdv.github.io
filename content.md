---
layout: page
title: Content
permalink: /toc/
---
<h2>Blog</h2>
{% for post in site.posts %}
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

<h2>Outside blog</h2>

<p>2016</p>
<ul class="list-unstyled">
  <li>
    <a href="https://vc.ru/p/financial-bots">Second Yandex.Money Hackathon <i class="fa fa-info-circle"></i> ru</a>
  </li>
</ul>

<p>2014</p>
<ul class="list-unstyled">
  <li>
    <a href="https://vc.ru/p/yamoney-hack">Yandex.Money Hackathon rewiew <i class="fa fa-info-circle"></i> ru</a>
  </li>
</ul>

<p>2012</p>
<ul class="list-unstyled">
  <li>
    <a href="http://habrahabr.ru/post/138869/">Stripe on Habrahabr.ru <i class="fa fa-info-circle"></i> ru</a>
  </li>
  <li>
    <a href="http://habrahabr.ru/post/145086/">Mobile POS terminals on Habrahabr.ru <i class="fa fa-info-circle"></i> ru</a>
  </li>
</ul>
