import { useState } from "react";
import { redirect } from "react-router-dom";
import { 
    collection,
    addDoc,
    deleteDoc,
    getDocs,
    doc,
 } from "firebase/firestore";

import "./App.css";

import db from "../index";

export default function App() {
    const defaultDataForm = {
        title: "",
        author: "",
        id: "",
    }

    let [dataForm, setDataForm] = useState(() => defaultDataForm)

    // event handle
    function addItemToBooks(event) {
        event.preventDefault();

        try { 
            (async function() {
                const colRef = collection(db, "books");
                const addItem = addDoc(colRef, dataForm);
            })();
            setDataForm(() => defaultDataForm);
        } catch(error) {
            console.log("Something went wrong", error)
        }
    }

    function deleteItemToBook(event) {
        event.preventDefault();
        
        try {
            (async function() {
                const docDelete = doc(db, "books", dataForm.id);
                const deleteItem = await deleteDoc(docDelete);
            })();
            redirect("/");
        } catch(error) {
            console.log("Something went wrong", error)
        }
       
    }

    function handleChange(event) {
        const target = event.currentTarget;
        const value =  target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        
        setDataForm(prevData => ({
                                ...prevData,
                                [name]: value,
                            }))
    }

    return (
        <div className="container">
            <h1 className="title">Getting started with firebase 9</h1>

            <div className="firebase-form">
                <h1 className="form-title">Firebase Firestore</h1>

                <form className="add-item" onSubmit={ addItemToBooks }>
                    <div className="title-container">
                        <label htmlFor="title">Title:</label>
                        <input value={ dataForm.title } type="text" name="title" className="title-input" onChange={ handleChange } required/>
                    </div>

                    <div className="author-container">
                        <label htmlFor="author">Author:</label>
                        <input value={ dataForm.author } type="text" name="author" className="author-input" onChange={ handleChange } required/>
                    </div>

                    <button type="submit">Add New Book</button>
                </form>

                <form className="delete-item" onSubmit={ deleteItemToBook }>
                    <div className="delete-container">
                        <label htmlFor="id">Document Id:</label>
                        <input value={ dataForm.id } type="text" name="id" className="delete-input" onChange={ handleChange } required />
                    </div>

                    <button type="submit">Delete Book</button>
                </form>
            </div>
        </div>
    )
}