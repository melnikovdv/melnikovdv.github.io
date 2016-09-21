---
layout: post
title:  "Rocking in background"
categories: tech
tags: android doze standby background
excerpt_separator: <!--more-->
---

This topic aims to explain strategy of working in Android background.
If words doze, job scheduler, standby or high priority pushes
makes you confused, welcome to the article.

<!--more-->



http://stackoverflow.com/questions/13534732/how-to-make-the-android-device-hold-a-tcp-connection-to-internet-without-wake-lo

http://stackoverflow.com/questions/30547517/which-websocket-library-to-use-in-android-app

https://developer.android.com/training/scheduling/wakelock.html

sleep/wake:
adb shell input keyevent 26

unlock:
adb shell input keyevent 82

https://plus.google.com/+AndroidDevelopers/posts/GdNrQciPwqo

doze mode
standby mode

gms/gcm/fcm


adb shell dumpsys battery unplug
adb shell dumpsys deviceidle step
adb shell am set-inactive ru.ok.messages true // standby
