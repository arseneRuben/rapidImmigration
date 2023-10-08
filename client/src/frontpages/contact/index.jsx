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
                                      <textarea className="form-control form-control-lg" placeholder="Message" id="form-floating-4" rows="30"></textarea>
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
                      <iframe className="position-relative w-100 h-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5977666701856!2d-73.69803257448271!3d45.51817517983683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918739449ce79%3A0x7e5b5e82510e8659!2sSaint-Laurent%2C%20QC%20H4L%202X5!5e0!3m2!1sfr!2sca!4v1696751818633!5m2!1sfr!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0" tabIndex="0"></iframe>   
                    </div>
                  </div>
              </div>
          </div>
          {/* Contact End */}
    </FrontPages>
    
    
  )
}

export default ContactPage