/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import List from './List';
import data from '../data';

function ListContainer() {
  // initial state
  const [people, setPeople] = useState(data);
  const handleClean = () => {
    setPeople([]);
  };
  return (
    <section className='container'>
      <h3>{people.length} birthdays today </h3>
      <List people={people} setPeople={setPeople} />
      <button onClick={handleClean}>
        <RiCloseCircleLine size={20} />
        clear all
      </button>
    </section>
  );
}

export default ListContainer;
