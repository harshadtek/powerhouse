import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Display a Submit Button</h1>

<form action="/action_page.php">
  <label for="fname">First name: </label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name: </label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
        <button onclick="myFunction()">ENTER</button>
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

export default App;
