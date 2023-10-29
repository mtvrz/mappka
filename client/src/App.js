import classes from './App.module.css';
import Background from "./components/background/Background";
import Layer_main from "./Layer_main";

function App() {
  return (
    <div className={classes.App}>
        <Layer_main/>
        <Background/>
        <div className={classes.clr}/>
    </div>
  );
}

export default App;
