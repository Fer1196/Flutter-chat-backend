const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    //Leer el token
    const token = req.header('x-token');


    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No haber TOKEN'
        });
    }

    try {
        //Leer el token
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'No valer TOKEN'
        });
    }

}


module.exports = {
    validarJWT
}