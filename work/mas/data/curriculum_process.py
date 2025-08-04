import json

with open('/home/haiyue/personal/jet-w.blog/src/work/mas/data/curriculums.json', 'w') as fw:
    curriculum = json.loads(fr)
	
curriculum['unique_key'] = curriculum['name']
curriculum['name'] = curriculum['name'][:12]

def change_child(parent):
    if parent.__contains__("children"):
        for item in parent["children"]:
            change_child(item)
    parent['unique_key'] = parent['name']
    parent['name'] = parent['name'][:12]

change_child(curriculum)
with open('/home/haiyue/personal/jet-w.blog/src/work/mas/data/curriculums.json', 'w') as fw:
    fw.write(json.dumps(curriculum, indent=4))