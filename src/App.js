import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/home';
import Main from './pages/main';
import Realtime from './pages/realtime';
import PRPD from './pages/prpd';
import Event from './pages/event';
import Trend from './pages/trend';
import Alarm from './pages/alarm';
import Setting from './pages/setting';

const App = () => {

  return (
    <div>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/main" component={Main} />
        <Route path="/realtime" component={Realtime} />
        <Route path="/prpd" component={PRPD} />
        <Route path="/event" component={Event} />
        <Route path="/trend" component={Trend} />
        <Route path="/alarm" component={Alarm} />
        <Route path="/setting" component={Setting} />
      </Layout>
    </div>
  )
}

export default App;
