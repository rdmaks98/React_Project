import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/action/noteActions';
import inputActions from '../redux/action/inputActions';
import './inputSection.style.css';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const EndDate = useSelector(state => state.inputs.EndDate);
  const status = useSelector(state => state.inputs.status);
  const priority = useSelector(state => state.inputs.priority);
  const progress = useSelector(state => state.inputs.progress);
  const assigners = useSelector(state => state.inputs.assigners);
  const dispatch = useDispatch();

  const addNote = () => {
    if(title && EndDate && status && priority && progress && assigners ) {
      dispatch(noteActions.addNote({
        title,
        EndDate,
        status,
        priority,
        progress,
        assigners
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && EndDate && status && priority && progress && assigners) {
      dispatch(noteActions.updateNote(id, {
        title, EndDate, status, priority, progress, assigners
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="InputSection_container">
      <div class="form-group ">
          <label for="name">Name:</label>
          <input type="text" class="form-control" placeholder="Enter Name" value={title} onChange={e => dispatch(inputActions.setInputTitle(e.target.value))}/>
      </div><br/>
      <div class="form-group">
          <label for="enddate">End date:</label>
          <input type="date" class="form-control" value={EndDate} onChange={e => dispatch(inputActions.setInputEndDate(e.target.value))} />
      </div> <br />
      {/* <div class="form-group">
          <label for="status">Status:</label>
          <select class="form-select" >
              <option selected>Open this select menu</option>
              <option value="1" value={status} onChange={e => dispatch(inputActions.setInputStatus(e.target.value))}>1</option>
              <option value="2" value={status} onChange={e => dispatch(inputActions.setInputStatus(e.target.value))}>2</option>
              <option value="3" value={status} onChange={e => dispatch(inputActions.setInputStatus(e.target.value))}>3</option>
              <option value="4" value={status} onChange={e => dispatch(inputActions.setInputStatus(e.target.value))}>4</option>
          </select>
      </div> <br /> */}
      <input class="form-group"
        type="number"
        placeholder="Task status"
        value={status}
        onChange={e => 
          dispatch(inputActions.setInputStatus(e.target.value))
        }
      />
      <div class="form-group">
          <label for="priority">Priority:</label>
          <input type="number" class="form-control" value={priority} onChange={e => dispatch(inputActions.setInputPriority(e.target.value))}/>
      </div> <br/>
      <div class="form-group">
          <label for="progress">Progress:</label>
          <input type="text" class="form-control" value={progress} onChange={e => dispatch(inputActions.setInputProgress(e.target.value))
          } />
      </div> <br/>
      <div class="form-group">
          <label for="Assignees">Assignees:</label>
          <input type="text" class="form-control" value={assigners} onChange={e => dispatch(inputActions.setInputAssigners(e.target.value))} />
      </div><br />
      <div className="InputSection_container_btnWrapper">
        <button className="btn btn-primary"
        onClick={id === -1 ? addNote : updateNote}
      >
        {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
        </button>      
        {id !== -1 &&
          <button className="btn btn-danger"
            onClick={deleteNote}
            style={{ marginLeft: '2em', backgroundColor: 'red' }}
          >
            DELETE NOTE
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;