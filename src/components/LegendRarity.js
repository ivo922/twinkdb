import React from 'react';
import './LegendRarity.css';

function LegendRarity() {
  return (
    <div className="legend">
      <h4>Rarity legend:</h4>

      <span className="rarity-1">
        Common. (Dungeon drops, quest rewards, crafted items etc.)
      </span>

      <span className="rarity-2">
        Requires some time. (BFA socketed dungeon drops, Epoch Hunter drops
        etc.)
      </span>

      <span className="rarity-3">
        Rare. (Very rare items that require a lot of grinding. BoEs for
        example.)
      </span>

      <span className="rarity-4">Non existent/GF'd.</span>
    </div>
  );
}

export default LegendRarity;
