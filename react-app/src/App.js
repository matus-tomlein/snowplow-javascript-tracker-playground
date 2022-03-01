import './App.css';
import { Link } from "react-router-dom";
import { useLocationChange } from './tracker';

function App() {
  useLocationChange();

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <p>
        <Link to="/snowplow">About Snowplow</Link>
      </p>
    </div>
  );
}

export default App;
