
import Lobby from './screens/Lobby';
import './App.css';
import {Route} from 'react-router-dom'
import Room from './screens/Room';
function App() {
  return (
    <div className="App">
      <Route path="/" exact><Lobby/></Route>
      <Route path="/room/:roomId"><Room/></Route>
    </div>
  );
}

export default App;

