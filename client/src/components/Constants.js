import {riskSet} from "./risks_input/data_for_test";

export const dataModel = {
    isTestButtonVisible: false,
    isSideBarVisible:false,
    isGenerateButtonEnabled:true,
    screen:{
        stepID:2,
        activeID:0
    },
    risks:riskSet
}

export const addNewActionObject = {
    id: 0,
    actionID: null,
    actionValue: null,
    final_value_for_action: null
}

export const actions_values = [
    {
        value:0,
        text:".O."
    },
    {
        value:1,
        text:"Výluka - ANO"
    },
    {
        value:2,
        text:"Výluka - částečná"
    },
    {
        value:3,
        text:"Přirážka"
    },
    {
        value:4,
        text:"Úprava věku"
    },
    {
        value:5,
        text:"Úprava PČ"
    }
]