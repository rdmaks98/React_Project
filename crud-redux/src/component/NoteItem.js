import React from 'react';
import './NoteItem.styles.css';
import { Table } from 'react-bootstrap';
import Add from '../right-sidebar/add';

const NoteItem = ({ title, EndDate, status,priority,progress,
                    assigners,onItemClicked}) => {
  return (
    <>
    <div
      className="NoteItem_container"
      role="button"
      onClick={onItemClicked}
    >
      <h2>Name:{title}</h2>
      <p>Enddate:{EndDate}</p>
      <p>Status:{status}</p>
      <p>priority:{priority}</p>
      <p>Progress:{progress}</p>
      <p>Assigners:{assigners}</p>
    </div>

    </>
  );
};

export default NoteItem;