import React from 'react';
import WowheadLink from './WowheadLink';

function TableRow(props) {
  /**
   * Formats a string.
   *
   * @param {String} text
   * @returns {String}
   */
  const formatText = (text) => {
    // TODO: format string
  }

  return (
    <tr className={`rarity-${props.item.rarity}`}>
      {Object.entries(props.item).map((entry, index) => {
        {
          if (
            entry[0] !== 'name' &&
            entry[0] !== 'rarity' &&
            entry[0] !== 'note'
          ) {
            if (entry[0].includes('_url')) {
              return (
                <td key={`${entry[0]}--${entry[1]}`}>
                  <WowheadLink url={entry[1]} />
                </td>
              );
            } else {
              return <td key={index}>{entry[1]}</td>;
            }
          }
        }
      })}
    </tr>
  );
}

export default TableRow;
