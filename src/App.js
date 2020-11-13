import './App.css';
import EnglishCard from './EnglishCard'
import ChatRoom from './ChatRoom';
import MathCard from './MathCard';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Uploader from './FileUpload'


function App() {
  return (
    <div className="App">
       <Router>
         <Home/>
          <Switch>
            <Route path="/math">
              <MathCard />
            </Route>
            <Route path="/english">
              <EnglishCard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/uploader">
              <Uploader />
            </Route>
            <Route path="/">
              <ChatRoom />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
