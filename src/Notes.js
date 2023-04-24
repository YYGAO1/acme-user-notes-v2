import React from 'react';
import { useSelector } from 'react-redux';

const Notes = ()=> {
  const { notes } = useSelector(state => state);
  return (
    <ul>
      {
        notes.map( note => {
          return (
            <li key={ note.id }>
              { note.txt }
            </li>
          );
        })
      }
    </ul>
  );
};

export default Notes;
