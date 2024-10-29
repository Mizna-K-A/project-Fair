import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContext'

const Header = ({insideDashboard}) => {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <div>
      <Navbar style={{zIndex:'1'}} className="position-fixed w-100 top-0 border rounded">
        <Container>
          <Navbar.Brand href="#home">
            <Link className='fw-bolder' style={{textDecoration:'none',color:'white'}} to={'/'}> <i className="fa-brands fa-docker"></i> Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <div className='ms-auto'>
              <button onClick={handleLogout} className='btn btn-link fw-bolder'>Logout <i className="fa-solid fa-right-from-bracket"></i></button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header