import classes from "./ButtonF.module.css";

const ButtonF = (props) =>{
        /*
        action
        type
        isSubnameEnabled
        name
        subname
        isDisabled
         */

    const func = () =>{
        //console.log(props.ID)
        props.action(props.ID)
    }
    return <button
        className={props.type == 1? classes.main:
                     props.type == 2?classes.action:
                         props.type ==3? classes.side:
                            props.type ==4? classes.gen:
                                props.type ==5? classes.addEvent:
                                    props.type ==6? classes.delEvent:
                                null}
        onClick={func}
        disabled={props.isDisabled}
    >{props.name}
        {props.isSubnameEnabled && <br/>}
        {props.isSubnameEnabled && <label className={classes.text}>{props.subname}</label>}
    </button>
}

export default ButtonF