import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Courses from './component/Courses'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Courses/>
      </div>
    )
  }
}