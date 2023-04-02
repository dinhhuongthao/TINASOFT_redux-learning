const redux = require('redux');
const produce = require('immer').Immer;

const initialState = {
  name: 'Vishwas',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
};

const STREET_UPDATED = 'STREET_UPDATE';
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, () => {});
    default:
      return state;
  }
};
