import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { createNewNote } from "../../store/notes";
import './createNewNote.css';

const CreateNewNote = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user?.id)
    // console.log(user)
    const userId = user;
    console.log(userId)

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);


    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value)



    useEffect(() => {
        const errors = [];
        if (!title.length) {
            errors.push("Please provide a title for your note")
        }
        if (content.length === 0) {
            errors.push("Please enter your note")
        }
        setErrors(errors)
    },[title, content])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const payload = {
          title,
          content,
          userId
        };

        let createdNote = await dispatch(createNewNote(payload));
        if (createdNote) {
          history.push(`/notes`);
        }
      };

      const handleCancelClick = (e) => {
        return <Redirect to="/notes" />;
      };

 return (
     <div>
        <form onSubmit={handleSubmit}>
           {errors.length > 0 && (
               <ul className="errors">
                 {errors.map((error) => (
                   <li key={error}>{error}</li>
                 ))}
               </ul>
             )}
            <input
               placeholder="Title"
               type="text"
               value={title}
               onChange={updateTitle}/>
           <textarea
               placeholder="Type to Start"
               type="text"
               value={content}
               onChange={updateContent}
           />
           <button type="submit">Create new Note</button>
           <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>

     </div>
 )

}

export default CreateNewNote;
