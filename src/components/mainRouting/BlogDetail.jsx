import RelatedCard from "../subComponent/RelatedCard";
import { useNavigate } from "react-router-dom";
import Footer from "../subComponent/Footer";

const BlogDetail = () => {
    const navigate = useNavigate();
    return (

      <div className="blogPage">

         {/* Article Header */}
        <div className="blogHeader">
          <div className="blogCategory">LEADERSHIP</div>

          <h1>Clarity Is a Leadership Advantage</h1>

          <div className="blogMeta">
            <span>4 June, 2025</span>
            <span>•</span>
            <span>4 min read</span>
          </div>

          <div className="goBack" onClick={() => navigate(-1)}>— Go back</div>
        </div>

        {/* Article Content */}
        <div className="blogContent">
          <p>
            Most leadership failures aren't caused by a lack of intelligence or effort.
            They come from ambiguity that lingers too long.
          </p>

          <p>
            Clarity is not about having all the answers. It's about choosing a direction
            when information is incomplete and standing behind that choice long enough
            for reality to respond.
          </p>

          <p>
            As organizations scale, clarity becomes harder to maintain. Layers form.
            Language softens. Decisions get delayed in the name of alignment.
          </p>

          <p>
            In my experience, the leaders who scale well are not the loudest or the
            most certain. They are the ones who can say plainly: this matters, this
            doesn't, and here's why.
          </p>

          <div className="tags">
            <span>#Technical update</span>
            <span>#leadership</span>
            <span>#scaling</span>
            <span>#Data</span>
          </div>
        </div>

        {/* Related Posts */}
        <div className="relatedSection">

          <h2>
            Ideas you may <i>Enjoy</i>
          </h2>

          <div className="relatedGrid">
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
          </div>

        </div>
<Footer/>
      </div>
  
  );
}

export default BlogDetail;