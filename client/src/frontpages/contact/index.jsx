import React from 'react'
import FrontPages from '..'

const ContactPage = () => {
  return (

    <FrontPages >
          {/* Page Header Start */}
          <div className="container-fluid bg-dark p-5">
              <div className="row">
                  <div className="col-12 text-center">
                      <h1 className="display-4 text-white">Contact Us</h1>
                    
                  </div>
              </div>
          </div>
          {/* Page Header End */}


          {/* Contact Start */}
          <div className="container-fluid bg-light px-0">
              <div className="row g-0">
                  <div className="col-lg-6 py-6 px-5">
                      <h1 className="display-5 mb-4">Contact For Any Queries</h1>
                      <form className="w-100" >
                          <div className="row g-3">
                              <div className="col-6">
                                  <div className="form-floating">
                                      <input type="text" className="form-control" id="form-floating-1" placeholder="John Doe"/>
                                      <label for="form-floating-1">Full Name</label>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="form-floating">
                                      <input type="email" className="form-control" id="form-floating-2" placeholder="name@example.com"/>
                                      <label for="form-floating-2">Email address</label>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="form-floating">
                                      <input type="text" className="form-control" id="form-floating-3" placeholder="Subject"/>
                                      <label for="form-floating-3">Subject</label>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="form-floating">
                                      <textarea className="form-control" placeholder="Message" id="form-floating-4" ></textarea>
                                      <label for="form-floating-4">Message</label>
                                    </div>
                              </div>
                              <div className="col-12">
                                  <button className="btn btn-danger w-50 py-3" type="submit">Submit</button>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div className="col-lg-6">
                      <div className="position-relative h-100">
                      <iframe className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.2795894057476!2d-73.59052407447864!3d45.584923975376746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91eeda21f5953%3A0x448dfe33ee8f3088!2sSaint-L%C3%A9onard%2C%20QC%20H1P%201W9!5e0!3m2!1sfr!2sca!4v1694375325265!5m2!1sfr!2sca"  allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  frameborder="0" tabIndex="0"></iframe>
                          
                      </div>
                  </div>
              </div>
          </div>
          {/* Contact End */}
    </FrontPages>
    
    
  )
}

export default ContactPage