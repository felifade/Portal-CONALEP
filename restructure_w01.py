import re

with open('conalep/EDOA/public/html/W01.html', 'r', encoding='utf-8') as f:
    html = f.read()

# I will completely rewrite the slides generation to be cleaner.
# I'll extract the dictation, the activity, the visual example, and generate new slides.

def extract_section(hour_num):
    pass
