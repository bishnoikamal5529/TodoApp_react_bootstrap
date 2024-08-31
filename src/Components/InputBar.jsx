import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function InputBar({addNewItem}){

    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        addNewItem(inputValue);
    }

    return <>
        <Container>
        <Form className='d-flex flex-column'>
            <Form.Group className="mb-3" controlId="input">
                <Form.Label className='h4 mt-4 mb-4 text-white'>New Input</Form.Label>

                <Form.Control className='bg-info' size='lg' type="text" placeholder="Enter New Todo Item Here.." 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} />
            </Form.Group>

                <Button variant="outline-primary" size='lg' type="submit" onClick={Event => handleSubmit(Event)}>
                    Submit
                </Button>
            
        </Form>
        </Container>
    </>
}