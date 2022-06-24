import React from 'react'
import style from './Pane.module.scss'

function Pane(props: any) {
    const className= `${style.pane} ${props.className}`
  return (
    <div className={className} >{props.childern}</div>
  )
}

export default Pane