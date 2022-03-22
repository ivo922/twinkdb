import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import WowheadLink from './WowheadLink';

function TableRow(props) {
  const [visibleCellsCount, setVisibleCellsCount] = useState(0);
  const [noteActive, setNoteActive] = useState(false);

  /**
   * Formats a string.
   *
   * @param {String} text
   * @returns {String}
   */
  const formatText = (text) => {
    return text === 0 ? '\u2013' : text;
  };

  const noteToggleMarkup = () => {
    const noteToggleText = noteActive ? (
      <span>
        Hide
        <br />
        Note
      </span>
    ) : (
      <span>
        Read
        <br />
        More
      </span>
    );

    return (
      <td
        className={`table__note-trigger ${props.item.note ? 'has-note' : ''}`}
      >
        <a href="#" onClick={toggleNote}>{noteToggleText}</a>
      </td>
    );
  };

  const toggleNote = (event) => {
    event.preventDefault();
    setNoteActive(!noteActive);
  }

  useEffect(() => {
    let counter = 0;

    Object.keys(props.item).forEach((prev, current) => {
      if (
        prev === 'name' ||
        prev === 'item_url' ||
        prev === 'rarity' ||
        prev === 'note'
      ) {
        return;
      }
      counter++;
    });

    setVisibleCellsCount(counter);
  });

  return (
    <tr className={`rarity-${props.item.rarity} ${noteActive ? 'note-active' : ''}`}>
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
              return <td key={index}>{formatText(entry[1])}</td>;
            }
          } else if (entry[0] === 'note') {
            if (entry[1]) {
              return (
                <td
                  className="table__note"
                  key={index}
                  colSpan={visibleCellsCount}
                >
                  <ReactMarkdown>{entry[1]}</ReactMarkdown>
                </td>
              );
            }
          }
        }
      })}

      {noteToggleMarkup()}
    </tr>
  );
}

export default TableRow;
