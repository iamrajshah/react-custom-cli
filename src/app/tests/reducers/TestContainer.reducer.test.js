import { fromJS } from 'immutable';
import testContainerReducer from '../../reducers/TestContainer.reducer';

describe('testContainerReducer', () => {
  it('returns the initial state', () => {
    expect(testContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
