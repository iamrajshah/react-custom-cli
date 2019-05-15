/*
 *
 * TestContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from '../constants/TestContainer.constant';

export const initialState = fromJS({});

function testContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default testContainerReducer;
