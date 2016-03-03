import ReactDOM from 'react-dom'
import React from 'react'
import {HelloWorld} from '../build/HelloWorld-React'

export class Demo extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld text="Hey, whats up!" />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('root')
    ReactDOM.render(
        <Demo />,
      target
    )
})
