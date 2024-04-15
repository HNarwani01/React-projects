import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
    postList: [],
    addToPost: () => { },
    removeFromPost: () => { },
    fetching:false
});
const postListReducer = (currentPostList, action) => {
    let newPostList = [];
    if (action.type === 'Delete') {
        newPostList = currentPostList.filter((item) => item.id !== action.payload.id);
    } else if (action.type === 'Add') {
        newPostList = [action.payload, ...currentPostList];
    }else if(action.type==='AddMulti'){
        newPostList = [...action.payload,...currentPostList]
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postlist, dispatchpostlist] = useReducer(postListReducer, [])
    const [fetching , setFetching] = useState(false)

    
    const addToPost = (inputobj) => {
        dispatchpostlist({
            type: 'Add',
            payload: inputobj
        });
    }
    const addMultiplePost = (postObj) => {
        dispatchpostlist({
            type: 'AddMulti',
            payload: [...postObj]
        });
    }
    const removeFromPost = (Pid) => {
        dispatchpostlist({
            type: 'Delete',
            payload: {
                id: Pid
            }
        })

    }
    // useEffect(()=>{
    //     console.log('useEffect is called');
    //     const controller = new AbortController();
    //     const signal = controller.signal
    //     setFetching(true)
    //     fetch('https://dummyjson.com/posts',{signal})
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         addMultiplePost(data.posts)
    //         console.log(data.posts);
    //         setFetching(false)
    //     })
    //     return ()=>{
    //         controller.abort;
    //     }
        
    // },[])
    return <PostList.Provider value={
        {
            postlist,
            addToPost,
            removeFromPost,
            fetching
        }
    }>
        {children}
    </PostList.Provider>
}
export default PostListProvider;
