export default function Book({ data }) {
    const { author, title } = data;
    return (
        <article className="book-card">
            <h1 className="card-title">Title: { title }</h1>
            <p className="card-author">Author: { author }</p>
        </article>
    )
}