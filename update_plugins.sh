#!/bin/bash

PLUGINS=$(cordova plugin list | awk '{print $1}')

for PLUGIN in $PLUGINS; do
    cordova plugin rm $PLUGIN --save && cordova plugin add $PLUGIN --save
done
