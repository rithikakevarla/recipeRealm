import React from 'react';
import './Creditpage.css'; // Import your stylesheet for styling
import sudhrecipe from './sudhrecipe.jpg'
import yeshrecipe from './yeshrecipe.jpg'
import sriprecipe from './sriprecipe.jpg'
import tejarecipe from './tejarecipe.jpg'
import rithrecipe from './rithrecipe.jpg'
import lalithrecipe from './lalithrecipe.jpg'
const CreditPage = () => {
  const members = [
    {
      id: 1,
      name: 'Sudheep',
      photo: sudhrecipe,
    },
    {
      id: 2,
      name: 'Yeshwanth',
      photo: yeshrecipe,
    },
    {
        id: 3,
        name: 'Sripad',
        photo: sriprecipe,
    },
    {
        id: 4,
        name: 'Tejaswini',
        photo: tejarecipe,
     },
    {
        id: 5,
        name: 'Rithika',
        photo: rithrecipe,
    },
    {
        id: 6,
        name: 'Lalith',
        photo: lalithrecipe,
    },
    
  ];

  return (
    <div className="credit-page">
      <h1 style={{color:'white'}}>TriumphTroop</h1>
      <div className="members-container">
        {members.map((member) => (
          <div key={member.id} className="member">
            <img src={member.photo} alt={member.name} />
            <p style={{color:'white'}}>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditPage;
