 import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/PostListStore";
import LosdingSpinner from "./LoadingSpinner";
import StartingPost from "./StartingPost";
import {useLoaderData} from "react-router-dom"

const PostList =()=>{
    const postlist =useLoaderData()
    const { removeFromPost } = useContext(PostListData);
    


    return <>
    {/* { <LosdingSpinner/>} */}
    {postlist.length===0 && <StartingPost  />}
    {postlist.map((post,index)=>
        <Post key={index} post={post} method={removeFromPost} />
    )}
    
    </>
}
export const LoaderData =()=>{
    return fetch('https://dummyjson.com/posts')
        .then((res)=>res.json())
        .then((data)=>{
            return data.posts
        })
}



export default PostList;

