---
layout: post
title:  "Issues with commiting fragments"
categories: tech
tags: android programming
excerpt_separator: <!--more-->
---

There are some issues with commiting fragments after activity saves its state or before activity haven't restored it yet. Let's make clear strategy how to deal with it.

<!--more-->

Even after-Honeycomb-era I bet sometimes you could notice crashes from users corresponding to "`IllegalStateException: Can not perform this action after onSaveInstanceState`". It's happend when we try to add/replace/remove fragments after activity saves its state or before restores it. 

The most safe way to deal with it is to put all actions with fragments into onCreate method of activity. But if we need to do some actions with framents in other lifycycle moments of an activity we should do it after `onPostResume` or `onFragmentsResume` methods and before `onPause`. These methods guaranties that activity's state is ok for changes. More detailed explanations can be found [here](http://www.androiddesignpatterns.com/2013/08/fragment-transaction-commit-state-loss.html).

Also such issues can happend after `onActivityResult` (as it happens before onResume in some cases, and therefore before `onPostResume` / `onResumeFragments`). To prevent this it's better to save the result itself and a flag of the result. Then to handle the result after `onPostResume` or `onFragmentsResume` as usual.