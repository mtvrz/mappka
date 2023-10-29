import classes from "./Action_input.module.css";
import {Fragment, useEffect, useState} from "react";
import ButtonF from "../UI/Button/ButtonF";
import {actionPage} from "../field_data";

const Action_input = (props) => {

    const [data_act_page, setData_act_page] = useState(props.data)

    useEffect(()=>{
        console.log(props.data)
    },[])
    const nextStep = (x) =>{
        //console.log("Xko z buttonu",x, data_act_page.screen.stepID)
        const data_after_change = {...data_act_page,screen:{...data_act_page.screen,stepID:data_act_page.screen.stepID+1}}
        props.next(data_after_change)
    }
    return <Fragment>
        <h3 className={classes.headerInput}>ACTION</h3>
        {actionPage.map((x) =>{
        return <ButtonF
            key={x.actionID}
            name={x.text.toUpperCase()}
            subname={x.subText}
            isDisabled={!x.enabled}
            isSubnameEnabled={true}
            type={2}
            action={nextStep}/>
        })}
           </Fragment>
}
export default Action_input