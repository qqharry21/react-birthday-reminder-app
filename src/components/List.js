/** @format */

import React from 'react';
import { BsCalendarCheck } from 'react-icons/bs';

const List = ({ people, setPeople }) => {
  const handleRemind = id => {
    let updateList = people.filter(person => person.id !== id);
    setPeople(updateList);
  };
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person;
        return (
          <article className='person' key={id}>
            <div className='person-detail'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p> - {age} </p>
              </div>
            </div>
            <div className='icons'>
              <BsCalendarCheck
                color='#f28ab2'
                size={20}
                onClick={() => {
                  handleRemind(id);
                }}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
