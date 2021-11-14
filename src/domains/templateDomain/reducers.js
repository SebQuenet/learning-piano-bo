import { createReducer } from 'domains/helpers';
import initialState from './initialState';

import * as types from './types';

const templateDomainReducer = (state, action) => ({
  ...state,
});

const reducers = createReducer(initialState, {
  [types.TEMPLATE_TYPE]: templateDomainReducer,
});

export default reducers;
