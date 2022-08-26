import {useEffect, useState} from 'react';
import {firestore} from '../firebase';
import {Link} from 'react-router-dom';
import styled from 'styled-components'; // for writing css code inside javascript

const PostSubTitle= styled.h1`
  font-size: 13px;
`;
// the first letter of the variable needs to be capital otherwise styled does not work.
const BlogHeading= styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`; // `` is called the string template literal, we can write css code inside these template literals.
//the  `` literals are a way of accepting arguments to the h1(in this case) function. Then styled.h1`` will
// return a new react component which can be directly used as any other react component as shown below.
// by inspecting the source code, it can be seen that a new class is created for the css similar to css modules.
// with the css content inside styles tag in the head tag.

function Home() {
  const [posts,setPosts]= useState([]);

  useEffect(()=> {
    firestore
    .collection('posts')
    .get()
    .then((snapshot)=>{
      const posts=snapshot.docs.map((doc)=> {
        return {
          id:doc.id,
          ...doc.data()
        }
      });

      console.log('posts',posts);
      setPosts(posts);
    })
  },[]);
    return <div className="home">
      <BlogHeading> Tech Blog</BlogHeading>
      <div id="blog"> Avi</div>

      {
        posts.map((post,index) => (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            <PostSubTitle> {post.subTitle}</PostSubTitle>
            </div>
        ))
      }
    </div>

  }
  
  export default Home;
  
  const styles={
    heading:{
      marginTop: 30,
      fontSize:57
    }
  };