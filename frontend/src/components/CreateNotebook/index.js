import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { createNewNotebook } from "../../store/notebooks";

const CreateNotebook = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user?.id)
    const userId = user;


    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    // const [showModal, setShowModal] = useState(true);

    


    const updateTitle = (e) => setTitle(e.target.value);


    useEffect(() => {
        const errors = [];
        if (!title.length) {
            errors.push("Please provide a title for your new notebook")
        }
        setErrors(errors)
    },[title])

    if (!user) return <Redirect to="/home" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const payload = {
            userId,
            title
        };

        let createdNotebook = await dispatch(createNewNotebook(payload));
        if (createdNotebook) {

        //   history.push(`/notebooks`);
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

           <button type="submit">Click to Continue</button>
           <button>Cancel</button>
        </form>

     </div>
 )

}

export default CreateNotebook;
