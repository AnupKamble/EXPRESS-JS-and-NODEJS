const validator =(req,res,next)=> {

    if ( !req.body.breedname || !req.body.age || !req.body.origin || !req.body.price ) {

        return res.status(400).json({
            err : "All the fields are not there"
        })
    }
    next();
}

module.exports = validator;
