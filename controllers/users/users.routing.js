const { update } = require('./users.action');


module.exports = {
    '/:id': {
        get:{
            action: getOne,
            level: 'public'
        },
        put: {
            action: update,
            level: 'public'
        },
    }
};