import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import "semantic-ui-css/semantic.min.css";
import Navi from './layouts/Navi';
import { NavigationProvider } from './utilities/context/NavigationContext';

function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <Navi />
        <div className='ui container main'>
          <Dashboard />
        </div>
      </NavigationProvider>
    </div>
  );
}

export default App;
