module.exports = {
    all: {
        model: 'user',
        routes: {
            list: {
                path: '/',
                method: 'get'
            },
            create: {
                path: '/',
                method: 'post'
            },
            get: {
                path: '/:id',
                method: 'get'
            },
            update: {
                path: '/:id',
                method: 'put'
            },
            changePassword: {
                path: '/:id/password',
                method: 'put'
            }
        }
    }
};
