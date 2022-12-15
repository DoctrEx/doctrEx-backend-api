const {getOne} = require('./appointments.action');

module.exports = {
    '/:slug': {
        get: {
            action: getOne,
            level: 'public'
        }
    },
};