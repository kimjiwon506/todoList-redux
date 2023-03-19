import logo from './logo.svg';
import './App.css';
import { TodoContainer } from './container/TodoContainer';
import { Provider } from 'react-redux';
import { TodoProvider } from './context/todos';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </div>
  );
}

export default App;
