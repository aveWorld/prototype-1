import { Route, Switch } from 'react-router-dom';

// Styles
import './styles/Main.scss';

// Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
    </Switch>
  );
}

export default App;
