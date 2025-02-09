import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Menu from './components/menu';
import Register from './components/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/menu" component= {Menu} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/register" component= {Register} />
      </Switch>
    </Router>
  );
}

export default App;
