import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { createNewNote } from "../../store/notes";
import { NavLink } from "react-router-dom";
import { getAllNotebooks } from "../../store/notebooks";
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
    const [notebook, setNotebook] = useState([])
    const [errors, setErrors] = useState([]);


    const notebooksObj = useSelector((state) => state.notebooks);
    const notebooks = Object.values(notebooksObj);
    console.log(notebooks)
    const userNotebooksArr = notebooks.filter(
      (notebook) => notebook.userId === user
    );
    const userNotebooks = Object.values(userNotebooksArr)
    console.log(userNotebooks[0].id)





    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value)

    useEffect(() => {
      dispatch(getAllNotebooks());
    }, [dispatch]);


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

    if (!user) return <Redirect to="/home" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        console.log(notebook)

        const payload = {
            userId,
            title,
            notebookId: notebook,
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
           {errors.length > 0 && (
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
              <select onChange={setNotebook} >
                 <option value="none" selected disabled hidden>Select Notebook</option>
                  {userNotebooks.map((notebook) => {
                      return <option value={notebook.id}>{notebook.title}</option>
                  })}
              </select>

           <button type="submit">Click to Continue</button>
           <NavLink className="cancelCreateBtn" to="/notes">Cancel</NavLink>
        </form>

     </div>
 )

}

export default CreateNewNote;
