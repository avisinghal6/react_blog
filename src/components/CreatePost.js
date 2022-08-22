//import {useState} from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';
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

            <button className="create-post-btn"> Create Post</button>
          </form>
      </div>
    );
    
  }
  
  export default CreatePost;