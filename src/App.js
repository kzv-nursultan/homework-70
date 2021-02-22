import './App.css';
import {BrowserRouter, 
  Route, 
  Switch} from "react-router-dom";
import MainPage from './containers/MainPage/MainPage';
import OrderPage from './containers/OrderPage/OrderPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/order-page' component={OrderPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
