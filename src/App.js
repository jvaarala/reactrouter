import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import Add from './components/Add'
import Home from './components/Home'
import List from './components/List'
import Nav from 'react-bootstrap/Nav'

const App = () => {
  const [notes, setNotes] = useState([])

  function getNotesFromDb () {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log(response.status, response.statusText)
        if (response.status === 200) {
          console.log(response.status, response.text, response.data)
          setNotes(response.data)
        }
      }).catch(error => console.log('error', error))
  }

  useEffect(() => {
    getNotesFromDb()
  }, [])

  return (
    <div className='container'>
      <Router>
        <Nav fill variant='tabs'>
          <Nav.Item href='/'>
            <Nav.Link as={Link} to='/'>Etusivu</Nav.Link>
          </Nav.Item>
          <Nav.Item href='/list'>
            <Nav.Link as={Link} to='/list'>Muistiinpanot</Nav.Link>
          </Nav.Item>
          <Nav.Item href='/add'>
            <Nav.Link as={Link} to='/add'>Lisää</Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path='/add'>
            <Add />
          </Route>
          <Route path='/list'>
            <List notes={notes} getNotesFromDb={getNotesFromDb} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
