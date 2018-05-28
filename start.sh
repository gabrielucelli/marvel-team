#!/bin/zsh

echo "Starting adb pointing to tcp 8081";
/Users/gabrielucelli/Library/Android/sdk/platform-tools/adb reverse tcp:8081 tcp:8081

echo "Starting react native server";
react-native start