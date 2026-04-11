import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

const LetsTalk = ()=>{
return(
  <div>
      <div className="contactPage">
        <div className="footerLeft">
          <div className="footerTitle">GET IN TOUCH</div>
          <div className="footMain">
            Let's create <br /> <i className="fSub">something remarkable</i>
          </div>
          <div className="footSub">
            Whether you're a founder seeking a technical co-pilot, an investor
            looking to collaborate, or simply want to connect I'm always open to
            meaningful conversations.
          </div>
          <div className="socialSection">
            <p>Connect</p>
            <div className="socialLinks">
              <a href="#">
                <Facebook color="white" />
              </a>
              <a href="#">
                <Instagram color="white" />
              </a>
              <a href="#">
                <Mail color="white" />
              </a>
              <a href="#">
                <Twitter color="white" />
              </a>
            </div>
          
          </div>
        </div>

        <form className="contactRight">
          <div className="formGroup">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>

          <div className="formGroup">
            <label>Reason for reaching out</label>
            <select>
              <option>Select a reason</option>
              <option>Startup Collaboration</option>
              <option>Investment Discussion</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Your Message</label>
            <textarea placeholder="Message" rows="5"></textarea>
          </div>

          <button className="sendButton"> Send Message </button>
        </form>
      </div>
    </div>
)
}

export default LetsTalk;