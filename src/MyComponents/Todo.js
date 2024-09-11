import React from 'react'


export default function Todo(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.todo.sno}. {props.todo.heading}</h5>
        <p className="card-text">{props.todo.desc}</p>
        <button className="btn btn-primary" onClick={() => {props.onDelete(props.todo)}}>Done</button>
      </div>
    </div>
  )
}
