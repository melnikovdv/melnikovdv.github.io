

#!/usr/bin/env bash

# adb -s 192.168.56.101:5555 shell "run-as ru.ok.tamtam do smth"

if [ $# -gt 0 ]; then
    adb exec-out run-as ru.ok.messages cat databases/cache.db > $TMPDIR/cache.db
    sqlite3 -line $TMPDIR/cache.db "$1"
else
    echo "Example: ./sqlquery.sh \"select * from messages where msg_chat_id=8\""
fi
