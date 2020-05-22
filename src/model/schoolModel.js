var connection = require('../db/pgconnection');

var schoolModel = {

    getAllDeviceIdBasedOnSchoolId : school_id => {
        var pgsql = `select device_number from device_master where school_id = ${school_id}`;

        return new Promise((resolve, reject) => {
            connection.query(pgsql, (err, data) => {

                if(data.rows.length ==0 || err)
                reject({
                    status : 500,
                    success : false,
                    message : "SchoolId doesn't Exists"
                });

                if(data.rows.length)
                resolve({
                    status : 200,
                    success : true,
                    message : 'Data retrieved successfully',
                    data : data.rows
                    
                });
            })
        }) 
    
    }
    
}

module.exports = schoolModel;