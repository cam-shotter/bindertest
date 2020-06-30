import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    bulkCards: {},
    numberOfCardsToSelect: 0,
  },
  reducers: {
    getDefaultCards: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.bulkCards = action.payload;
    },
    resetDefaultCards: (state) => {
      state.bulkCards = {};
    },
  },
});

export const { getDefaultCards, resetDefaultCards } = buttonSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getDefaultCardsAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(getDefaultCards(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.button.value)`
export const selectTopXCards = (state) => state.button.numberOfCardsToSelect;

export default buttonSlice.reducer;
