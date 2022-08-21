import React, { useState} from 'react'
import '../styles/App.css';
import { PostList } from './PostList';

const App = () => {

  let limit =5;
  return (
    <div id="main">
      <PostList limit={limit} />
    </div>
  )
}


export default App;
