import classes from "./Risks.module.css";
import ButtonF from "../UI/Button/ButtonF";
import {riskPage} from "../field_data"
import Risk from "./risk/Risk";
import RiskHeader from "./RiskHeader";
import {useEffect, useState} from "react";
import risk from "./risk/Risk";

const Risks = (props) => {
    const [data, setData] = useState(props.data)
    const [riskArray, setRiskArray] = useState(props.data.risks)

    const generate_handler = () => {
        //console.log(".o.", data)
        //set_active_handler(1)
    }

    const set_active_handler = (x) => {
        //console.log("changing active ID to ", x)
        setData({...data,screen:{...data.screen,activeID:x}})
    }


    const update_risk_handler = (riskID, value) => {

    }
    return <div className={classes.main}>
        <RiskHeader/>
        <div className={classes.risks}>
            {data.risks.map((x) => {
                return <Risk key={x.id} ID={x.id} riskValues={x.risk} changeEvent={x.changeEvent}
                             update={update_risk_handler} isActive={x.isActive} activeID={data.screen.activeID} changeActive={set_active_handler}/>
            })}
        </div>
        <ButtonF type={riskPage.button.type} name={riskPage.button.name.toUpperCase()}
                 isSubnameEnabled={riskPage.button.enableSubname} action={generate_handler}
                 isDisabled={!props.data.isGenerateButtonEnabled}/>
    </div>
}

export default Risks