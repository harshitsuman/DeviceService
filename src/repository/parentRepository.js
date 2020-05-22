const parentModel = require('../model/parentModel');

const parentRepository = {

    getDeviceIdBasedOnParentId :  async parentId => {

        try{
            const reesult = await parentModel.getDeviceIdBasedOnParentId(parentId);
            return reesult;
        }catch(err){
            // console.log('Error: ',err);
            return err;
        }
    }
}

module.exports = parentRepository;