import React from 'react'
import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
export default function Budget(props) {
    const refer = useRef(0)
    const style = {
        fontWeight: 'bold',
        fontSize: 'x-large'
    }
    return (
        <Form style={{ border: '3px solid green', padding: '15px', borderRadius: '5px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={style}>Please Enter Your Budget</Form.Label>
                <Form.Control style={{ border: ' 2px solid green' }} type="number" ref={refer} />
            </Form.Group>
            <Button variant="outline-success" style={{ border: ' 2px solid green' }} type="reset"
                onClick={() => props.calc(refer.current.value)}>
                Calculate
            </Button>
        </Form>
    )
}
