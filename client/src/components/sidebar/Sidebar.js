import classes from "./Sidebar.module.css";
import ButtonF from "../UI/Button/ButtonF";
import {sideBar} from "../field_data";
const Sidebar = (props) => {

    const stepChange = (x) =>{
        //console.log(x)
        props.action(x-1)
    }
    return <div className={classes.main}>
        {sideBar.map((x)=>{
            return <ButtonF
                key={x.actionID}
                type={3}
                name={x.name.toUpperCase()}
                isDisabled={props.data.screen.stepID < x.actionID?true:false}
                ID={x.actionID}
                action={stepChange}
            />
        })}
    </div>
}

export default Sidebar