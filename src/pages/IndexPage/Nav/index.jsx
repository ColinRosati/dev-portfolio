import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Button';

import styles from './Nav.module.scss';
import HeadTitle from '../../../components/HeadTitle';
import LinkTitle from '../../../components/LinkTitle';
import { incrementCount } from '../../../store/actions';

const Nav = (props) => {
  const dispatch = useDispatch();

  const handleTouchStart = (e) => {
    counterDispatch(e);
  };

  const HoverCount = (e) => {
    counterDispatch(e);
  };

  const counterDispatch = (e) => {
    switch (e.target.id) {
      case 'X':
        dispatch(incrementCount(props.countX, e.target.id));
        break;
      case 'Y':
        dispatch(incrementCount(props.countY, e.target.id));
        break;
      case 'Z':
        dispatch(incrementCount(props.countZ, e.target.id));
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.content}>
      <HeadTitle>Colin Rosati</HeadTitle>
      <LinkTitle href={'about'} className={styles.navLink}>
        <h2
          className={styles.nav}
          onTouchStart={(e) => handleTouchStart(e)}
          onMouseEnter={(e) => HoverCount(e)}
          id='X'>
          About
        </h2>
        <Badge className={styles.btnSecondary} variant='secondary'>
          {props.countX}
        </Badge>
      </LinkTitle>
      <LinkTitle href={'work'} className={styles.navLink}>
        <h2
          className={styles.nav}
          onTouchStart={(e) => handleTouchStart(e)}
          onMouseEnter={(e) => HoverCount(e)}
          id='Y'>
          Work
        </h2>
        <Badge className={styles.btnSecondary} variant='secondary'>
          {props.countY}
        </Badge>
      </LinkTitle>
      <LinkTitle href={'contact'} className={styles.navLink}>
        <h2
          className={styles.nav}
          onTouchStart={(e) => handleTouchStart(e)}
          onMouseEnter={(e) => HoverCount(e)}
          id='Z'>
          Contact
        </h2>
        <Badge className={styles.btnSecondary} variant='secondary'>
          {props.countZ}
        </Badge>
      </LinkTitle>
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

export default connect(mapStateToProps)(Nav);
