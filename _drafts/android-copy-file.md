


#!/usr/bin/env bash

# adb -s 192.168.56.101:5555 shell "run-as ru.ok.tamtam do smth"

adb exec-out run-as ru.ok.messages cat databases/cache.db > $TMPDIR/cache.db
sqlite3 -line $TMPDIR/cache.db "$1"
