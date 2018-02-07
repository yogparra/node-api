
const restifyRouter = require('restify-router').Router;
const msginfo       = require('../../messages/info');
const router        = new restifyRouter();
const { isValid }   = require('../../messages/validate-req');
const useQuery      = require('./userquery');

//RUTA --> get --> /v1/user/info
router.get("/info", function (req, res, next) {
    res.send({ status: 'success' });
    return next();
});

router.get("/:rut/:domain/detalle", (req, res, next) => {

    req.assert('rut', msginfo.INFO.VALIDACION_PARAMETRO_REQUEST_REQUERIDO).notEmpty();
    req.assert('domain', msginfo.INFO.VALIDACION_PARAMETRO_REQUEST_REQUERIDO).notEmpty();

    if (isValid(req, res)) {
    const { rut,domain } = req.params;
    
    useQuery
        .getUserByUserName(rut)
        .then((data) => {
            res.send(200, { result: data });
        })
        .catch((error) => {
            res.send(400, { error: error.message })
        });
    }

});





module.exports = router;
