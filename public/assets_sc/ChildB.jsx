import React, { useContext } from 'react'
import {c} from 'App.jsx'
const ChildB = () => {
    const {a}=useContext(c)
  return (
    <div>
      TH e value {a}
    </div>
  )
}

export default ChildB
