import { FaRegSmileWink } from "react-icons/fa";
import {Form} from "react-router-dom";
const NewPost = () => {


    return < Form className="newPostForm" onSubmit={handleOnSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">User Id</label>
      <input name={userIdElement} type="text" className="form-control" aria-describedby="emailHelp"/>
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
      <input name={postTagsElement} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label  htmlFor="exampleInputEmail1" className="form-label">reactions</label>
      <input ref={postReactionElement} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" min="1"/>
    </div>
    
    <div className="mb-3 form-check">
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </Form >
}
export const newPostForm=()=>{
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postTitleElement.current.value,
      body: postBodyElement.current.value,
      reactions: postReactionElement.current.value,
      userId: userIdElement.current.value,
      tags: postTagsElement.current.value.split(' ')
  })
  })
  .then((res)=>res.json())
  .then((post)=>{
    console.log(post);
    addToPost(post);
    navigate('/')
  })
}

export default NewPost;