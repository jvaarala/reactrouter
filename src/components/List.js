import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const List = ({ notes, getNotesFromDb }) => {
  function handleDelete (id) {
    axios.delete('http://localhost:3001/notes/' + id).then((result) => {
      console.log(result.status, result.statusText)
      getNotesFromDb()
    }
    )
  }

  return (
    <div className='margin-top-1rem'>
      {notes.map((note) =>
        <Card className='note-item' key={note.id}>
          <Card.Header style={{
            backgroundColor: '#8B939C',
            height: '3rem'
          }}
          />
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
              {note.body}
            </Card.Text>
            <Button
              variant='outline-danger' onClick={() => {
                handleDelete(note.id)
              }}
            >Poista
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default List
