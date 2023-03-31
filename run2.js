#!/bin/sh
UUID=${UUID:-'5898a4ce-4bd3-4ccb-80ab-9b9fff393c35'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
