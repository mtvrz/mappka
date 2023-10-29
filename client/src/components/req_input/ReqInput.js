import classes from "./ReqInput.module.css";
import {Fragment, useState} from "react";
import ButtonF from "../UI/Button/ButtonF";
import {requestPage} from "../field_data";

const ReqInput = (props) =>{
const [data_req_page, setData_req_page] = useState(props.data)
    const nextStep = () =>{
        const data_after_change = {...data_req_page,screen:{...data_req_page.screen,stepID:data_req_page.screen.stepID+1}}
        props.next(data_after_change)
    }
    return <Fragment>
        <h3 className={classes.headerInput}>{requestPage.header.text.toUpperCase()}</h3>
        <input type={"text"} className={classes.textInput} disabled={requestPage.textInput.disabled}/>
       <div className={classes.check}>
           <input type={"checkbox"} className={classes.checkbox} disabled={requestPage.checkbox.disabled}/>
           <label>{requestPage.checkbox.text.toUpperCase()}</label>
       </div>
        <ButtonF type={1} name={"NEXT"} action={nextStep}/>
    </Fragment>
}

export default ReqInput