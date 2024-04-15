import { MdDelete } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike  } from "react-icons/ai";
const Post = ({ post, method }) => {
  return <>
    <div className="card" style={{ width: "18rem" }}>
      <span onClick={()=>{method(post.id)}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn">
        <MdDelete />

      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {/* <div className="alert alert-info" role="alert">
          {post.tags.map((tag)=> '#'+tag+' ')}
        </div> */}
        <div className="popularity">
        <button type="button" className="btn btn-secondary"><AiOutlineLike /></button>
        <button type="button" className="btn btn-secondary"><AiOutlineDislike /></button>
        </div>
      </div>
    </div>
  </>
}
export default Post;