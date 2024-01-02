import classes from "./Risk.module.css";
import {useEffect, useState} from "react";
import AddEvent from "./event/AddEvent";

const Risk = (props) => {

    const [values, setValues] = useState(props.riskValues)
    const [changeEv, setChangeEv] = useState(props.changeEvent)
    const [isActive, setIsActive] = useState(props.isActive)

    const setActiveHandler = () => {
        if (isActive === true) {
            setIsActive(false)
        }
        else{
            setIsActive(true)
        }

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
        className={`${classes.main} ${isActive === true ? classes.active : classes.nonactive}`}>
        <div className={`${classes.row} ${props.ID % 2 === 0 ? classes.rowOdd : classes.rowEven}`}
             onClick={setActiveHandler}>
            <div>{values.verzeRizika}</div>
            <div>{values.typ}</div>
            <div>{values.typPlneni}</div>
            <div><s>{values.VEK}</s> {values.VEK}</div>
           <div><s>{values.PC}</s> {values.PC}</div>
        </div>
        {isActive && XY}
    </div>
}
export default Risk