//import {useState} from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';
import styled, {css} from 'styled-components';

const StyledButton= styled.button`
height: 33px;
  background: ${(props) => props.primary ? '#4caf50': 'blue'};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) => props.primary && css`
    border: 4px solid red;  
  ` };
`;

//to add dynamic behavior the above code is used, now the background changes according to primary attribute.
// when the StyledButton component is called, the props (primary) is passed and then action decided.
//If we want to add multiple styles dynamically, then we need to import and use "css" as shown above.
function CreatePost() {

  const title=useFormInput('');
  const subTitle=useFormInput('');
  const content=useFormInput('');

  function handleSubmit(e){
    e.preventDefault();
    console.log('title',title);
    console.log('subTtitle',subTitle);
    console.log('content',content);

    firestore.collection('posts').add({
      title:title.value,
      content:content.value,
      subTitle:subTitle.value,
      createAt: new Date(),
    });
  }
    return (
      <div className="create-post">
          <h1> Create Post</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label> Title</label>
              <input {...title}/> 
              {/* {...title}(it is called spread operator) will convert to value={title} onChange={(e)=> setTitle(e.target.value)} */}
            </div>

            <div className="form-field">
              <label> Sub Title</label>
              <input {...subTitle}/>
            </div>

            <div className="form-field">
              <label>Content</label>
              <textarea {...content}></textarea>
            </div>

            <StyledButton primary > Create Post</StyledButton> 
            {/* added the primary attribute */}
          </form>
      </div>
    );
    
  }
  
  export default CreatePost;