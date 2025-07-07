import React from 'react'

export default function MyButton1({count,onClick}){
  return (
    <button onClick={onClick}>
        Clicked {count} times!
    </button>
  );
}
