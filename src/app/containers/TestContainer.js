/**
 *
 * TestContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { compose } from 'redux';


import injectReducer from '../utils/injectReducer';
import reducer from '../reducers/TestContainer.reducer';

function TestContainer() {
  return (
    <div>
   
    </div>
  );
}

TestContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapDispatchToProps);

const withReducer = injectReducer({ key: 'testcontainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestContainer);
