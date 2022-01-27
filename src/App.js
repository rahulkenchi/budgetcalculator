import Budget from './component/Budget'
import Show from './component/Show';
import Expense from './component/Expense';
import Tabs from './component/Tabs';
import Login from './component/Login'
import './App.css';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
function App() {

  // const [lists, setLists] = useState(
  //   [{ name: 'mldsalk', expense: 42343 },
  //   { name: 'nkldsan', expense: 324 },
  //   { name: 'mlsad', expense: 32 },
  //   { name: 'nlknl', expense: 3232 },
  //   { name: 'nkj', expense: 322 }])
  const [lists, setLists] = useState([])
  const [budget, setBudget] = useState(0)
  const [expense, setExpense] = useState(0)
  const [balance, setBalance] = useState(0)
  const title = useRef()
  const expval = useRef()
  const [i, setI] = useState(0)
  const [modalShow, setModalShow] = useState(false);
  const calc = (tmp) => {
    setBudget(tmp)
  }


  useEffect(() => {
    let tmp = lists.reduce(
      (sum, ele) => ele.expense + sum, 0)
    setExpense(tmp)
    setBalance(budget - tmp)
  }, [lists, budget])

  const add = (p1, p2) => {
    setBalance(3000)
    setLists([...lists, { name: p1, expense: Number(p2) }]) ///use Number else it takes it as string and concats 
  }
  const edit = (i) => {
    setModalShow(true)
    setI(i)
  }

  const update = () => {
    let tmp2 = lists
    tmp2[i] = { name: title.current.value, expense: Number(expval.current.value) }
    console.log(tmp2)
    setLists([...tmp2]) /// why do spread operator
    setModalShow(false)
  }


  const del = (i) => {
    if (i === 0 && lists.length === 1) { setLists([]) }
    else {
      setLists(lists.splice(i, 1))
      let tmp = lists
      tmp.splice(i, 1) ///dont do splice directly on main lists because it modifies original and without using 
      setLists([...tmp])/// setLists this will not update the component and block rerendering with new data
    }                   /// so it updates the data of lists but also blocks rerendering
  }

  return (

    <Container>
      <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Budget App</p>
      <Row>
        <Col>
          <Budget calc={calc} />
        </Col>
        <Col>
          <Show budget={budget} expense={expense} balance={balance} />
        </Col>
      </Row>
      <br /><br />
      <Row>
        <Col>
          <Expense add={add} />
        </Col>
        <Col>
          <Tabs lists={lists} edit={edit} del={del} />
        </Col>
      </Row>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text style={{ width: "150px" }}>Expense Title</InputGroup.Text>
            <FormControl type="text" ref={title} />
          </InputGroup>
          <InputGroup className="mb-3" required>
            <InputGroup.Text style={{ width: "150px" }}>Expense Value</InputGroup.Text>
            <FormControl type="number" ref={expval} />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => update()}>Update</Button>
          <Button variant="outline-danger" onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>

  );
}

export default App;
