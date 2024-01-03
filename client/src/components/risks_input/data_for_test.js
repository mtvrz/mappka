const riziko = {
    verzeRizika: "ID2",
    typ: "ZP",
    typPlneni: "PC",
    PC: 100,
    VEK: 60
}

export const eventSet = {
    id:0,
    actionID:0,
    actionValue: "",
    final_value_for_action:""
}
export const riskSet = [
    {
        risk:riziko,
        id:1,
        changeEvent: {
            counter: 0,
            eventField: [eventSet]
        }
    },
    {
        risk:riziko,
        id:2,
        changeEvent: {
            counter: 0,
            eventField: [eventSet]
        }
    }
]