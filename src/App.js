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
import './listPage/styles/list.scss'


function App() {
  return (
    <div className='container'>
      
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route path='/register' render={() => <Registration />} />
          <Route path='/login' render={() => <Login  />} />
          <Route path='/dashboard' render={() => <Dashboard />} />
          <Route path='/market' render={() => <Market />} />
          <Route path='/list' render={() => <ListProduct />} />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/product' render={() => <Product />} />
          <Route render={() => <h1> Page not found </h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
