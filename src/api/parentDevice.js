const router = require('express').Router();
const repository = require('../repository/parentRepository')

/*
    Reading device id based on parent id
*/
router.get('/parentDevice/:parentId', async (req,res) => {
    try{
        const result = await repository.getDeviceIdBasedOnParentId(req.params.parentId)
        res.send(result).status(200);
    }
    catch(err){
        console.error('Error :: ',err);
    }
})

module.exports = router;