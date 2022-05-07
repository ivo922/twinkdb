import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import store from './app/store';
import { Provider } from 'react-redux';

import Header from './components/Header';

import Home from './pages/Home';
import Armor from './pages/Armor';
import Weapons from './pages/Weapons';
import Trinkets from './pages/Trinkets';
import Gems from './pages/Gems';
import Enchants from './pages/Enchants';
import Builds from './pages/Builds';
import Calculator from './pages/Calculator';
import Changelog from './pages/Changelog';

import TablesList from './components/TablesList';
import BuildsList from './components/BuildsList';
import Build from './components/Build';

import dataArmor from './DB/armor.json';
import dataWeapons from './DB/weapons.json';
import dataTrinkets from './DB/trinkets.json';
import dataGems from './DB/gems.json';
import dataEnchants from './DB/enchants.json';
import dataConsumables from './DB/consumables.json';

import WishlistUpdater from './components/WishlistUpdater';
import Wishlist from './components/Wishlist';

import ReactMarkdown from 'react-markdown';

import routes from './routes';
import Consumables from './pages/Consumables';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route path={routes.home} element={<Home />} />

          <Route
            path={routes.weapons}
            element={<Weapons data={dataWeapons} />}
          />

          <Route
            children
            path={routes.armor}
            element={<Armor data={dataArmor} />}
          >
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

          <Route
            path={routes.trinkets}
            element={<Trinkets data={dataTrinkets} />}
          />

          <Route path={routes.gems} element={<Gems data={dataGems} />} />

          <Route
            path={routes.enchants}
            element={<Enchants data={dataEnchants} />}
          />

          <Route
            children
            path={routes.consumables}
            element={<Consumables data={dataConsumables} />}
          >
            <Route
              index
              element={<ReactMarkdown># Chose a category</ReactMarkdown>}
            />
            <Route
              path="combat"
              element={<TablesList data={dataConsumables.types[0].categories} />}
            />
            <Route
              path="buffs"
              element={<TablesList data={dataConsumables.types[1].categories} />}
            />
            <Route
              path="other"
              element={<TablesList data={dataConsumables.types[2].categories} />}
            />
          </Route>

          <Route path={routes.builds} element={<Builds />}>
            <Route index element={<BuildsList />} />

            <Route path=":cls/:id" element={<Build />} />
          </Route>

          <Route path={routes.calculator} element={<Calculator />} />

          <Route path={routes.changelog} element={<Changelog />} />

          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>

        <WishlistUpdater />
        <Wishlist />
      </Router>
    </Provider>
  );
}

export default App;
