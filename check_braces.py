with open("conalep/EDOA_V2/src/data/teachingPlan.js", "r", encoding="utf-8") as f:
    text = f.read()
print("Total {:", text.count("{"))
print("Total }:", text.count("}"))
print("Total [:", text.count("["))
print("Total ]:", text.count("]"))
