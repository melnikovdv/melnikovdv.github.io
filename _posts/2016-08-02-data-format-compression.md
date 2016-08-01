---
layout: post
title:  "Data format and compression algos in Uber"
categories: tech
tags: format,compression
excerpt_separator: <!--more-->
---

[Here](https://eng.uber.com/trip-data-squeeze/) is a curious article about the data format and compression algos in Uber.

<!--more-->

Before choose something Uber made an effort to find out what is the best for them. There is no miracle in results: the fastest and smallest combination are binary formats with IDL (with schema definitions).

<img src="https://eng.uber.com/wp-content/uploads/2016/02/ParetoFront-1024x821.png" width="650">

But according to the existant schemaless solutions at the moment of choosing and the cost of migration they prefered the most effective within of schemaless set. As result they use MessagePack + zlib.

Noteble that at [ok.ru](https://ok.ru/) we are currently use exactly the same couple for data transmission in messages platform.
