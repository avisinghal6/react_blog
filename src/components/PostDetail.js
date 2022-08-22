import {useState,useEffect} from 'react';
import {firestore} from '../firebase';
import {useParams} from 'react-router-dom';
function PostDetail() {
    const [post,setPost] = useState({}); //useState triggers a rerender when the state changes, thats why hooks are used here
    // since useEffect runs after first mount thats when post gets its value, and since post is a hook, useState will cause 
    //rerender when it is assgined a new value.
    const {postId} = useParams(); // used to get the id from the url (/postId)
    useEffect(()=>{
        firestore
        .collection('posts')
        .doc(postId)
        .get()
        .then((snapshot)=>{
            console.log('snapshot',snapshot.data());
            setPost(snapshot.data());
        });
    },[]);

    return (
      <div className="post-detail">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
      </div>
      );
    
  }
  
  export default PostDetail;