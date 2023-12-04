const bcrypt = require('bcrypt'); // convierte la contraseña en una especie 
//de código llamado hash. Este codigo es unico para cada contraseña y es 
//muy dificil de revertir
const saltRounds = 10; // agrega un elemento adicional llamado "sal" antes 
//de hacer el hash. La sal es como un ingrediente secreto que cambia el 
//resultado final del hash. Esto significa que aunque dos personas tengan 
//la misma contraseña, sus hashes van a ser diferentes debido a las sales 
//unicas(es ajustable)

async function handlePassword(password) {
  try {
    // Generar la sal
    const salt = await bcrypt.genSalt(saltRounds);

    // Aplicar hash a la contraseña con la sal
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error('Contraseña incorrecta');
  }
}

module.exports = handlePassword;
