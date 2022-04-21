import React from 'react';

const Button = (props) => {
  //Desestructuración  
  // const {texto: texto, color:color}= props;

    return (
        <div>
            <input type="name"/>
            <button style={{color: props.color}}>{props.texto}</button>
         {/*  <button style={{color: color}}>{texto?texto:'texto default'}</button> */}
        </div>
    );
};

export default Button;