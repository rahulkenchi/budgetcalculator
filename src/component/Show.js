import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaRegCreditCard } from 'react-icons/fa'

export default function Show(props) {
    const style = {
        fontWeight: 'bold',
        fontSize: 'large',
        textAlign: 'center'
    }

    return (
        <Container>
            <Row>
                <Col>
                    <p style={style}>Budget</p>
                    <FaMoneyBillAlt size={70} style={{ marginLeft: "20%" }} />
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 'xx-large',
                        textAlign: 'center', color: 'green'
                    }}>${props.budget}</p>
                </Col>
                <Col>
                    <p style={style}>Expenses</p>
                    <FaRegCreditCard size={70} style={{ marginLeft: "20%" }} />
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 'xx-large',
                        textAlign: 'center', color: 'red'
                    }}>${props.expense}</p>
                </Col>
                <Col>
                    <p style={style}>Balance</p>
                    <BsCurrencyDollar size={70} style={{ marginLeft: "20%" }} />
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: 'xx-large',
                        textAlign: 'center',
                        color: props.balance >= 0 ? 'green' : 'red'
                    }}>${props.balance}</p>
                </Col>
            </Row>
        </Container>
    )
}
