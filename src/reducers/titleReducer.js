export const titleReducer = (state = 'HW!', actions) => {
  switch(actions.type){
    case "GET_TITLE":
      return actions.payload;
    default:
      return state;
  }
}