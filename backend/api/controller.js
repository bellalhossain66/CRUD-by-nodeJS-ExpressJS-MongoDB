const {
    add_person_insert,
    all_person_find,
    update_person,
    delete_person
} = require('./server')
module.exports = {
    add_person: (req, res) => {
        const body = req.body
        if (body.name != '' && body.age != '' && body.email != '' && body.address != '') {
            add_person_insert(body, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
                    })
                }
                return res.json({
                    success: 1,
                    message: "Successfully Added"
                })
            })
        } else {
            return res.json({
                success: 0,
                message: "Fields are required"
            })
        }
    },
    all_person: (req, res) => {
        all_person_find((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.json({
                success: 1,
                message: "Person found",
                data: results
            })
        })
    },
    person_update: (req, res) => {
        if (req.params.action_id != '' && req.body != '') {
            update_person(req.params.action_id, req.body, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
                    })
                }
                if (!results) {
                    return res.json({
                        success: 0,
                        message: "Invalid user"
                    })
                }
                return res.json({
                    success: 1,
                    message: "Update successfully"
                })
            })
        } else {
            return res.json({
                success: 0,
                message: "Fields required"
            })
        }
    },
    person_delete: (req, res) => {
        if (req.body.action_id != '') {
            delete_person(req.body.action_id, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: "Database connection error"
                    })
                }
                if (!results) {
                    return res.json({
                        success: 0,
                        message: "Invalid user"
                    })
                }
                return res.json({
                    success: 1,
                    message: "Delete successfully"
                })
            })
        } else {
            return res.json({
                success: 0,
                message: "Fields required"
            })
        }
    }
}