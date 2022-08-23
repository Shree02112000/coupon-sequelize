const { sample } = require("../models");
const db = require("../models");
const Sample =  db.sample;
const op = db.sequelize.op;

// create coupon 

exports.create =async (req,res)=>{
   sample.create({
        coupon_name:req.body.coupon_name,
        offer_name:req.body.offer_name,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        discount_percentage:req.body.discount_percentage,
        discount_price:req.body.discount_price
    }).then((sample)=>{
        res.json({
            message:"coupon created",
        });
    });
};

//find all
exports.findAll = (req,res)=>{
    sample.findAll()
    .then((sample)=>{
        res.json({
            data:sample,
        })
    })
}
//find by id
exports.findByPk =(req,res)=>{
    sample.findByPk(req.params.id)
    .then((sample)=>{
        res.json({
            data:sample
        })
    })
}

//updatecoupon 
exports.update=(req,res)=>{
    const id = req.params.id;
    console.log(id)
    sample.update(
            {
        coupon_name:req.body.coupon_name,
        offer_name:req.body.offer_name,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        discount_percentage:req.body.discount_percentage,
        discount_price:req.body.discount_price
    },
    {where:{id:req.params.id}}
    ).then(()=>{
        console.log("update",sample)
        res.json({
            message:"coupon update",
        });
    });
}

//deletecoupon 
exports.delete = (req,res)=>{
    const id = req.params.id;
    sample.destroy({
        where:{id:id},
    }).then(()=>{
        res.json({
            message:"coupon deleted"
        })
    })
}
