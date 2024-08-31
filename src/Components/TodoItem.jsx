import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

export function TodoItem({item, deleteItem}){
    
    return <Container className='ms-4'>
                <Form className={'d-flex flex-row text-white'}>
                        <Form.Check type='checkbox'
                        id='default-checkbox'
                        label={item}
                        />

                    <Button variant="outline-danger ms-2" size='sm' type="submit" onClick={(Event) => deleteItem(Event,item)}>
                        Delete
                    </Button>
                </Form>
           </Container>
    
}