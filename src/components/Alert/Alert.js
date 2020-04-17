import React from 'react'

const Alert = ({alert}) => {
  return (
      alert!= null &&(
    <div className={`alert alert-${alert.type}`}>
        <i className={`fas fa-info-circle`}>{alert.msg}</i>
        <button className="bg-primary " style={{padding :'2px',
         }}>close</button>
    </div>)
  )
}

export default Alert
