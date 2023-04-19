#!/bin/sh
UUID=${UUID:-'50e41065-6f35-4750-b812-29349288f5df'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
