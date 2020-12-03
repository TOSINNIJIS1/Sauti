import './App.css';
import Landing from './landingpage/landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './registerpage/register';
import Login from './loginpage/login';
import Dashboard from './dashboard/dashboard';
import Product from './addProduct/product';
import ListProduct from './listPage/list';

function App() {
  return (
    <div className='container'>
      
      {/* <Landing /> */}
      <Router>
        <Switch>
          
          <Route exact path='/' render={() => <Landing />} />
          <Route path='/register' render={() => <Registration />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/dashboard' render={() => <Dashboard />} />
          <Route path='/product' render={() => <Product />} />
          <Route path='/list' render={() => <ListProduct />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
