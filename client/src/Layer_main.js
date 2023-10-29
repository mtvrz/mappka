import {Fragment, useEffect, useState} from "react";
import Action_input from "./components/action_input/Action_input";
import Form from "./components/form/Form";
import ReqInput from "./components/req_input/ReqInput";
import Loader from "./components/UI/Loader/Loader";
import Sidebar from "./components/sidebar/Sidebar";
import {dataModel} from "./components/Constants";

const Layer_main = (props) =>{
    const [data, setData] = useState(dataModel)


    const stepChangeHandler = (x) =>{
        console.log("stepChangeHandler",data.screen.stepID,">",x.screen.stepID)
        setData(x)
       // debugger
    }
    const useStepperHandler = (x) =>{
        console.log("stepChangeHandler",data.screen.stepID,">",x)
        setData({...data,screen: {...data.screen,stepID: x}})
        // debugger
    }
    const test = () =>{
        console.log(data)
    }


    return <Fragment>
        <Sidebar action={useStepperHandler} data={data}/>
        <Form step={data.screen.stepID}>
            {data.screen.stepID === 0? <ReqInput next={stepChangeHandler} data={data} form={1}/>:
                data.screen.stepID === 1?<Action_input next={stepChangeHandler} data={data} form={1}/>:
                    <Loader/>
            }
        </Form>
        <button onClick={test}>test</button>
    </Fragment>
}

export default Layer_main