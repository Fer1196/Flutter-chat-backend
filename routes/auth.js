/*
    path api/login
*/
const { Router } = require('express');
const { check } = require('express-validator');


const { crearUsuaurio, loginUsuaurio, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.post('/new', [
    check('nombre', 'El nombe no debe ser vacio').not().isEmpty(),
    check('email', 'El email no debe ser vacio').isEmail(),
    check('password', 'Password no debe ser vacio').not().isEmpty(),
    validarCampos
], crearUsuaurio)

//Login
router.post('/', [
    check('email', 'El email no debe ser vacio').isEmail(),
    check('password', 'Password no debe ser vacio').not().isEmpty(),
    validarCampos
], loginUsuaurio)

//validarJWT
router.get('/renew', validarJWT, renewToken);

module.exports = router;