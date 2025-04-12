import { useState } from 'react'
import classes from './Counter.module.scss'

const Increment = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div >
      <h1 className={classes.header}>{count}</h1>
      <button className={classes.button} onClick={increment}>increment</button>
    </div>
  )
}

export default Increment
