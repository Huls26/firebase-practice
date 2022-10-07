import { useState } from "react";
import booksData, { querySnapshot, colRef, db } from "../index";
import "./Home.css";

import {
    addDoc,
    deleteDoc,
    doc
} from "firebase/firestore"
import { async } from "@firebase/util";

console.log(booksData)
export default function Home() {
    const defaultForms = {
        title: "",
        author: "",
        delete: "",
    };
    let [dataForm, setDataForm] = useState(() => defaultForms)

    function handleChange(event) {
        let target = event.currentTarget;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
    
        setDataForm(prevDataForm => ({
                            ...prevDataForm, 
                            [name]: value,
                        })
        )
    }

    function addItem(event) {
        event.preventDefault();

        try {
            addDoc(colRef, dataForm);
            setDataForm(() => defaultForms);
        } catch(error) {
            console.log(error)
        }
    }

    function deleteItem(event) {
        event.preventDefault();

        try {
            (async function() {
                const deleteRef = doc(db, "books", dataForm.delete);
                await deleteDoc(deleteRef);
            })()
            setDataForm(() => defaultForms)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <h3 className="title">Firebase Firestore</h3>

            <form className="add-item form" onSubmit={ addItem }>
                <label htmlFor="title" className="title-item">
                    <span>Title:</span>
                    <input value={ dataForm.title } type="text" name="title" className="title" onChange={ handleChange } required/>
                </label>
                

                <label htmlFor="author">
                    <span>Author:</span>
                    <input value={ dataForm.author } type="text" name="author" className="author" onChange={ handleChange } required/>
                </label>

                <button type="submit" className="add-item-btn btn">add new book</button>
            </form>

            <form className="delete-item form" onSubmit={ deleteItem }>
                <label htmlFor="delete" className="delete">
                    <span className="document-id">Document id:</span>
                    <input value={ dataForm.delete } type="text" name="delete" className="delete" onChange={ handleChange } />
                </label>

                <button type="submit" className="delete-item-btn btn">delete book</button>
            </form>
        </div>
    )
}