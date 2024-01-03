import classes from "./AddEvent.module.css";
import Event from "./Event";
import ButtonF from "../../../UI/Button/ButtonF";
import {useEffect, useState} from "react";
import {addNewActionObject} from "../../../Constants";

const AddEvent = (props) => {
    /*
    {
        id: ID Eventu
        actionID: ID Akce
        actionValue: Value Akce
        final_value_for_action: Skript-friendly část
    }
     */
    const [acts, setActs] = useState(props.actionObject.eventField)
    const [counter, setCount] = useState(props.actionObject.counter)
    const addEventHandler = () => {
    }
    const deleteValue = (idX) => {
    }
    const setValue = (id, value, route) => {
        props.updateObject(id, value, route)
    }
    useEffect(()=>{
    },[])

    return <div className={classes.main}>
        {acts.map((y) => {
            return <Event key={y.id} ID={y.id} actionID={y.actionID} actionValue={y.actionValue} delete={deleteValue}
                          update={setValue}/>
        })}
        <ButtonF type={5} action={addEventHandler} name={"+"} isSubnameEnabled={false}/>

    </div>
}
export default AddEvent