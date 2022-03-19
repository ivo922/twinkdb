import React, { useEffect } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

import './TablesList.css';

function TablesList(props) {
  // Reload wowhead links on tab change.
  useEffect(() => {
    window.$WowheadPower.refreshLinks();
  });

  return (
    <div className="tab">
      {props.data.map((category, index) => {
        return (
          <div key={index}>
            <h2>{category.name}</h2>

            <div className="table">
              <table>
                <tbody>
                  <tr>
                    <TableHeader items={category.items} />
                  </tr>

                  {category.items.map((item, index) => {
                    return <TableRow item={item} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TablesList;
