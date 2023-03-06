import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import AddTask from './component/AddTask';
import Navbar from './component/Navbar';
import TasksList from './component/TasksList';


function App() {
  return (

       <Container>
             <Navbar/>
             <Row className="justify-content-md-center">
                 <Col lg="6">
                    <AddTask/>
                    <TasksList/>
                 </Col>
             </Row>
       </Container>

  );
}

export default App;
