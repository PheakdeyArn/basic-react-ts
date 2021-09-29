import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  category: {
    name: string,
    row_order: number,
    banner: string,
    slug?: string,  // ? is for optional
  }[]
}

function App() {

  const [category, setCategory] = useState<IState["category"]>([
    {
      name: "DC Universe",
      row_order: 4,
      banner: "https://cdn.vox-cdn.com/thumbor/w9GJ7x0SrYOdiqkVtRtWAOVDNb4=/0x0:1220x813/1200x800/filters:focal(513x310:707x504)/cdn.vox-cdn.com/uploads/chorus_image/image/68855430/dc_spotify.0.jpg",
      slug: "Comic Books",
    },
    {
      name: "Marvel Universe",
      row_order: 4,
      banner: "https://images.immediate.co.uk/production/volatile/sites/3/2020/03/infinity-war-122ce1b.jpg?quality=90&resize=768,574",
      slug: "Comic Books",
    },
  ])

  return (
    <div className="App">
      <h1>Category List</h1>
      
      <List category={category} />
      <AddToList category={category} setCategory={setCategory} />
    </div>
  );
}

export default App;
