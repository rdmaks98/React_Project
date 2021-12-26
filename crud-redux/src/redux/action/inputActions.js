import actionTypes from '../actionTypes';

export default {
  setInputTitle: title => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  }),
  setInputEndDate: EndDate => ({
    type: actionTypes.SET_INPUT_ENDDATE,
    EndDate
  }),
  setInputStatus: status => ({
    type: actionTypes.SET_INPUT_STATUS,
    status
  }),
  setInputPriority: priority => ({
    type: actionTypes.SET_INPUT_PRIORITY,
    priority
  }),
  setInputProgress: progress => ({
    type: actionTypes.SET_INPUT_PROGRESS,
    progress
  }),
  setInputAssigners: assigners => ({
    type: actionTypes.SET_INPUT_ASSIGNERS,
    assigners
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}