import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ToasterUI.module.scss';

function ToastUISkills() {
  let [steps, setSteps] = useState(0);
  let [smiles, setSmiles] = useState('🌞');
  let i = 1;

  const items = [
    'Javascript',
    'Typescript',
    'React',
    'Redux',
    'Sagas',
    'Thunk',
    'Storybook',
    'Node',
    'Nest.js',
    'D3',
    'Webpack',
    'Jest',
    'Cypress',
    'C',
    'PHP',
    'HTML',
    'CSS',
    'SASS',
    'Python',
    'Bash',
    'Docker',
  ];

  const options = {
    type: toast.TYPE.DEFAULT,
    hideProgressBar: true,
    autoClose: false,
    draggable: true,
    closeButton: false,
    position: toast.POSITION.BOTTOM_CENTER,
    pauseOnHover: true,
    progress: 0.2,
  };

  toast.configure({});

  const img = <div className={styles.Toastify}>{items[steps]}</div>;

  useEffect(() => {
    steps % 2 !== 0 ? setSmiles('🌚') : setSmiles('🌞');
  }, [smiles, steps]);

  const handleClick = () => {
    steps >= items.length - 1 ? setSteps(0) : setSteps(steps + i);
    toast(img, options);
  };

  return (
    <div className={styles.toastWrapper}>
      <div onClick={() => handleClick()}>
        <span>{smiles}</span>
      </div>
    </div>
  );
}

export default ToastUISkills;
