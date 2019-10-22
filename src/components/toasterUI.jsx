import React, { useState } from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ToastUISkills() {
    const [steps, setSteps] = useState(0);
    var [faces, setFace] = useState('🌞');
    var smiles = '🌞';
    const notify = () => toast( {
      onOpen: () => {
       
      },
      onClose: ({ foo }) => {
       
      }
    });

    const items = [
      "Javascript","React","Node","ES6", "Bootstrap","D3","C","PHP", "HTML", "CSS","SASS", "Python", "Bash","Docker"
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
      if(steps >= 14){
        setSteps(0);
      }else{
        setSteps(steps => steps + 1);
      }
     
      if(steps%2 != 0){
        smiles = '🌞'
        console.log("even", faces)
        setFace('🌞');
        
      }else{
        console.log("odd",faces)
        smiles = '🌚'
        setFace('🌚');
      }

      setFace(0)

      return (
                <div>
                  {items[steps]}
                </div>
          )
    }
    
    return (
      <div className="toast-wrapper" >
        <div className="toast-ui" onClick={() =>{

          toast(<Msg items={items}/>, options) 
          }}><span>{smiles}</span></div>
      </div>
    );
  }


  export default ToastUISkills;