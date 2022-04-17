import React from 'react';
import ReactMarkdown from 'react-markdown';

import './BuildTable.scss';

function BuildTable(props) {
  return (
    <div className="BuildTable">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Item</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(props.data).map((item) => {
            return (
              <tr key={`${props.type}-${item[0]}`}>
                <td>
                  <ReactMarkdown>{item[0]}</ReactMarkdown>
                </td>
                <td>
                  <ReactMarkdown>{item[1]}</ReactMarkdown>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BuildTable;
