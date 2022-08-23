module.exports=(sequelize,Sequelize)=>{
    const coupons = sequelize.define("couponmanagement",{
        coupon_name:{
            type:Sequelize.STRING
        },
        offer_name:{
            type:Sequelize.STRING
        },
        start_date:{
            type:Sequelize.STRING
        },
        end_date:{
            type:Sequelize.STRING
        },
        discount_percentage:{
            type:Sequelize.STRING
        },
        discount_price:{
            type:Sequelize.STRING
        }
    })
return coupons
}
