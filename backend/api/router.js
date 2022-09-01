const router = require('express').Router()
const {
    add_person,
    all_person,
    person_delete,
    person_update
} = require('./controller')

router.post('/add-person', add_person)
router.get('/person', all_person)
router.delete('/delete-person', person_delete)
router.put('/update-person/:action_id', person_update)

module.exports = router