#!/bin/bash

synthesize () {
  echo -n "text: "
  read text

  echo -n "voice: "
  read voice

  echo -n "slow (y/N)? "
  read slow

  node scripts/node/tts.js "$text" "$voice" "$slow"
}

# Begin Script

COMMAND=${1}

case "$COMMAND" in
  synth) synthesize $@;;
esac
