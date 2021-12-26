import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/action/inputActions';
import './notesSection.style.css';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputEndDate(item.EndDate));
    dispatch(inputActions.setInputStatus(item.status));
    dispatch(inputActions.setInputPriority(item.priority));
    dispatch(inputActions.setInputProgress(item.progress));
    dispatch(inputActions.setInputAssigners(item.assigners));
  }

  if(notes.length === 0) {
    return (
      <div className="NotesSection_container_empty">
        <p>There is no note yet. Please add one.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection_container">
      {notes.map((item, index) => {
        if(item) {
          return (
            
            <NoteItem key={item.id}
              title={item.title}
              EndDate={item.EndDate}
              status={item.status}
              priority={item.priority}
              progress={item.progress}
              assigners={item.assigners}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />  
                
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;