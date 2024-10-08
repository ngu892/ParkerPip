import React, { useState } from 'react';
import '../styles/BuildingManager.css'

function Checklist() {
  const [checkedItems, setCheckedItems] = useState([]);

  const items = [
    "Gas control System",
    "Water supplyement System",
    "Electrical Control System",
    "Lift Control System"
    // ... items
  ];

  const handleCheckChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  return (
    <div className="checklist-container">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>ACTIVITIES</th>
            <th>DATE:</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="checkbox"
                  value={item}
                  checked={checkedItems.includes(item)}
                  onChange={handleCheckChange}
                />
                <label>{item}</label>
              </td>
              <td> {"11/10/2024"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Checklist;