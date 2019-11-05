import React, { useState } from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var smiles = '🌞';

function ToastUISkills() {
    var [steps, setSteps] = useState(0);
    var i = 1;
    const notify = () => toast( {
      onOpen: () => {
        console.log("toast onOpen")
       
      },
      onClose: ({ foo }) => {
        console.log("toast onClose")
      }
    });

    const items = [
      "Javascript","React","Node","ES6", "Bootstrap","D3","Webpack", "Jest", "Mocha" ,"C","PHP", "HTML", "CSS","SASS", "Python", "Bash","Docker"
    ]

    const options = {
        type: toast.TYPE.DEFAULT,
        hideProgressBar: true,
        autoClose: false,
        draggable: true,
        closeButton: false,
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnHover: true,
        progress: 0.2
    };
    
    toast.configure({
    });

    function Msg(props){
      if(steps >= (items.length - 1)){
        setSteps(0);
      }else{
        setSteps(steps + props.num);
      }
    
      if(steps%2 != 0){
        smiles = '🌞'
      }else{
        smiles = '🌚'
      }

      return (
                <div>
                  {items[steps]}
                </div>
          )
    }
    
    return (
      <div className="toast-wrapper" >
        <div className="toast-ui" onClick={() =>{
          toast(<Msg items={items} num={i}/>, options) 
          }}>
          <span>{smiles}</span>
          </div>
      </div>
    );
  }


  export default ToastUISkills;