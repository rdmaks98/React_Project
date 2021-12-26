import actionTypes from '../actionTypes';

const initialState = {
  id: -1,
  title: '',
  EndDate: '',
  status:'',
  priority:'',
  progress:'',
  assigners:'',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_TITLE: {
      const { title } = action;
      return {
        ...state,
        title,
      }
    }
    case actionTypes.SET_INPUT_ENDDATE: {
      const { EndDate } = action;
      return {
        ...state,
        EndDate,
      }
    }
    case actionTypes.SET_INPUT_STATUS: {
      const { status } = action;
      return {
        ...state,
        status,
      }
    }
    case actionTypes.SET_INPUT_PRIORITY: {
      const { priority } = action;
      return {
        ...state,
        priority,
      }
    }
    case actionTypes.SET_INPUT_PROGRESS: {
      const { progress } = action;
      return {
        ...state,
        progress,
      }
    }
    case actionTypes.SET_INPUT_ASSIGNERS: {
      const { assigners } = action;
      return {
        ...state,
        assigners,
      }
    }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}