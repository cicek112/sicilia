import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pop from "./pages/Pop";
import Facts from "./pages/Facts";
import Inter from "./pages/Inter";
import Left from "./pages/Left";
import Hot from "./pages/Hot";
import History1 from "./pages/History1";
import Main from "./pages/Main";
import Right from "./pages/Right";
import FaSolidfire from "./pages/FaSolidfire";
import CardBest from "./pages/CardBest";
import CardBest1 from "./pages/CardBest1";
import CardBest2 from "./pages/CardBest2";
import Gray from "./pages/Gray";
import Know from "./pages/Know";
import How from "./pages/How";
import Pink from "./pages/Pink";
import Nav from "./pages/Nav";

import "./Big.css"

function App() {
  return (
    <div>
      <Nav></Nav>
      <Main></Main>
      <div style={{"display":"flex","margin-top":"3em"}}>
        <Pink></Pink>
        <Gray></Gray>
      </div>
      <div style={{"display":"flex" ,"margin-top":"3em"}}> 
        <Left style={{"width":"20%"}}></Left>
        <section style={{"display":"block" , "width":"125%"}}>
          <How></How>
          <History1></History1>
          <Know></Know>
          <Hot></Hot>
          <Pop></Pop>
          <Facts></Facts>
        </section>
        <Right style={{"width":"30%"}}></Right>
      </div>
      <Inter></Inter>
    </div>
      

  );
}
export default App;
