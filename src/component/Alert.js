import React from 'react'

export default function Alert(props) {
  const capitalFirstChar = (w)=>{
    const l = w.toLowerCase(); 
    return l.charAt(0).toUpperCase() + l.slice(1);
  }

  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{capitalFirstChar(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}


