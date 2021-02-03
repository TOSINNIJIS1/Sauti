import './App.css';
import Landing from './landingpage/landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './registerpage/register';
import Login from './loginpage/login';
import Dashboard from './dashboard/dashboard';
import Product from './addProduct/product';
import ListProduct from './listPage/list';
import Profile from './profile/profile';
import Market from './marketPrices/market';
import './listPage/styles/list.scss';
import PrivateRoute from './auth/protectedRoute';
import Mahiya from './mahiya';


function App() {

  const bang = () => {
    console.log('bang')
  }
  
  

  return (
    <div className='container'>
      {/* <SideNav /> */}
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route path='/register' render={() => <Registration />} />
          <Route path='/login' render={() => <Login  />} />
          <PrivateRoute path='/dashboard' component={ Dashboard } />
          <Route path='/market' component={ Market} />
          <Route path='/list' component={ ListProduct } />
          <Route path='/profile' component = { Profile } />
          <Route path='/product' component = { Product } />
          <Route path='/mahiya' render={() => <Mahiya  />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
