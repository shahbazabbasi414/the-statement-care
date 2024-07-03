import React from 'react';

function Contact() {
  return (
    <div>
<main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade" style={{backgroundImage: 'url(assets/img/contact-page-title-bg.jpg)'}}>
    <div className="container">
      <h1>Contact</h1>
      <nav className="breadcrumbs">
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Contact Section */}
  <section id="contact" className="contact section">
    <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-5">
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
            <i className="bi bi-geo-alt flex-shrink-0" />
            <div>
              <h3>Address</h3>
              <p>307 west Parker rd 
              Plummerville, AR 72127</p>
            </div>
          </div>{/* End Info Item */}
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
            <i className="bi bi-telephone flex-shrink-0" />
            <div>
              <h3>Call Us</h3>
              <p>+1 (917) 690-2742 or +1 (501) 777-5431</p>
            </div>
          </div>{/* End Info Item */}
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
            <i className="bi bi-envelope flex-shrink-0" />
            <div>
              <h3>Email Us</h3>
              <p>thestatementc@gmail.com</p>
            </div>
          </div>{/* End Info Item */}
        </div>
        <div className="col-lg-7">
          <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={500}>
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 ">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>{/* End Contact Form */}
      </div>
    </div>

  </section>{/* /Contact Section */}
</main>

    </div>
  );
}

export default Contact;
