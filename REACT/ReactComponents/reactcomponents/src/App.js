import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List drink="Coffee" />
        <List drink="Tea" />
        <List drink="Beer" />
        <Button text="Sendar" />
        <Card firstname="John" surname="Doe" workingAs="Architect & Engineer" />
      </header>
    </div>
  );
}

export default App;
