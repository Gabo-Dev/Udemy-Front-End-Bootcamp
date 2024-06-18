import React, { useState } from "react";
import '../src/css/styles.css'

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


    return (
        <>
            <header>
                Gabo Store
            </header>
            <section>
                <nav>
                    <div className="App">
                        {
                            results.map(d => (
                                <div key={d.id}>{d.title}</div>
                            ))
                        }
                    </div>
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