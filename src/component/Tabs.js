import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { BiEdit } from 'react-icons/bi'

export default function Tabs(props) {
    const style = {
        fontWeight: 'bold',
        fontSize: 'large',
        textAlign: 'center'
    }
    const style2 = {
        color: "red",
        fontSize: "medium",
        fontWeight: 'bold',
        textAlign: 'center'
    }
    return (
        <Container>
            <Table>
                <thead>
                    <th style={style}>Expense Title</th>
                    <th style={style}>Expense Values</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        props.lists.map((ele) =>
                            <tr>
                                <td style={style2}>- {ele.name}</td>
                                <td style={style2}>${ele.expense}</td>
                                <td style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                    <Button variant="light" onClick={() => props.edit(props.lists.indexOf(ele))}><BiEdit style={{ color: 'blue', fontSize: 'x-large' }} /></Button>
                                    <Button variant="light" onClick={() => props.del(props.lists.indexOf(ele))}>
                                        <FaTrash style={{ color: 'red', fontSize: 'large' }} />
                                    </Button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </Container >
    )
}
