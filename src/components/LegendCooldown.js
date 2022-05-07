import React from 'react';
import './Legend.scss';

function LegendCooldown() {
  return (
    <div className="Legend">
      <h4>Shared cooldowns:</h4>

      <h5>Items are marked with the respective color.</h5>

      <span className="rarity-4">
        Health potions, <a href="https://www.wowhead.com/spell=82200"></a>
      </span>

      <span className="rarity-5">
        Mana potions, Rejuvenation potions, other potions that aren't health potions.
      </span>

      <span className="rarity-2">
        Drums, some engineering gadgets.
      </span>
    </div>
  );
}

export default LegendCooldown;
