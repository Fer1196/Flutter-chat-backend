const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h',
        }, (err, token) => {
            if (err) {
                reject('No se pude generar JWT');
            } else {
                resolve(token);
            }
        })
    });

}

module.exports = {
    generarJWT
}