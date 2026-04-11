import { useNavigate } from "react-router-dom";

function RelatedCard(){
    const navigate = useNavigate();
    return(
      <div className="relatedCard">
  
        <div className="relatedImage"></div>
  
        <div className="relatedCategory">TECHNOLOGY</div>
        <div className="relatedSub"> Some title here</div>
    
        <p>
          I'm a technologist and entrepreneur who believes in building products
          that matter.
        </p>
  
        <div className="relatedFooter">
          <h3>— Read More</h3>
          <p>4 June, 2025</p>
        </div>
  
      </div>
    )
  }
  export default RelatedCard;