# -*- coding: utf-8 -*-
with open('conalep/EDOA/public/html/W01.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    '<ul class="questions" style="font-size: clamp(14px, 1vw, 18px);">',
    '<ul class="questions ten-q">'
)
html = html.replace(
    '</style>',
    '    .ten-q li { font-size:clamp(12px, 0.9vw, 15px); margin-bottom:2px; line-height:1.2; list-style-type:none; margin-left:-20px; }\n  </style>'
)

with open('conalep/EDOA/public/html/W01.html', 'w', encoding='utf-8') as f:
    f.write(html)
