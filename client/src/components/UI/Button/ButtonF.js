import classes from "./ButtonF.module.css";

const ButtonF = (props) =>{

    const func = () =>{
        //console.log(props.ID)
        props.action(props.ID)
    }
    return <button
        className={props.type == 1? classes.main:
                     props.type == 2?classes.action: classes.side}
        onClick={func}
        disabled={props.isDisabled}
    >{props.name}
        {props.isSubnameEnabled && <br/>}
        {props.isSubnameEnabled && <label className={classes.text}>{props.subname}</label>}
    </button>
}

export default ButtonF