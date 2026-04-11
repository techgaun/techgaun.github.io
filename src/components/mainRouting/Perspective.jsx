import Article from "../subComponent/Article"; 

const Perspective = () => {
  return (
    <div className="perspectivePage">
      <div className="persMain">
        Thoughts on <br /> <i className="fSub"> building</i>
        <div className="searchBox">
            <input type="text" placeholder="Search..." />
          </div>
      </div>
      <div className="articles">
          <Article />
          <Article />
          <Article />
        </div>

    </div>
  );
};

export default Perspective;
