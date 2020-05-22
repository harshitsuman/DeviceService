const router = require('express').Router();
const schoolRepository = require('../repository/schoolRepository');

router.get('/schoolDevices/:school_id', async(req, res) => {
    try {
        const result = await schoolRepository.getAllDeviceIdBasedOnSchoolId(req.params.school_id);
        res.send(result);
    } catch (err) {
        throw new Error(err);
        // res.send(err);
    }
});

module.exports = router;