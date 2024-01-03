import classes from "./Event.module.css";
import ButtonF from "../../../UI/Button/ButtonF";
import {useState} from "react";
import {actions_values} from "../../../Constants"

const Event = (props)=>{
    const [action, setAction] = useState(props.actionID)
    const [value, setValue] = useState(props.actionValue)

    const deleteHandler = () =>{
        console.warn("deleting...", props.ID)
        props.delete(props.ID)
    }
    const updateHandler_action = (event) =>{
        console.log("zapisuji: Akce ID:", event.target.value)
        setAction(event.target.value)
        props.update(props.ID,event.target.value, 1)
    }
    const updateHandler_value = (event) =>{
        //console.log("zapisuji: Akce Value:", event.target.value)
        setValue(event.target.value)
        props.update(props.ID,event.target.value,2)
    }

    return <div className={classes.mainBar}>
        {props.ID}
        <select className={classes.selectInputForAc} onChange={updateHandler_action} defaultValue={action}>
            {actions_values.map((x) =>{
                return <option key={x.value} value={x.value}>{x.text}</option>
            })}
        </select>
        <input className={classes.textInputForAc} type={"text"} onChange={updateHandler_value} defaultValue={value}/>
        <ButtonF type={6} action={deleteHandler} name={"x"} isSubnameEnabled={false} isDisabled={true}/>
    </div>
}
export default Event