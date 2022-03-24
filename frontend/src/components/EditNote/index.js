import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getAllNotes, getOneNote } from "../../store/notes";
import { NavLink } from "react-router-dom";
import { editNote } from "../../store/notes";
import { deleteNote } from "../../store/notes";
import "./editNote.css"

const EditOneNote = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { id } = useParams()
    // console.log(id)

    useEffect(() => {
        dispatch(getAllNotes(id));
        // console.log(id)
        // console.log("IM HERE")
    }, [dispatch, id]);

    const oneNote = useSelector((state) => state.notes[id]);
    // console.log(oneNote)

    const userId = useSelector((state) => state.session.user?.id)
    // console.log(user.noteId)
    const noteId = id;

    const [title, setTitle] = useState(oneNote?.title);
    const [content, setContent] = useState(oneNote?.content);
    const [errors, setErrors] = useState([]);


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


    useEffect(() => {

        if (oneNote) {
            setTitle(oneNote?.title);
            setContent(oneNote?.content)
            console.log("NOW HERE")
        }
    }, [oneNote])

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value)

    if (!userId) return <Redirect to="/home" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const updatedPayload = {
            noteId,
            title,
            content
        };

        let updatedNote = await dispatch(editNote(updatedPayload));
        // if (!updatedNote) {
        //   // history.push(`/notes/`);
        // }
      };

      const handleDelete = async(e) => {
        e.preventDefault();
        const deleteOneNote = { noteId };
        // console.log(deleteOneNote)
        const deletedNote = await dispatch(deleteNote(deleteOneNote));
        if (!deletedNote) {
          history.push(`/notes`);

        }
      };

    return(
        <>
        <div className="formContainerEdit">
        <form className="form" onSubmit={handleSubmit}>
           {errors.length > 0 && (
               <ul className="errors">
                 {errors.map((error) => (
                   <li key={error}>{error}</li>
                 ))}
               </ul>
             )}
            <input className="titleInputEdit"
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
           <button type="submit">Save Changes</button>
           <NavLink className="cancelEditBtn" to="/notes">Cancel</NavLink>
           <button className="deleteBtnEdit" onClick={handleDelete}>
               Delete
           </button>
        </form>

     </div>
        </>
    )
}

export default EditOneNote
