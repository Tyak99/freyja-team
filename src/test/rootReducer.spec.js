import state from './mockData';
import rootReducer from '../store/reducers';

describe('Root reducers', () => {
  it('should return initial state', () => {
    const store = rootReducer(state, '');

    expect(store).toEqual(state);
  });
});
