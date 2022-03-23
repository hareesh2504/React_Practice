import './App.css';
import "./output.css";
import SignIn from './signin';
import SignUp from './signup';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter className="App-header">
        <h1>
          Welcome to the Web Authentication Application
        </h1>
        <div>
          {/* <input type="button" value="SignUP" name="SignUp" className="btn"
            onClick={SignUp} />*/}
          <Link to="/signup"><button className='btn'>signup</button></Link>
          
          {/* <input type="button" value="SignIN" name="SignIn" className="btn"
            onClick={SignIn} />*/}
          <Link to="/signin"><button className='btn'>signin</button></Link>
          
        </div>
        <Switch>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/signin" exact component={SignIn}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
