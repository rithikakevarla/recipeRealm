import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Bar.css'

function handleclick() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }, 1000); // 1000 milliseconds = 1 second
}

function Bar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={handleclick}>Home</Nav.Link>
            <Nav.Link href="/search-recipe" onClick={handleclick}>Search Recipe</Nav.Link>
            <Nav.Link href="/generate-recipe" onClick={handleclick}>Generate Recipe</Nav.Link>
            <Nav.Link href="about-us" onClick={handleclick}>About Us</Nav.Link>
            {/* <Nav.Link href="#pricing" onClick={handleclick}>Favourites</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;
