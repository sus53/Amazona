import { Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' className=''>
          <Container>
            <NavbarBrand>Amazona</NavbarBrand>
          </Container>
          <Nav>
            <a href='/cart'>Cart</a>
            <a href='/signin'>Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className='text-center'>
          All right reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
