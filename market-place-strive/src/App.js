import {Container} from 'react-bootstrap'
import './App.css';
import {
  BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import TopNavBar from './components/Navbar/TopNavBar';
import Cart from './components/Cart/Cart';
import Home from './components/views/Home';
import ProductDetails from './components/views/ProductDetails';
import BackOffice from './components/views/BackOffice';
import NotFound from './components/views/NotFound';
import { useEffect, useState } from 'react'


function App() {
  const [toggleCart, setToggleCart] = useState(false)
  const [updateCart, setUpdatedCart] = useState(false)

  return (
    
    <Container className="p-0" fluid>
      <TopNavBar setToggleCart={setToggleCart} toggleCart={toggleCart}/>
      <Cart setToggleCart={setToggleCart} toggleCart={toggleCart} setUpdatedCart={setUpdatedCart} updateCart={updateCart} />
      <Router>
            <Switch>
                <Route path="/" exact render={()=><Home setUpdatedCart={setUpdatedCart} updateCart={updateCart}/>} />
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
