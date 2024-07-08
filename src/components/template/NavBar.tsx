// <!--shift + alt + f to format the document-->
// <!--Format Document (Ctrl+Shift+I) -
//     Format the entire active file.
//     Format Selection (Ctrl+K Ctrl+F) -
//     Format the selected text.-->

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BootstrapNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default function NavBar() {
  return (
    <>
      <BootstrapNavBar />
      <header>
        <h1>
          <div>
            <Link to="/signin">Sign in</Link>
          </div>
          <div>
            <Link to="/">HAPPY LEARNING</Link>
          </div>
        </h1>
      </header>
      <nav>
        <ul>
          <li id="li_experiment_series">
            <Link to="/series">Science Experiment Series</Link>
            <ul>
              <Link to="/stemseries">STEM</Link>
              <Link to="/roboticseries">Robotics</Link>
            </ul>
          </li>
          <li id="li_programming_languages">
            <Link to="/programminglangueges">Programming</Link>
            <ul>
              <Link to="/ml">Machine Learning</Link>
              <Link to="/scratch">Scratch</Link>
              <Link to="/unity">Unity</Link>
            </ul>
          </li>
          <li id="li_games">
            {/* <a href="">Contactos</a> */}
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
