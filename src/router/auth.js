import jwt from 'jsonwebtoken';

export function isAuth(req, res, next) {
  // obtener el token del encabezado de autorizacion
  const token = req.header('Authorization');


  if (!token) {
    return res.status(401).json({ message: 'No hay token, acceso no autorizado' });
  }

  try {
    // verifica el token
    const decoded = jwt.verify(token, 'clave');

    // agrega la informacion del usuario al objeto de solicitud para su uso posterior
    req.user = decoded;


    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}