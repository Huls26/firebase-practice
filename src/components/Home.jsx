import { useEffect, useState } from "react";
import { getBooks, getUpdateBooks } from "../utils/api";
import { useLoaderData } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import "./Home.css";

import { colRef } from "../index";
import Book from "./Book";

export async function loader() {
    let books = await getBooks();
    books = books.map(doc => ({...doc.data(), id: doc.id}));
    return { books }
}

export default function Home() {
    const { books } = useLoaderData();

    let [booksData, setBooksData] = useState(() => books);

    useEffect(() => {
        getUpdateBooks(docs => setBooksData(docs))
    }, [JSON.stringify(booksData)])

    console.log(booksData)
    const booksElement = booksData.map(book => (<Book key={ book.id } data={ book } />));

    return (
        <div className="Home">
            { booksElement }
        </div>
    )
}