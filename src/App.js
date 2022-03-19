import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Armor from './pages/Armor';

import dataArmor from './DB/armor.json'
import dataWeapons from './DB/weapons.json'
import dataTrinkets from './DB/trinkets.json'
import dataBuilds from './DB/builds.json'
import TablesList from './components/TablesList';

function App() {
  console.log(dataArmor);
  console.log(dataWeapons);
  console.log(dataTrinkets);
  console.log(dataBuilds);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weapons" />

        <Route children path="/armor" element={ <Armor data={dataArmor} /> }>
          <Route path=""        element={ <TablesList data={ dataArmor.types[0].categories } /> } />
          <Route path="cloth"   element={ <TablesList data={ dataArmor.types[0].categories } /> } />
          <Route path="leather" element={ <TablesList data={ dataArmor.types[1].categories } /> } />
          <Route path="mail"    element={ <TablesList data={ dataArmor.types[2].categories } /> } />
          <Route path="plate"   element={ <TablesList data={ dataArmor.types[3].categories } /> } />
          <Route path="off-set" element={ <TablesList data={ dataArmor.types[4].categories } /> } />
        </Route>

        <Route path="/trinkets" />

        <Route path="/builds" />

        <Route path="/calculator" />
      </Routes>
    </Router>
  );
}

export default App;
