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
        for(let e; e<riskArray.length;e++){
            riskArray.splice(e,0,
            {
            }
            )
        }
//___________________
        console.log(x)
        riskArray.splice(1,1,
            {
                risk: {
                    verzeRizika: "ID4",
                    typ: "ZP",
                    typPlneni: "PC",
                    PC: 100,
                    VEK: 60
                },
                id: 3,
                changeEvent: [],
                isActive: true
            })
        console.log(riskArray)

        setRiskArray([...riskArray])
    }


    const update_risk_handler = (id, value) => {

    }
    return <div className={classes.main}>
        <RiskHeader/>
        <div className={classes.risks}>
            {riskArray.map((x) => {
                return <Risk key={x.id} ID={x.id} riskValues={x.risk} changeEvent={x.changeEvent}
                             update={update_risk_handler} isActive={x.isActive} activeID={}/>
            })}
        </div>
        <ButtonF type={riskPage.button.type} name={riskPage.button.name.toUpperCase()}
                 isSubnameEnabled={riskPage.button.enableSubname} action={generate_handler}
                 isDisabled={!props.data.isGenerateButtonEnabled}/>
    </div>
}

export default Risks