import {Container} from 'react-bootstrap'
import './App.css';
import TopNavBar from './components/Navbar/TopNavBar';
import AppRouter from './components/routes/AppRouter';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Home from './components/views/Home';
import ProductDetails from './components/views/ProductDetails';
import BackOffice from './components/views/BackOffice';
import NotFound from './components/views/NotFound';

function App() {
  return (
    
    <Container className="p-0" fluid>
      <TopNavBar/>
      <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" exact component={ProductDetails} />
                <Route path="/backoffice" exact component={BackOffice} />
                {/* {
                    routes.map(route => (
                        <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        render={route.component}
                        />
                    ) )
                } */}
                <Redirect to={"/404"} component={NotFound} />
            </Switch>
            
        </Router>
    </Container>
  );
}

export default App;
