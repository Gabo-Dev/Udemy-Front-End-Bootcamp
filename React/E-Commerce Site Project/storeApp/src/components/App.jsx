import React, { useState } from "react";
import '../css/styles.css'
import Category from "./Category";


export function App() {
    // to manipulate our JSON data when it come back from our JSON server
    const [results, setResults] = useState([]);

    // fetch API
    React.useEffect(() => {
        // async call, we update the results using the data 
        fetch("http://localhost:5000/categories")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResults(data)
            })

    }, [])

    const renderCategories = () =>{
        return results.map(c =>
            <Category key={c.id} id={c.id} title={c.title} />
        )
    }

    return (
        <>
            <header>
                Gabo Store
            </header>
            <section>
                <nav>
                   {results && renderCategories()}
                </nav>
                <article>
                    main area
                </article>
            </section>
            <footer>
            <p>&copy; 2024 Gabo S.L.</p>
            </footer>
        </>
    )
}