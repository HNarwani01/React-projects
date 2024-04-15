import { useContext, useRef } from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { PostList } from "../Store/PostListStore";

const NewPost = () => {
const {addToPost} = useContext(PostList)
const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const postTagsElement = useRef();
const postReactionElement = useRef();
const handleOnSubmit = (event) => {
  event.preventDefault();
  const inputList = [
    userIdElement.current.value,
    postTitleElement.current.value,
    postBodyElement.current.value,
    postTagsElement.current.value,
    postReactionElement.current.value
  ];

  addToPost(inputList);
  event.target.reset();
}
    return < form className="newPostForm" onSubmit={handleOnSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">User Id</label>
      <input ref={userIdElement} type="text" className="form-control" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
      <input ref={postTitleElement} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">What's on your mind today! <FaRegSmileWink /></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Describe</label>
      <textarea ref={postBodyElement} className="form-control" cols="30" rows="10"></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Tags</label>
      <input ref={postTagsElement} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label ref={postReactionElement} htmlFor="exampleInputEmail1" className="form-label">reactions</label>
      <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" min="1"/>
    </div>
    
    <div className="mb-3 form-check">
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form >
}
export default NewPost;