export const requestPage = {
    header:{
        text: "request"
    },
    textInput:{
        disabled: false
    },
    checkbox:{
        text: "preset oce",
        disabled: true,
    },
    button:{
        text:"next"
    }
}
/*
    */
export const actionPage = [
    {
        text:"ok",
        subText: "",
        actionID: 0,
        enabled:true
    },
    {
        text:"ok",
        subText: "s výhradou",
        actionID: 1,
        enabled:false
    },
    {
        text:"nok",
        subText: "nelze ocenit",
        actionID: 2,
        enabled:false
    },
    {
        text:"nok",
        subText: "nepojistitelná osoba",
        actionID: 3,
        enabled:false
    }
]
export const sideBar = [
    {
        name:"request",
        enabled:true,
        actionID:1
    },
    {
        name:"action",
        enabled:true,
        actionID:2
    },
    {
        name:"risks",
        enabled:true,
        actionID:3
    }

]