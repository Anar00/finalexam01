import React from "react";
import { Helmet } from "react-helmet";
import "./main.scss";
const Main = () => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>HOME</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="started">
        <div className="register">
            <div className="div">
          <div className="imgbacground">
          
            <div className="contanier-main">
              <div className="left-text">
                <div className="left-main">
                  <p>Creative Landing Page Template</p>
                  <h1>LET’S GET STARTED WITH</h1>
                  <h1 className="template">SWAN LAKE TEMPLATE</h1>
                  <div className="img">
                    <img
                      src="http://htmlbeans.com/html/swan/images/divider2.png"
                      alt=""
                    />
                  </div>
                  <button className="exporle">EXPORLE MORE</button>
                </div>
              </div>
              <div className="right-register">
                <div className="register-main">
                  <div className="hearder-text">
                    <h1>REGISTER NOW</h1>
                    <p className="text-trial">Take your free trial</p>
                  </div>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Phone Number" />
                  <div className="botton">
                    <button>GET A QUOTE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-text">
          <div className="about-hearder">
            <div className="about-swan-lake"> ABOUT SWAN LAKE</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      <div className="about-cards">
        <div className="card">
          <div className="card-number">01.</div>
          <div className="card-hearder-text">THE COMPANY</div>
          <div className="card-hearder-img">
            <img
              src="http://htmlbeans.com/html/swan/images/divider2.png"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been indust...
          </div>
          <div className="read-more">READ MORE ...</div>
        </div>
        <div className="card">
          <div className="card-number">01.</div>
          <div className="card-hearder-text">THE COMPANY</div>
          <div className="card-hearder-img">
            <img
              src="http://htmlbeans.com/html/swan/images/divider2.png"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been indust...
          </div>
          <div className="read-more">READ MORE ...</div>
        </div>
        <div className="card">
          <div className="card-number">01.</div>
          <div className="card-hearder-text">THE COMPANY</div>
          <div className="card-hearder-img">
            <img
              src="http://htmlbeans.com/html/swan/images/divider2.png"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been indust...
          </div>
          <div className="read-more">READ MORE ...</div>
        </div>
        <div className="card">
          <div className="card-number">01.</div>
          <div className="card-hearder-text">THE COMPANY</div>
          <div className="card-hearder-img">
            <img
              src="http://htmlbeans.com/html/swan/images/divider2.png"
              alt=""
            />
          </div>
          <div className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been indust...
          </div>
          <div className="read-more">READ MORE ...</div>
        </div>
      </div>
      <div className="services">
        <div className="services-left">
          <div className="cards-hearder">
            <div id="card-service" className="awasome">
              <i class="fa-solid fa-mobile-screen"></i> <p> AWASOME DESING</p>{" "}
              <img
                src="http://htmlbeans.com/html/swan/images/divider.png"
                alt=""
              />
            </div>
            <div id="card-service" className="responsive">
              <i class="fa-solid fa-mobile-screen"></i>
              <p>RESPONSIVE LAYOUT</p>
              <img
                src="http://htmlbeans.com/html/swan/images/divider.png"
                alt=""
              />
            </div>
          </div>
          <div className="cards-hearder">
            <div id="card-service" className="custom">
              <i class="fa-solid fa-mobile-screen"></i>
              <p>EASY TO CUSTOMIZE</p>{" "}
              <img
                src="http://htmlbeans.com/html/swan/images/divider.png"
                alt=""
              />
            </div>
            <div id="card-service" className="work">
              <i class="fa-solid fa-mobile-screen"></i>
              <p>FULL SUPPORT WORK</p>
              <img
                src="http://htmlbeans.com/html/swan/images/divider.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="service-right">
            <div className="service-text-hearder">
                <p>OUR GREAT</p> <p>SERVICES</p> 
                
            </div>
            <div className="service-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been standard. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
            <ul>
                <li>Responsive Design</li>
                <li>Great Support</li>
                <li>Look great on any devices</li>
                <li>Highest Speed</li>
                <li>Fresh Design</li>
                <li>Useful and Intuitive Interface</li>
            </ul>
        </div>
      </div>
      <div className="table">
        <div className="table-head">
        <p className="great">GREAT</p>
        <p className="pricing">PRICING TABLE</p></div>
        <img src="http://htmlbeans.com/html/swan/images/divider2.png" alt="" />
        <p className="lor"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
       

      </div>
      <div className="table-cards">
        <div className=" table-card"> 
        <div className="card-hearder-">STARTUP</div>
        <div className="money">$125</div>
        <div className="hearder-text-card">Best package for small awesome team</div>
        <div className="card-main-head">SMALL AWESOME TEAM</div>
        <div className="card-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</div>
        <div className="order-now">ORDER NOW...</div>
        </div>
        <div className=" table-card"> 
        <div className="card-hearder-">STARTUP</div>
        <div className="money">$125</div>
        <div className="hearder-text-card">Best package for small awesome team</div>
        <div className="card-main-head">SMALL AWESOME TEAM</div>
        <div className="card-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</div>
        <div className="order-now">ORDER NOW...</div>
        </div>
        <div className=" table-card"> 
        <div className="card-hearder-">STARTUP</div>
        <div className="money">$125</div>
        <div className="hearder-text-card">Best package for small awesome team</div>
        <div className="card-main-head">SMALL AWESOME TEAM</div>
        <div className="card-lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</div>
        <div className="order-now">ORDER NOW...</div>
        </div>

      </div>
    </div>
  );
};

export default Main;
