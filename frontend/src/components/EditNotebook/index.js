import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams, NavLink } from "react-router-dom";
import { editNotebook } from "../../store/notebooks";
import { deleteNotebook } from "../../store/notebooks";
import { getAllNotebooks } from "../../store/notebooks";


const EditOneNotebook = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { id } = useParams()
    const notebookId = id;

    const oneNotebook = useSelector((state) => state.notebooks[id]);
    console.log(notebookId)
    const userId = useSelector((state) => state.session.user?.id)

    const [title, setTitle] = useState(oneNotebook?.title);
    const [errors, setErrors] = useState([]);


    // useEffect(() => {
    //     const errors = [];
    //     if (!title.length) {
    //         errors.push("Please provide a title for your notebook")
    //     }
    //     setErrors(errors)
    // },[title])


    useEffect(() => {
        dispatch(getAllNotebooks(id));
        // console.log(id)
        // console.log("IM HERE")
    }, [dispatch, id]);

    useEffect(() => {
        if (oneNotebook) {
            setTitle(oneNotebook?.title);
        }

    }, [oneNotebook])

    const updateTitle = (e) => setTitle(e.target.value);

    if (!userId) return <Redirect to="/home" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const updatedPayload = {
            notebookId,
            title,
        };

        let updatedNotebook = await dispatch(editNotebook(updatedPayload));
        if (!updatedNotebook) {
          history.push(`/notebooks`);
        }
      };


      const handleDelete = async(e) => {
        e.preventDefault();
        const deleteOneNotebook = { notebookId };
        // console.log(deleteOneNote)
        const deletedNotebook = await dispatch(deleteNotebook(deleteOneNotebook));
        if (!deletedNotebook) {
          history.push(`/notebooks`);

        }
      };


    return(
        <>
                <form className="form" onSubmit={handleSubmit}>
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


           <button type="submit">Save Changes</button>
           <NavLink className="cancelEditBtn" to="/notebooks">Cancel</NavLink>
           <button className="deleteBtnEdit" onClick={handleDelete}>
               Delete
           </button>
        </form>
        </>
    )


}

export default EditOneNotebook;
