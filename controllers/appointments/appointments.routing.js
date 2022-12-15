const {getOne} = require('./get-appointments.action');

module.exports = {
    '/:slug': {
        get: {
            action: getOne,
            level: 'public'
        },
        post: {
            action: postOne,
            level: 'public'
        }
    },
};