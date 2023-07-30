import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Akbar Pratama Bimantoro</Navbar.Brand>
                <Navbar.Text>Copyright Allright reserved 2023</Navbar.Text>
            </Container>
      </Navbar>
    );
}

export default Footer;