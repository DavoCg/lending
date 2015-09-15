module.exports = {
    all: {
        model: 'loan',
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
            }
        }
    }
};
