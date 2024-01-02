import classes from "./RiskHeader.module.css";

const RiskHeader = () => {
    return <div className={classes.main}>
        <span>Verze rizika</span>
        <span>Typ</span>
        <span>Typ plnění</span>
        <span>do věku</span>
        <span>pojistná částka</span>
    </div>
}

export default RiskHeader