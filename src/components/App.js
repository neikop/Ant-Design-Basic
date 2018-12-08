import React, {Component} from 'react'
import {version, Button} from 'antd'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <p>Current antd version: {version}</p>
        <Button type='primary'>Hello</Button>
      </div>
    )
  }
}

export default App
