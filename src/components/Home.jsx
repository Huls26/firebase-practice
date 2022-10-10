import { useEffect, useState } from "react";
import { getBooks, onSnapShotBooks } from "../utils/api";
import { useLoaderData } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import "./Home.css";


import { colRef } from "../index";
import Book from "./Book";

export async function loader() {
    let books = await getBooks();
    books = books.map(doc => ({...doc.data(), id: doc.id}));
    return { books }
}

async function getUpdateBooks() {
    const dataBooks = onSnapshot(colRef, data => {
        const dataBooks = data.docs.map(doc => ({
                                        ...doc.data(),
                                        id: doc.id,
                                }))
                console.log(dataBooks)
    });

    // realtime updates
    // https://youtu.be/3aoxOtMM2rc
}

export default function Home() {
    const { books } = useLoaderData();
    let data = getUpdateBooks()

    // useEffect(() => {

    // },)

    let [booksData, setBooksData] = useState(() => books);

    const booksElement = booksData.map(book => (<Book key={ book.id } data={ book } />));

    return (
        <div className="Home">
            { booksElement }
        </div>
    )
}