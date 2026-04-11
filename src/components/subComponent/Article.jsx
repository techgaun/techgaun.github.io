import { useNavigate } from "react-router-dom";

function Article() {
  const navigate = useNavigate();
    return (
      <div className="articleCard">
  
        <img
          src="https://images.unsplash.com/photo-1518459506758-fcec22c80e75?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="article"
          className="articleImage"
        />
  
        <div className="articleContent">
  
          <div className="articleCategory">TECHNOLOGY</div>
  
          <h1>Some title here</h1>
  
          <p>
            I'm a technologist and entrepreneur who believes in building
            products that matter. With roots in Nepal's rich cultural
            heritage and a global perspective shaped by years in Silicon
            Valley, I bring a unique lens to innovation.
          </p>
  
          <div className="articleFooter">
            <span className="readMore" onClick={() => navigate("/blog-detail")}>— Read More</span>
            <span className="date">4 June, 2025</span>
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default Article;