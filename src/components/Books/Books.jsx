import data from '../../data/data.json'
export default function App(data) {
    return (
        <div className="card">
            <h1>Author: ${data.author}</h1>
            <h1>Country: ${data.country}</h1>
            <h1>Language: ${data.language}</h1>
            <h1>Link: ${data.link}</h1>
            <h1>Pages: ${data.pages}</h1>
            <h1>Title: ${data.title}</h1>
            <h1>Year: ${data.year}</h1>
            <div>
                {[...Array(data.rating)]}.map((index) => (
                <faStart id={index + 1} key={index} />
                ))
            </div>
        </div>
    )
}