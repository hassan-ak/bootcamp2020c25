import './App.css';
import { Todo } from './components/Todo';
import MirageServer from "./mirage";

MirageServer()

function App() {
  return (
    <div>
      <Todo/>
    </div>
  );
}

export default App;
