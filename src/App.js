import { Card, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import picB from "./images/barcelona.png"
import picR from "./images/rome.png"
import picM from "./images/mexico-city.png"

function App() {
  return (
   <div className="app">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="p-b">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">about</Nav.Link>
            <NavDropdown title="travel and stays" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Organized trips</NavDropdown.Item>
              <NavDropdown.Item href="">Honeymoon </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
      <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src={picM} />
                <Card.Body>
                  <Card.Title>Mexico</Card.Title>
                  <Card.Text>
                  Mexico est la capitale densément peuplée du Mexique. Située en haute altitude, elle est connue pour le Templo Mayor (temple aztèque du XIIIe siècle), la cathédrale métropolitaine de Mexico édifiée par les conquistadors espagnols et le Palais national, qui abrite des peintures murales historiques signées Diego Rivera. Tous ces monuments se trouvent sur et autour de la Plaza de la Constitución, la grande place principale également connue sous le nom de Zócalo                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card >
                <Card.Img variant="top" src={picB} />
                <Card.Body>
                  <Card.Title>Barcelone</Card.Title>
                  <Card.Text>
                  Barcelone, la capitale cosmopolite de la région espagnole de Catalogne, est réputée pour son art et son architecture. La basilique de la Sagrada Família et d'autres bâtiments emblématiques conçus par Antoni Gaudí sont de parfaits exemples du modernisme catalan. Le musée Picasso et la fondation Joan Miró présentent des œuvres d'art réalisées par les artistes qui leur ont donné leur nom. Le MUHBA, musée d'histoire de Barcelone, présente plusieurs vestiges de l'ancienne ville romaine.                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card >
                <Card.Img variant="top" src={picR}/>
                <Card.Body>
                  <Card.Title>Rome</Card.Title>
                  <Card.Text>
                  Capitale de l'Italie, Rome est une grande ville cosmopolite dont l'art, l'architecture et la culture de presque 3 000 ans rayonnent dans le monde entier. Ses ruines telles que celles du Forum Romain et du Colisée évoquent la puissance de l'ancien Empire romain. Siège de l'Église catholique romaine, la Cité du Vatican compte la basilique Saint-Pierre et les musées du Vatican où se trouvent des chefs-d'œuvre tels que la fresque de la chapelle Sixtine, peinte par Michel-Ange.                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
      </Container>
      <Container>
      
      </Container>
   </div>
  );
}

export default App;
