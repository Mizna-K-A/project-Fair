import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} className='container p-2 mt-5 mb-3'>
  <div className='d-flex justify-content-between'>
    <div className="intro">
      <h5 className='text-white fw-bolder'><i className="fa-solid fa-headphones me-3 text-white"></i>
      Project Fair</h5>
      <p>Design and build with all the love in the world by Mizna K.A.</p>
      <p>Code licensed Mizna, docs CC BY 3.0.</p>
      <p>Currently v5.3.2.</p>
    </div>
    <div className="links">
      <h5 className='text-white'>Links</h5>
      <a className='footerlink text-white' style={{textDecoration:'none'}}>Landing Pages</a> <br />
      <a className='footerlink text-white' style={{textDecoration:'none'}}>Home Pages</a> <br />
      <a className='footerlink text-white' style={{textDecoration:'none'}}>Project Pages</a>
    </div>
    <div className="guides">
      <h5 className='text-white'>Guides</h5>
      <p>React</p>
      <p>React Bootstrap</p>
      <p>React Router</p>
    </div>
    <div className="contact">
      <h5 className='text-white'>Contact Us</h5>
      <div className='d-flex'>
        <input type="text" className='form-control me-3' placeholder='Enter your email here'/>
        <button className='bg-white rounded p-1'><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className='d-flex flex-row justify-content-evenly mt-4'>
        <i className="fa-brands fa-twitter text-white"></i>
        <i className="fa-brands fa-instagram text-white"></i>
        <i className="fa-brands fa-facebook text-white"></i>
        <i className="fa-brands fa-linkedin text-white"></i>
        <i className="fa-brands fa-github text-white"></i>
        <i className="fa-solid fa-phone text-white"></i>
      </div>
    </div>
  </div>
  <p className='text-center mt-3 text-white'>Copyright ©Mizna Productions, Project Fair. Built with React</p>
</div>

  )
}

export default Footer