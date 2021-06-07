import React from "react";

function Contact() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="mt-5">
        Contact Us
      </h1>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://e7.pngegg.com/pngimages/313/603/png-clipart-save-the-children-logo-save-the-children-non-governmental-organisation-organization-children-s-rights-save-child-text.png"
                  style={{ width: 70 }}
                />
                <p style={{ textAlign: "justify" }} className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam repudiandae tempora voluptas incidunt quasi
                  repellendus. Qui modi voluptate, dolor nobis adipisci omnis
                  quibusdam soluta nesciunt.
                </p>
                <ul className="footer-contact">
                  <li>
                    <i className="fa fa-map-marker"></i> 2736 Hinkle Deegan Lake
                    Road
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> 607-279-9246
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{" "}
                    <a href="#">Charity@email.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <div className="footer">
                  <h3 className="footer-title">Newsletter</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                  <form className="footer-newsletter">
                    <input
                      className="input"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className="btn-primary">Subscribe</button>
                  </form>
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
