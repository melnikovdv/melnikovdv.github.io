---
layout: post
title:  "Mac OS X setup from scratch"
date:   2014-11-25 18:48:09
categories: tech 
tags: osx mac soft script
excerpt_separator: <!--more-->
---

The following instructions and shell script will help to automate setup and installation of software on Mac OS X. 

<!--more-->

It can be useful when you upgrade your mac to a new one. It's possible to use native OSX app for it, but it has no flexibility for dotfiles and other dev stuff. Also who wants to copy all garbage and trash from previous computer to a new one? 

## Before setup

1. run OS X software update
2. install Xcode and its Command Line Tools with terminal command `xcode-select --install`

## Install dotfiles

todo

## Install software

### Homebrew

Most of apps are available through package manager [brew](http://brew.sh/) and its extension [brew-cask](http://caskroom.io/) (and [cask-versions](https://github.com/caskroom/homebrew-versions) for beta versions). Brew and cask will be installed by script too. 

The script itself can be found as [**gist**](https://gist.github.com/melnikovdv/cd23756e1114afaf8e43). Just run it. What it will install by default: 

#### Misc

* [google-chrome](http://www.google.ru/chrome/)
* [dropbox](https://www.dropbox.com/), [yandexdisk](https://disk.yandex.ru/) and [google-drive](https://drive.google.com/) for file syncing
* [telegram](https://telegram.org/), [viber](http://viber.com/) and [skype](http://www.skype.com/) for messaging
* [twitter](https://twitter.com/) for fun

#### Utilities

* [iterm2](http://iterm2.com/) replacement for Terminal app
* [oh-my-zsh](http://ohmyz.sh/) as default shell
* [alfred](http://www.alfredapp.com/) for launch everything and automation
* [bartender](http://www.macbartender.com/) allows to control menu bar icons
* [evernote](https://evernote.com) for notes
* [the anarchiver](http://unarchiver.c3.cx/) for rar, zip, etc
* [virtual box](https://www.virtualbox.org) for virtual machines
* [vlc](http://www.videolan.org/vlc/) video player
* [cyberduck](https://cyberduck.io) for ftp/sftp
* [ynab](http://www.youneedabudget.com/) for finance managment
* [android file transfer](https://www.android.com/filetransfer/) for file moving from/to android
* [divvy](https://mizage.com/divvy/) for windows management
* [fantastical](http://flexibits.com/fantastical) nice ui for Google Calendar
* [tree](http://mama.indstate.edu/users/ice/tree/) for pretty folders output
* [ffmpeg](https://www.ffmpeg.org/) for vide converting
* [clean my mac](http://macpaw.com/cleanmymac) for garbage cleaning
* [Kid3](http://kid3.sourceforge.net/) for mp3 tagging

#### Development
* [git](http://git-scm.com/) for vc
* [git-flow](https://github.com/nvie/gitflow) for nice vc ([cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/))
* [sublime-text3](http://www.sublimetext.com/3) for code
* [mou](http://25.io/mou/) for markdown editing
* [genymotion](http://www.genymotion.com/) fast and slicky android emulator
* [github](https://mac.github.com/) for github
* [java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) for java :)
* [jenv](http://www.jenv.be/) for java versions management
* [gradle](http://gradle.org/) for building java apps
* [scala](http://scala-lang.org/) for nice scala development
* [sbt](http://www.scala-sbt.org/) for scala building
* [intellij-idea](https://www.jetbrains.com/idea/) powerful IDE
* [android-studio](https://developer.android.com/sdk/installing/studio.html) IDE for android 
* [dash](http://kapeli.com/dash) for docs
* [rbenv](https://github.com/sstephenson/rbenv) for managing ruby versions
* [ngrok](https://ngrok.com/) for proxing localhost to other
* [mongodb](http://www.mongodb.com/) as document database
* [node](https://nodejs.org/) for nodejs (with jshint and csslint for SublimeLinter, read about it in Sublime section)

### App Store

* [files](http://filesmanager.info/) for nice 2-panel style file management. 
* [paw](http://luckymarmot.com/paw) http client for Mac
* [codepoints](https://infincia.com/apps/codepoints) for special symbols
* [caffeine](http://lightheadsw.com/caffeine/) prevents mac from sleeping
* [telephone](http://www.tlphn.com/) for VoIP calls
* [1password](https://agilebits.com/onepassword) for password management
* [pixelmator](http://www.pixelmator.com/) for image editing
* [vox](http://coppertino.com/) audio player

## Configure apps 

After installation we should setup some of our apps. Most important mentioned here.

#### Sublime

Install PackageControl for sublime ([instructions](https://packagecontrol.io/installation)). Then follow for syncing guide. For me it's [dropbox-osx](https://packagecontrol.io/docs/syncing#dropbox-osx) couple.

Useful sublime plugins: 

* [Emmet](http://emmet.io/)
* [Git](https://github.com/kemayo/sublime-text-git), 
* [SublimeLinter](http://sublimelinter.com/) (with Lints: [csslint](https://github.com/SublimeLinter/SublimeLinter-csslint), [jslint](https://github.com/SublimeLinter/SublimeLinter-jshint), [json](https://github.com/SublimeLinter/SublimeLinter-json)). Nice example how to use SublimeLinter [video](http://www.youtube.com/watch?v=u6fvJRao-E4).

#### Other

todo workflows for alfred

## Success

Yeaaah! We've done it. And saved a lot of time! 

![](https://img-fotki.yandex.ru/get/16185/59765760.0/0_a7b16_f3a9b1d8_L.jpg)