import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container-fluid bg-dark p-5">
        <div className="row">
            <div className="col-12 text-center">
                <h1 className="display-4 text-white">Contact Us</h1>
                <a href="">Home</a>
                <i className="far fa-square text-primary px-2"></i>
                <a href="">Contact</a>
            </div>
        </div>
    </div>


    <div className="container-fluid bg-secondary px-0">
        <div className="row g-0">
            <div className="col-lg-6 py-6 px-5">
                <h1 className="display-5 mb-4">Contact For Any Queries</h1>
                <form>
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
                                <textarea className="form-control" placeholder="Message" id="form-floating-4" style="height: 150px"></textarea>
                                <label for="form-floating-4">Message</label>
                              </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-6" style="min-height: 400px;">
                <div className="position-relative h-100">
                    <iframe className="position-relative w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Contact