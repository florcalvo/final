const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const clave = 'clave'; 

app.use(express.json());

// autentica al usuario y genera un token
app.post('/login', (req, res) => {
  const { user, password } = req.body;

  if (user === 'usuario' && password === 'contraseña') {
    const token = jwt.sign({ user }, clave, { expiresIn: '1d' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Autenticación fallida' });
  }
});

// verifica el token en rutas protegidas
const verificaToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, clave, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decoded.user; 
    next();
  });
};

// ruta protegida que requiere token
app.get('/rutaProtegida', verificaToken, (req, res) => {
  res.json({ message: 'Acceso permitido', usuario: req.user });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
