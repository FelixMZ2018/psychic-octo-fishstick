import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Message } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container>
        <Message content='Welcome to the second coding challenge'></Message>
      </Container>

    </div>
  );
}

export default App;
