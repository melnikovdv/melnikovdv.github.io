---
layout: post
title:  "Nexus update without reset"
categories: tech 
tags: android nexus update adb
excerpt_separator: <!--more-->
---

Usually Google [publishes][factory-images] factrory images for Nexus phones straight after release. But if you want to install them you have to wipe all your data and reset the phone. There is a way to avoid it and get the update without reset as soon as possible.

<!--more-->

Several days after release Google starts to send OTA (over-the-air) updates to phones. To prevent servers from extra load they do it country by country and you can wait for update too long. But several lucky fellas who receives update first shares them in places like [this][OTAs]. 

To find your OTA update.zip file you should just google something like 'Nexus OTA your_version .zip'.

After just connect your phone to computer (be sure that debug mode is enabled) and send reboot command

{% highlight Bash %}
adb reboot bootloader
{% endhighlight %}

Then choose __Recovery mode__ with help of loud and power buttons. You'll see lying open android with red triangle. Go to advanced menu volume up + power (could be volume down too) at the same time. You'll see several options, choose __apply update from ADB__.

Then just run 

{% highlight Bash %}
adb sideload /path/to/update/update.zip
{% endhighlight %}

And here we are. All your data is safe. 

Just for any case: __adb__ is a utility from Android SDK. I assume that your SDK is updated and has latest android tools. 

[factory-images]: https://developers.google.com/android/nexus/images
[OTAs]: http://www.androidcentral.com/here-are-android-51-ota-update-links-and-how-use-them