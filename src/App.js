import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Message } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container>
        <Message content='Welcome to the second ospin coding challenge'/>
        <Message info content='Your Task is to render a table from a mocked API call,
         just as in the real world this api can take a bit of time and occasionally fails completly
         You can simply call it by using form The APIModule.fetchData method.
         I would encurage using the semantic ui react library (it is already integrated) but you are free to choose
         '/>

      </Container>

    </div>
  );
}

export default App;
