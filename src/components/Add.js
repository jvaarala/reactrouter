import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const Add = () => {
  const [validated, setValidated] = useState(false)
  const [formTitle, setFormTitle] = useState('')
  const [formBody, setFormBody] = useState('')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      console.log('form NOT valid')
      event.preventDefault()
      event.stopPropagation()
    } else {
      console.log('form valid', formTitle, formBody)
      const eventObject = {
        title: formTitle,
        body: formBody
      }

      axios.post('http://localhost:3001/notes', eventObject).then(response => {
        console.log(response.status, response.statusText)
      }).catch(error => console.log('error', error))
    }

    setValidated(true)
  }

  return (
    <Form className='margin-top-1rem' noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group md='4' controlId='validationCustom01'>
        <Form.Label>Otsikko</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Kirjoita tähän'
          onChange={(e) => {
            setFormTitle(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group md='4' controlId='validationCustom02'>
        <Form.Label>Muistiinpano</Form.Label>
        <Form.Control
          required
          as='textarea'
          rows='3'
          placeholder='Kirjoita tähän'
          onChange={(e) => {
            setFormBody(e.target.value)
          }}
        />
      </Form.Group>

      <Button type='submit'>Tallenna muistiinpano</Button>
    </Form>
  )
}

export default Add
