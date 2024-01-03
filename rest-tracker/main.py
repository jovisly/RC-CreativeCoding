"""Rest Tracker

prompt upon opening terminal:
when's the last time you rested?
multiple choice:
1. just came back from rest ---> what did you do? for how long? ---> goes into tracker
2. within the last 24 hours ---> what did you do? for how long? ---> suggest small rest option
    suggestions:
    stretch
    rest
    nap
    get a glass of water
    meditate for 10-15 minutes
    talk to a friend
    pet your pet
    go for a walk

3. more than 24 hours ago ---> ok stop working! go sleep bye! ---> close terminal window

Dreams:
    check time since last prompted to rest
    instead of running when terminal opens
"""
import json
import os
import subprocess


from nlp import first_answer, json_answer
from utils import update_rest_log


REST_LOG = "rest_log.json"

# Resr log file format: list of dicts, each with keys:
#  - time: time of rest
#  - duration: duration of rest in minutes
#  - activity: what you did during rest

if os.path.exists(REST_LOG):
    rest_log = json.load(open(REST_LOG))
else:
    rest_log = []

subprocess.run(['osascript', '-e', 'say "When did you last take a rest?"'])

last_rest = input("Describe your last rest: when it was, what activity was it, and for how long.\n> ")

# Send input to OpenAI
answer = first_answer(last_rest)
json_formatted = json_answer(last_rest)
print("")
print("json_formatted string:")
print(json_formatted)
print("")
subprocess.run(['osascript', '-e', f'say "{answer}"'])
update_rest_log(rest_log, json_formatted)

# If user hasn't rested for a long time, we can terminate the terminal.
# subprocess.run(['osascript', '-e', 'tell application "Terminal" to close first window'])


