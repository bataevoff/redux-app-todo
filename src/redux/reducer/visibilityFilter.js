import React from 'react';
import { VISIBILITY_FILTER } from '../../constans';
import { SET_FILTER } from '../actionTypes';

const initialState = VISIBILITY_FILTER.ALL

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER : {
      return action.payload.filter
    }

    default: {
      return state
    }
  }
};

export default visibilityFilter
