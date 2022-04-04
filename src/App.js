import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Armor from './pages/Armor';
import Weapons from './pages/Weapons';
import Trinkets from './pages/Trinkets';
import Builds from './pages/Builds';
import Calculator from './pages/Calculator';

import TablesList from './components/TablesList';
import BuildsList from './components/BuildsList';

import dataArmor from './DB/armor.json';
import dataWeapons from './DB/weapons.json';
import dataTrinkets from './DB/trinkets.json';
import ReactMarkdown from 'react-markdown';
import Build from './components/Build';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weapons" element={<Weapons data={dataWeapons} />} />

        <Route children path="/armor" element={<Armor data={dataArmor} />}>
          <Route
            index
            element={<ReactMarkdown># Chose a category</ReactMarkdown>}
          />
          <Route
            path="cloth"
            element={<TablesList data={dataArmor.types[0].categories} />}
          />
          <Route
            path="leather"
            element={<TablesList data={dataArmor.types[1].categories} />}
          />
          <Route
            path="mail"
            element={<TablesList data={dataArmor.types[2].categories} />}
          />
          <Route
            path="plate"
            element={<TablesList data={dataArmor.types[3].categories} />}
          />
          <Route
            path="off-set"
            element={<TablesList data={dataArmor.types[4].categories} />}
          />
        </Route>

        <Route path="/trinkets" element={<Trinkets data={dataTrinkets} />} />

        <Route path="/builds" element={<Builds />}>
          <Route index element={<BuildsList />} />

          <Route path=":cls/:id" element={<Build />} />
        </Route>

        <Route path="/calculator" element={<Calculator />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
