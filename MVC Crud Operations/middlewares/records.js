const fsPromises = require('fs/promises')

const records = async( req , res , next )=> {
  
    if (req.method === 'DELETE' ) {

        fsPromises.appendFile('records.txt',`The document with id:${req.params.id} has been Updated\n`)
    }
    else if ( req.method === 'PATCH' ) {
        fsPromises.appendFile('records.txt',`The document with id:${req.params.id} has been Deleted\n`)
    }

    next();
}

module.exports = records;