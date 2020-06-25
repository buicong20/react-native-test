/**
 * @format
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {appReducer, initState, fetch} from '../core/modules/app';


 it('check redux', () => {
    expect(appReducer(initState, fetch())).toEqual({
      list: [],
    });
  });