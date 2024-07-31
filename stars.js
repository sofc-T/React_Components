import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 


//  the color should be a custom css clipping to applying gradients for text  like
// .icon-gradient {
//     background: linear-gradient(45deg, #00ffff, #6a0dad);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   } 
// 
  
const StarList = ({ number, color }) => {
  const stars = Array.from({ length: number }, (_, index) => (
    <span key={index} className={`fa fa-star ${color}`}></span>
  ));

  return <div>{stars}</div>;
};

export default StarList;
