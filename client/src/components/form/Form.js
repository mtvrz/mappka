import classes from "./Form.module.css";

const Form = (props) =>{
    /*
    form = 1 - BASIC INPUT
    form = 2 - RISK INPUT
    form = 3 - UPDATE INPUT
    */
    return <div className={`${classes.form} ${
        props.step === 0 || props.step === 1 ? classes.formBasic:
            props.step === 2 ? classes.formWide:
                props.step === 3 ? classes.formSmall:
                    null
    }`
    }>{props.children}</div>
}

export default Form