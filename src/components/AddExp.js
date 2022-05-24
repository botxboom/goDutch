import React from 'react'
import { Dropdown, Form, Input } from 'semantic-ui-react'
import { countryOptions } from '../Helpers/Helper'

function AddExp() {

    const handleChange = (e, {name, value}) => {
        console.log(value, name)
    }

    const handleSubmit = () => {

    }

  return (

    <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Dropdown name="expenseType" onChange={handleChange} className='center-align' placeholder='Expense Type' search selection options={countryOptions} />
            <Form.Input
              placeholder='Spent'
              name='spent'
              onChange={handleChange}
            />
            <Form.Button content='Add' />
          </Form.Group>
        </Form>
    </div>

  )
}

export default AddExp