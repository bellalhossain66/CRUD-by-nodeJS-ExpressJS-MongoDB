const user = require('../system/model/model')

module.exports = {
    add_person_insert: (body, callBack) => {
        const user_insert = new user({
            name: body.name,
            age: body.age,
            email: body.email,
            address: body.address
        })
        user_insert
            .save(user_insert)
            .then(results => {
                return callBack(null, results)
            })
            .catch(err => {
                return callBack(err)
            })
    },
    all_person_find: (callBack) => {
        user.find()
            .then(results => {
                return callBack(null, results)
            })
            .catch(err => {
                return callBack(err)
            })
    },
    update_person: (id, body, callBack) => {
        user.findByIdAndUpdate(id, body)
            .then(results => {
                console.log(results)
                return callBack(null, results)
            })
            .catch(err => {
                console.log(results)
                return callBack(err)
            })
    },
    delete_person: (id, callBack) => {
        user.findByIdAndDelete(id)
            .then(results => {
                return callBack(null, results)
            })
            .catch(err => {
                return callBack(err)
            })
    }
}