import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { createNewNote } from "../../store/notes";
import { NavLink } from "react-router-dom";
import './createNewNote.css';

const CreateNewNote = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user?.id)
    // console.log(user)
    const userId = user;
    // console.log(userId)

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
        if (!content.length) {
            errors.push("Please enter your note")
        }
        setErrors(errors)
    },[title, content])

    if (!user) return <Redirect to="/login" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const payload = {
            userId,
            title,
            content
        };

        let createdNote = await dispatch(createNewNote(payload));
        if (createdNote) {
          history.push(`/notes`);
        }
      };


 return (
     <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
           {errors.length && (
               <ul className="errors">
                 {errors.map((error) => (
                   <li key={error}>{error}</li>
                 ))}
               </ul>
             )}
            <input className="titleInput"
               placeholder="Title"
               type="text"
               value={title}
               onChange={updateTitle}/>
           <textarea className="contentInput"
               placeholder="Type to Start"
               type="text"
               value={content}
               onChange={updateContent}
           />
           <button type="submit">Click to Continue</button>
           <NavLink className="cancelCreateBtn" to="/notes">Cancel</NavLink>
        </form>

     </div>
 )

}

export default CreateNewNote;
