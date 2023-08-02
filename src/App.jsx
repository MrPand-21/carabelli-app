import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import "semantic-ui-css/semantic.min.css";
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <div className='ui container main'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
