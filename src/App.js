import React, { Component} from 'react';
import { HousesList } from './components/HousesList';

class App extends Component {
  render () {
    return(
      <div className='App'>
        
        <header>
          <h1>Week 15 CRUD Assignment</h1>
        </header>
        <main>
          <HousesList />
        </main>
      </div>
    )
  }
}

export default App;