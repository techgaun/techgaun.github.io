function About() {
  return (
    <div className="aboutWrapper" id="about">
      <div className="aboutImage">
        <img className="portrait" src="https://farsightnepal.com/media/photos/WhatsApp_Image_2025-11-28_at_17.25.45_9c0e1e8e.jpg"/>
      </div>
    <div className="about">
      <div className="aboutTitle">ABOUT ME</div>
      <div className="aboutMain">
        Where technology meets <br /> <i className="sub">human ambition</i>
      </div>
      <div className="aboutContent">
        <p>
          I'm a technologist and entrepreneur who believes in building products
          that matter. With roots in Nepal's rich cultural heritage and a global
          perspective shaped by years in Silicon Valley, I bring a unique lens
          to innovation.
          <br />
          <br />
          As a founder, I've built companies from zero to acquisition. As a CTO,
          I've scaled engineering teams across continents. As an investor, I
          back founders who dare to think differently.
          <br />
          <br />
          My philosophy is simple: technology should amplify human potential,
          not replace it. Every line of code, every investment, every venture is
          guided by this principle.
        </p>
      </div>
      <section className="stats">
        <div className="statItem">
          12+
          <p>YEARS EXPERIENCE</p>
        </div>

        <div className="statItem">
          8 <p>COMPANIES FOUNDED</p>
        </div>

        <div className="statItem">
          50M+ <p>CAPITAL RAISED</p>
        </div>

        <div className="statItem">
          100+ <p>JOBS CREATED</p>
        </div>
      </section>
    </div>
    </div>
  );
}
export default About;
