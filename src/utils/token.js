const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newBook = new FormData(form);

    const token = "token";  // Reemplaza token con el token real

    try {
        const response = await fetch("http://localhost:3000/books", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: newBook
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
});
