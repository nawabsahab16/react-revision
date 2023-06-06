import React from 'react'

import {Box} from "./Box"


export const Board = ({board}) => {
  return (
    <div> {board.map((value , idx) => {
        return <Box value={value} onClick={null} />
    })}
        
          <Box value="X" onClick={null}/></div>
  )
}
