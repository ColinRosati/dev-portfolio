import React from 'react';
import tapOrClick from 'react-tap-or-click';

import IndexPage from '../../pages/IndexPage/index';
import closeImg from '../../assets/cancel-button.png';

function CloseImage(props) {
  return (
    <a href={props.hrefname}>
      <img src={closeImg} className='closeButton' alt=''></img>
    </a>
  );
}

const CloseHead = (props) => {
  const handleClick = (event) => {
    // event.preventDefault();
    document.body.classList.add('hide');
    setTimeout(() => {
      window.location = '/';
    }, 500);
  };

  return (
    <div className='close-wrapper' {...tapOrClick(handleClick)}>
      <CloseImage href={IndexPage}></CloseImage>
    </div>
  );
};

export default CloseHead;
