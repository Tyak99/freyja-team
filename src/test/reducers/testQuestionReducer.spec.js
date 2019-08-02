import testReducer from '../../../store/reducers/testReducer';
import { getTestSuccess, setError } from '../../../store/actions/testActions';

let action;
let newState;
const initialState = {
  errors: {},
  isLoading: false,
  data: [],
};

describe('Test Reducer', () => {
  it('should set default state', () => {
    const state = testReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(initialState);
  });
  it('should handle action type GET_TEST', () => {
    action = getTestSuccess();
    newState = testReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
  });
  it('should handle action type GET_ERRORS', () => {
    action = setError();
    newState = testReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
  });
});
