---
layout: post
title:  "Advanced logging in Android"
categories: tech
tags: android log logcat logback slf4j
excerpt_separator: <!--more-->
---

If you have a big app with a complicated business logic you can be not satisfied with logcat and its functionality. This article shows what can be wrong and what are alternative solutions.

<!--more-->

Logs can be useful not only during debugging. When your app crashes, you'd usually like to attach logs before sending it via crash reporting tool. It helps to understand user's behaviour before crash and find the reason.

### Cons of logcat

Logcat stores logs for all applications on the device. Buffer can be spammed by other apps and you can lose part of necessary data by the time of attaching it to crash info.

Some phone vendors turn logcat off or set its buffer size too small. Users can also turn it by themselves on some phones, because it can improve performance a bit.

You can check size of your logcat with command
`adb logcat -g`

### Logging requirements

Logs shouldn't be affected by other apps usage.

Writing logs to files can slowdown your performance. It should be done in the background.

You don't want an endless log. It should be rotated.
Rotation isn't a simple feature to implement. It's better to have a well known and tested solution.

Size of logs are individual for different apps. It should be easily setup.
As option it's useful to set different buffer sizes for dev/beta builds and production builds. Just because you don't want to drain real user's traffic and battery for excessive logs.

### Solution with Logback + slf4j

I looked through several java logging frameworks and realized that one of the most convinient solutions is Logback + slf4j. You can find a lot of info about it.

It has kind of [port](http://tony19.github.io/logback-android/) for Android.

Logback allows to create async data appender, so writing to file won't freeze app and won't significally decrease performance.

It will handle rotation issues. I use two different strategies:

- debug - with quite big buffer of 2MB
- release - with 160KB buffer at most

It makes log.txt (latest log) and log.1.txt previous log. It's easy to attach them to crash reporting tool.

As bonus android port allows to duplicate writing to Logcat to support a usual devoper workflow with Android Studio.

### Code sample

There is a code sample for such solution. It can be configured via config file or in runtime. I prefer runtime configuration.

{% gist 306f4ef5892e41498d35252c89d7a6db %}

### Few warnings

If you're trying to stay at 64k methods, so there are quite many methods will be added with Logback.

App startup time will increase during Logback initialization up to hundreed ms. But it can be avoided with init out of the main thread and mem-caching logging requests during initialization.

Prevent attaching logs to the same crashes several times in a row. Debounce it once in an hour for example. It can be done with caching stacktraces's hashcodes and checking before sending.

Don't forget to obfuscate user's personal data (passwords, names, etc).

### Useful links

[https://developer.android.com/studio/command-line/logcat.html](https://developer.android.com/studio/command-line/logcat.html)

[https://developer.android.com/studio/debug/am-logcat.html](https://developer.android.com/studio/debug/am-logcat.html)

[http://logback.qos.ch/](http://logback.qos.ch/)

[https://gist.github.com/melnikovdv/306f4ef5892e41498d35252c89d7a6db](https://gist.github.com/melnikovdv/306f4ef5892e41498d35252c89d7a6db)
