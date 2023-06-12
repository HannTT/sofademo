import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import GlobalStyle from '~/components/GlobalStyles';
import PublicRoute from '~/components/routing/PublicRoute';

import Home from './views/Home';
import Detail from './views/Detail';
import Material from './views/Material';
import SofaFabric from './views/SofaFabric';
import DetailSofaFabric from './views/DetailSofaFabric';


function App() {
  return (
      <GlobalStyle>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            {/* <PublicRoute exact path="/home/:categoryName" component={CategoryPage} /> */}

            <PublicRoute exact path="/sofa" component={Home} />
            <PublicRoute exact path="/sofa/:categoryName" component={Detail} />
            <PublicRoute exact path="/sofaFabric" component={SofaFabric} />
            <PublicRoute exact path="/sofaFabric/:categoryName" component={DetailSofaFabric} />
            <PublicRoute exact path="/material" component={Material} />
          </Switch>
        </Router>
      </GlobalStyle>
  );
}

export default App;
