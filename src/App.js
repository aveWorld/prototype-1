import { Route, Switch } from 'react-router-dom';

// Styles
import './styles/Main.scss';

// Components
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/login" component={() => <Login />} />
      </Switch>
    </Layout>
  );
}

export default App;
