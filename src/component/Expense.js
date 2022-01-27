import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
const regName = RegExp(/^[a-zA-Z]+$/)
export default function Expense(props) {
    const refer1 = useRef('')
    const refer2 = useRef(0)
    const style = {
        fontWeight: 'bold',
        fontSize: 'x-large'
    }
    return (
        <Form style={{ border: '3px solid red', padding: '15px', borderRadius: '5px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={style}>Please Enter Your Expense</Form.Label>
                <Form.Control style={{ border: ' 2px solid red' }} type="text" ref={refer1} onChange={() => { }} />
                <Form.Text style={{ color: 'red', display: regName.test(refer1.current.value) ? 'none' : 'block' }}>Please Enter Text</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={style}>Please Enter Expense Amount</Form.Label>
                <Form.Control style={{ border: ' 2px solid red' }} type="number" ref={refer2} />
            </Form.Group>
            <Button variant="outline-danger" style={{ border: ' 2px solid red' }} type="reset"
                onClick={() => props.add(refer1.current.value, refer2.current.value)}>
                Add Expense
            </Button>
        </Form >
    )
}
