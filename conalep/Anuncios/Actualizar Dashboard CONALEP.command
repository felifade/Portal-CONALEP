#!/bin/zsh
cd "$(dirname "$0")"
/usr/bin/env node generar_data_conalep.js
open index.html
