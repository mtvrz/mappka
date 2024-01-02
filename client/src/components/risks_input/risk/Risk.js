import classes from "./Risk.module.css";
import {useEffect, useState} from "react";
import AddEvent from "./event/AddEvent";

const Risk = (props) => {

    const [values, setValues] = useState(props.riskValues)
    const [changeEv, setChangeEv] = useState(props.changeEvent)

    const setActiveHandler = () => {
        props.activeID !== props.ID? props.changeActive(props.ID): props.changeActive(0)
        //setIsActive(isActive === true ? false : true)
        //console.log(props.ID)
    }
    const setChangeEvHandler = (x) => {
        console.log("Risk.js přijíma: ",x)
        setChangeEv(x)
        console.log("")
    }

    const XY = <div className={classes.activeBox}><AddEvent actionObject={changeEv} updateObject={setChangeEvHandler}/></div>

    return <div
        className={`${classes.main} ${props.activeID === props.ID? classes.active : classes.nonactive}`}>
        <div className={`${classes.row} ${props.ID % 2 === 0 ? classes.rowOdd : classes.rowEven}`}
             onClick={setActiveHandler}>
            <div>{values.verzeRizika}</div>
            <div>{values.typ}</div>
            <div>{values.typPlneni}</div>
            <div><s>{values.VEK}</s> {values.VEK}</div>
           <div><s>{values.PC}</s> {values.PC}</div>
        </div>
        {props.activeID === props.ID?<div className={classes.activeBox}><AddEvent actionObject={changeEv} updateObject={setChangeEvHandler}/></div>:null}
    </div>
}
export default Risk