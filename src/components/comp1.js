
import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

const Comp1 = () => {

  const { users0,updateValue } = useContext(UserContext)
  updateValue("green000")
  return (
    <div>{users0}</div>
  )
}

export default Comp1

