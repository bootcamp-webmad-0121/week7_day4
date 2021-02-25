module.exports = app => {

    // Base URLS
    app.use('/api/coasters', require('./coasters.routes.js'))
}