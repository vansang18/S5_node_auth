var express = require('express');
var router = express.Router();
var roleController = require('../controllers/roles')
let {CreateErrorRes,CreateSuccessRes} = require('../utils/responseHandler')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let roles = await roleController.GetAllUser();
  CreateSuccessRes(res,roles,200);
});

router.post('/', async function(req, res, next) {
 try {
    let newRole = await roleController.CreateARole(req.body.name);
    CreateSuccessRes(res,newRole,200);
 } catch (error) {
    next(error)
 }
});


router.put('/:id', async function(req, res, next) {
   try {
    let body = req.body
    let role = await roleController.UpdateARole(req.params.id, body.name)
    CreateSuccessRes(res,role,200);
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', async function(req, res, next) {
   try {
    let role = await roleController.DeleteARole(req.params.id)
    CreateSuccessRes(res,role,200);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
