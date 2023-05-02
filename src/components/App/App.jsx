import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const airlines = useSelector((store) => store.planeCount)
  console.log(airlines);
  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button>Add Airline</button>
      <table>{/* Airlines should be listed here */}
      <thead>
        <th><tr>Planes</tr></th>
      </thead>

      <tbody>
        {
          airlines.map((airlines) => {
            return (
              <tr key={airlines}>
                <td>{airlines}</td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
    </div>
  );
}

export default App;
