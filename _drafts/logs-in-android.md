---
layout: post
title:  "Advanced logging in Android"
categories: tech
tags: android log logcat
excerpt_separator: <!--more-->
---

If you have a big app with a complicated business logic you can be not satisfied with logcat and its functionality. This articles shows what can be wrong and what are alternative solutions.

<!--more-->

Logs can be useful not only during debugging. When your app crashes, you'd usually like to attach logs before sending it via crash reporting tool. It helps to understand user's behaviour before crash and find the reason.

### Cons of logcat

Logcat stores logs for all applications on the device. Buffer can be spammed by other apps and you can lose part of necessary data by the time of attaching it to crash info.

Some phone vendors turn logcat off or set its buffer size too small. Users can also turn it by themselves on some phones, because it can improve performance a bit.

You can check size of your logcat with command
`adb logcat -g`

### Log requirements

Writing logs to files can slowdown your performance. It should be done in the background.

You don't want an endless log. It should be rotated.

Size of logs are individual for different apps. It should be easily setup.
As options it's useful to set different buffer size for dev/beta builds and production builds. Just because you don't want to drain real user's traffic and battery for excessive logs. 

### What else

Don't forget to obfuscate user's personal data (passwords, names, etc).

Prevent attaching logs to the same crashes several times in a row. Debounce it once in an hour for example.
It can be done with caching stacktraces's hashcodes and checking before sending.

### Useful links

https://developer.android.com/studio/command-line/logcat.html
https://developer.android.com/studio/debug/am-logcat.html
