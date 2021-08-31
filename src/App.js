import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './componets/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {'Brown'}/>
      <PersonCard firstName = {"Joe"} lastName = {"Doe"} age = {43} hairColor = {'Black'}/>
      <PersonCard firstName = {"Bobby"} lastName = {"Don"} age = {21} hairColor = {'Red'}/>
      <PersonCard firstName = {"Cat"} lastName = {"Meow"} age = {99} hairColor = {'Green'}/>
    </div>
  );
}

export default App;
