const route = require('express').Router()

const coupon =  require('../controller/couponmangement')

route.post('/post',coupon.create)
route.get('/getallcoupon/test',coupon.findAll)
route.get('/getcoupon/:id',coupon.findByPk)
route.put('/updatecoupon/:id',coupon.update)
route.delete('/deletecoupon/:id',coupon.delete)

module.exports = route