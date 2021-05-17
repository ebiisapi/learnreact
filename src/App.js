import logo from './logo.svg';
import './App.css';
import HomeClassComponent from './components/HomeClassComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFunctionalComponent from './components/HomeFunctionalComponent';
import NotesFunctionalComponent from './components/NotesFunctionalComponent';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function DefaultReact() {
  var name = "Ebi Sitanggang";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome, {name}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function LandingPage(){
  return (
    <div>
      {/* <a href="/agenda/class">Go To Agenda Class</a> */}
      <Link to="agenda/class">Go To Agenda Class</Link>
      <Link to="agenda/function">Go To Agenda Function</Link>
    </div>
  );
}

function Routing(){
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/agenda/class">
          <h2>Powered By Class Component</h2>
          <HomeClassComponent/>
        </Route>

        <Route path="/agenda/function">
          <h1>Powered By Functional Component</h1>
          <HomeFunctionalComponent />
        </Route>
      </Switch>
    </Router>
  );
}

function App(){
  return (
    <div>
      <center>
        <h1>ReactNotes.io</h1>
        <p>Welcome and feel free to use our application.</p>
      </center>
      <Routing />
      <NotesFunctionalComponent />
    </div>
  )
}

export default App;
