const schoolModel = require('../model/schoolModel');

const schoolRepository = {

    getAllDeviceIdBasedOnSchoolId : async schoolId => {

        try {
            const result = await schoolModel.getAllDeviceIdBasedOnSchoolId(schoolId);
            return result;      
        } catch (err) {
            // console.log('Error:  ',err);
            return err;
        }
    }
}

module.exports = schoolRepository;