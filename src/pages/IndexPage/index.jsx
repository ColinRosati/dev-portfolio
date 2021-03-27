import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import FadeTransition from '../../components/FadeTransition'


import CloseHead from '../../components/CloseHead';

const IndexPage = () => {
  return (
    <div> 
      <CloseHead />
        <Nav/>
    </div>  
  );
};

const mapStateToProps = (state) => {
  return {
    countX: state.count.countX,
    countY: state.count.countY,
    countZ: state.count.countZ,
  };
};

export default connect(mapStateToProps)(FadeTransition(IndexPage));
