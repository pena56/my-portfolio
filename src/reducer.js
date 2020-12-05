export const initialState = {
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MODE':
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}

export default reducer;
