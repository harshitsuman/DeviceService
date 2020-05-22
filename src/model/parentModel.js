const connection = require('../db/pgconnection');

const parentModel = {
    getDeviceIdBasedOnParentId : parentId => {
        const pgsql = `select device_number from device_master where vehicle_id in (
            select vehicle_id from school_route_allocation where route_id in(
                select route_id from child_route where child_id in (
                    select child_id from child_master where parent_id= ${parentId}) ) )`;
        
        return new Promise((resolve, reject) => {
            connection.query(pgsql, (err, data) => {

                if(data.rows.length == 0 || err) {
                    reject({
                        status : 500,
                        success : false,
                        error : "ParentID doesn't Exists"
                    });
                };

                if(data.rows.length){
                    resolve({
                        status : 200,
                        success : true,
                        message : 'Data retrieved successfully',
                        data : data.rows
                    });
                }

            })
        })
    }
}

module.exports = parentModel;
