
export async function addNewBook(formData, token) {
    try {
        const response = await fetch("http://localhost:3000/books", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            console.error("No se pudo agregar un nuevo libro");
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getAllBooks() {
    try {
        const response = await fetch("http://localhost:3000/books");

        if (response.ok) {
            const books = await response.json();
            const html = books.map(b => `
                <article data-title="${b.title}">
                    <img src="${b.poster}">
                    <p>${b.year}</p>
                    <p>${b.author}</p>
                    <p>$${b.price}</p>
                    <button data-id="${b.id}">Borrar</button>
                </article>`
            ).join('');

            // inserta el contenido en el area principal de la pagina
            document.querySelector("main").innerHTML = html;
        } else {
            console.error("Error al obtener la lista de libros");
        }
    } catch (error) {
        console.error(error);
    }
}

export async function deleteBook(id, token) {
    try {
        const response = await fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const article = document.querySelector(`article[data-id="${id}"]`);
            if (article) {
                article.remove();
            }
        } else {
            console.error("Error al borrar el libro");
        }
    } catch (error) {
        console.error(error);
    }
}
