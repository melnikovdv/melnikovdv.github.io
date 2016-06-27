
Для решения ряда сложностей с нотификациями все бы упростил факт показана сейчас наша нотификация или нет.
Раньше в Android был хак, который позволял это сделать. Сейчас он не работает. Проверял на Nexus 4 и Nexus 5
http://stackoverflow.com/questions/3630733/how-to-check-which-notifications-are-active-in-status-bar-in-android-dev
http://stackoverflow.com/questions/12654820/is-it-possible-to-check-if-a-notification-is-visible-or-canceled
В Android добавили API, но к сожалению данная возможность есть только с API 23 https://developer.android.com/reference/android/app/NotificationManager.html#getActiveNotifications()
Есть еще вариант с NotificationListenerService, но он требует пойти в настройки андроид и дать руками разрешение приложению читать "все нотификации телефона"
https://developer.android.com/reference/android/service/notification/NotificationListenerService.html#getActiveNotifications%28%29
Остается один способ с setCancelIntent у NotificationBuilder'а. С ним поиграюсь еще после может .