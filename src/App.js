import { useState } from 'react';
import './App.css';

const UserName = [
  { name: 'Aramn', username: 'arman' },
  { name: 'Jayeed', username: 'jayeed' },
  { name: 'Adiba', username: 'adiba' },
  { name: 'Mahmuda', username: 'mahmuda' },
  { name: 'Sumon', username: 'Sumon' },
  { name: 'Hosneara', username: 'hosneara' },
  { name: 'Raihan', username: 'raihan' }
];
function App() {
  return (
    <div className="App">

      <h1 className='title'>This is First React App Based Web Page</h1>
      <h2 className='user'>Users :</h2>
      <div className="display">
        {
          UserName.map(user => <User key={user.name} users={user}></User>)
        }
      </div>
      <Calculator></Calculator>
    </div>
  );
}
function Calculator() {
  const [cal, setCal] = useState(0);
  const plus = () => setCal(cal + 1);
  const minus = () => setCal(cal - 1);

  if (cal < 1) {
    document.getElementById('minus').setAttribute("disabled", true);
    document.getElementById('minus').style.opacity = 0.5;
  } else {
    document.getElementById('minus').removeAttribute("disabled", true);
    document.getElementById('minus').style.opacity = 1;
  }

  return (
    <div className="calculator">
      <h3>Number: {cal}</h3>
      <div className="box">
        <button id='plus' onClick={plus}>+1</button>
        <button id='minus' onClick={minus}>-1</button>
      </div>
    </div>
  )
  
}

function User(props) {
  return (
    <div className='card'>
      <h3 className="card-title">Name : {props.users.name}</h3>
      <p className="sub-title">User Name : {props.users.username}</p>
      <h5>The student of MERN Stack Development</h5>
    </div>
  )
}

export default App;
