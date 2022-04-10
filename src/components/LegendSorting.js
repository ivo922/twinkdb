import React from 'react';
import './Legend.scss';

function LegendSorting() {
  return (
    <div className="Legend">
      <h4>How are items sorted?</h4>

      <p>
        Items are sorted by <strong>rarity.</strong>
        <br />
        <span style={{color: 'limegreen'}}>BFA/WoD rare drop/chest</span> {'>'}{' '}
        <span style={{color: 'limegreen'}}>Quest reward</span> {'>'}{' '}
        <span style={{color: 'limegreen'}}>Dungeon drop</span> {'>'}{' '}
        <span style={{color: 'yellow'}}>
          Hard to get dungeon drops (Epoch, BFA socket procs)
        </span>{' '}
        {'>'}{' '}
        <span style={{color: 'yellow'}}>
          Draenor apexis(daily) rare drop with socket
        </span>{' '}
        {'>'}{' '}
        <span style={{color: 'yellow'}}>
          <a href="https://www.wowhead.com/npc=75590">Frog</a> drop
        </span>{' '}
        {'>'} <span style={{color: 'orange'}}>World BoEs</span>
      </p>
    </div>
  );
}

export default LegendSorting;
