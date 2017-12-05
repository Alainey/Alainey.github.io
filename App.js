import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const monsters = [
	{name: "Reincarnated Haku", rarity: 7,
		element: "Dark", sub_element: "Fire", type1: "God", type2: "Healer", type3: "Attacker"},
	
	{name: "Guardian of the Imperial Capital, Athena", rarity: 10,
		element: "Dark", sub_element: "Water", type1: "God", type2: "Devil", type3: "Attacker"},
	
	{name: "Hand of the Dark God, Metatron", rarity: 7,
		element: "Dark", sub_element: "Light", type1: "God", type2: "Attacker", type3: ""},
	
	{name: "Sparkling Goddess of Secrets, Kali", rarity: 7,
		element: "Light", sub_element: "Fire", type1: "God", type2: "Healer", type3: ""},
	
	{name: "God of the Destroying Lance, Odin", rarity: 8,
		element: "Fire", sub_element: "Dark", type1: "God", type2: "Attacker", type3: ""},
	
	{name: "Thought Spinner Norn, Verdandi", rarity: 7,
		element: "Wood", sub_element: "Fire", type1: "God", type2: "Balanced", type3: "Machine"},
	
	{name: "Judging Scale Steel Star Goddess, Eschamali",  rarity: 7,
		element: "Dark", sub_element: "Light", type1: "Machine", type2: "God", type3: ""},
	
	{name: "Blazing Goddess of Power, Kali", rarity: 8,
		element: "Dark", sub_element: "Fire", type1: "God", type2: "Dragon", type3: ""},
	
	{name: "Reincarnated Kushinadahime", rarity: 8,
		element: "Wood", sub_element: "Water", type1: "Healer", type2: "Dragon", type3: "God"},
	
	{name: "God of the Night, Tsukuyomi Dragon", rarity: 9,
		element: "Dark", sub_element: "Light", type1: "God", type2: "Dragon", type3: ""},
	
	{name: "Awoken Shiva", rarity: 7,
		element: "Fire", sub_element: "Fire", type1: "Attacker", type2: "Devil", type3: ""},
	
	{name: "Reincarnated Susano no Mikoto", rarity: 8,
		element: "Wood", sub_element: "Dark", type1: "Physical", type2: "Dragon", type3: "God"},
	
	{name: "Judging-Claw Orange Dragonbound, Saria", rarity: 6, 
		element: "Light", sub_element: "Fire", type1: "Dragon", type2: "Physical", type3: ""},
	
	{name: "Restrained Dragon Hero, Liu Bei", rarity: 7, 
		element: "Wood", sub_element: "Fire", type1: "Dragon", type2: "Attacker", type3: ""},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <FilteredList items={monsters} />
      </div>
    );
  }
}

export default App;
