import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addToPost: () => { },
    removeFromPost: () => { }
});
const postListReducer = (currentPostList, action) => {
    let newPostList = [];
    if (action.type === 'Delete') {
        newPostList = currentPostList.filter((item) => item.id !== action.payload.id);
    } else if (action.type === 'Add') {
        newPostList = [action.payload, ...currentPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postlist, dispatchpostlist] = useReducer(postListReducer, defaultValues)
    const addToPost = (inputList) => {
        dispatchpostlist({
            type: 'Add',
            payload: {
                id: Math.random().toString(36).substring(7), // Generating a random ID
                title: inputList[1],
                body: inputList[2],
                reactions: inputList[4],
                userID: inputList[0],
                tags: inputList[3].split(' ')
            }
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
    return <PostList.Provider value={
        {
            postlist,
            addToPost,
            removeFromPost
        }
    }>
        {children}
    </PostList.Provider>
}
export default PostListProvider;
const defaultValues = [
    {
        id: 1,
        title: 'Going To Gym',
        body: 'As I am a fitness freek I love to go to the gym and the reason is very simple which is, gym ja rha hu na baat khatam',
        reactions: 2,
        userID: 'user@9',
        tags: ['gym', 'fitness', 'steroids']
    },
    {
        id: 2,
        title: 'Going To Coding Classes',
        body: 'Hey guys this is nerd here, I am going to the Coding classes so I can also achieve the 50LPA package one day HAM HONGE KAMYAB!!',
        reactions: 21,
        userID: 'user@91',
        tags: ['computer', 'coding', 'study']
    },
]