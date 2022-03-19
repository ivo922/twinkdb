import React from 'react';

function TableHeader(props) {
  const element = Object.keys(props.items[0]).map((th, index) => {
    {
      if (th !== 'name' && th !== 'rarity') {
        return <th key={index}>{th.replace('_', ' ').replace(' url', '')}</th>;
      }
    }
  });

  return element;
}

export default TableHeader;
