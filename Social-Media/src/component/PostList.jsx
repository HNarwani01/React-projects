 import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListStore";

const PostList =()=>{
    const {postlist,removeFromPost} = useContext(PostListData);
    console.log(postlist);
    return <>
    {postlist.map((post)=>
        <Post key={post.id} post={post} method={removeFromPost}/>
    )}
    
    </>
}
export default PostList;