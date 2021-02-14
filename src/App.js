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
import Edit from './listPage/edit';
import NotFound from './notfound'


function App() {


  return (
    <div className='container'>
      {/* <SideNav /> */}
      {/* <ReduxAuth /> */}
      <Router >
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route path='/register' render={() => <Registration />} />
          <Route path='/login' render={() => <Login  />} />
          <PrivateRoute path='/dashboard' component={ Dashboard } />
          <PrivateRoute path='/market' component={ Market} />
          <PrivateRoute path='/list' component={ ListProduct } />
          <PrivateRoute path='/profile' component = { Profile } />
          <PrivateRoute path='/product' component = { Product } />
          <PrivateRoute exact path='/edit/:id' component = { Edit } />
          <Route render={() => <NotFound />  } />
        </Switch>
      </Router>
    </div>
  );
}

export default App
