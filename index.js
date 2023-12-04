import express from "express";
import { router } from "./src/routes/booksRt.js";
import { connection } from "./db_config.js";

const PORT = process.env.PORT ?? 3000; //con esto se lee las variables de entorno, primero lee nuestra primer variable que es PORT
const app = express(); // Nuestra aplicación ejecuta Express
app.listen(PORT, err => {  //Esto hace que nuestra aplicación escuche un puerto
    console.log (
        err
            ? `Ocurrió un error: ${err}`
            :  `Servidor corre en http://localhost:${PORT}`
    );
});

//Uso del enrutador
app.use("/books" , router); //Se utiliza use para que mas adelante se pueda utilizar GET, POST , etc en el enrutador 