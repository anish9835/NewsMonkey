import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import { GoTop } from './Components/GoTop';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <GoTop />
        </div>
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={9} Country='in' Category='general' />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={9} Country='in' Category='business' />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={9} Country='in' Category='entertainment' />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={9} Country='in' Category='general' />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={9} Country='in' Category='health' />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={9} Country='in' Category='science' />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={9} Country='in' Category='sports' />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={9} Country='in' Category='technology' />} />
        </Routes>
      </Router>
    )
  }
}

