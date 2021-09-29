import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,  // ? is for optional
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([])

  // map through people
  // people.map(person => {
  //   person.name
  // })

  return (
    <div className="App">
      <h1>People Invited to my Party.</h1>
    </div>
  );
}

export default App;
