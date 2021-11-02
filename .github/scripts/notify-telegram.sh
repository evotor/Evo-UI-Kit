#!/bin/bash

TIME="10"
URL="https://api.telegram.org/bot$FRONTEND_TELEGRAM_BOT/sendMessage"
MESSAGE="$1%0A%0AProject: $PROJECT_NAME"

echo $URL
echo $MESSAGE

curl -s --max-time $TIME\
 --data "chat_id=$FRONTEND_TELEGRAM_CHAT"\
 --data "text=$MESSAGE"\
 --data "parse_mode=markdown"
 $URL # > /dev/null
