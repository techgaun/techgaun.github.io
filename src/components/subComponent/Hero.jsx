import { ArrowDownIcon } from "lucide-react";

function Hero() {
  return (
    <div className="hero">
      <div className="title">
        <span>FOUNDER</span> | <span>CTO</span> | <span>INVESTOR</span>
      </div>
      <div className="mainTitle">
        Building the future, <br />
        <i className="venture">one venture</i> <br /> at a time.
      </div>
      <div className="subTitle">
        Transforming bold ideas into impactful realities. From the peaks of the
        Himalayas to global tech ecosystems, I bridge innovation with purpose.
      </div>
      <div><button className="explore"><span className="line"/>Explore my work</button></div>
      <div className="scroll">Scroll <ArrowDownIcon className="bounceArrow"/></div>
    </div>
  );
}

export default Hero;
