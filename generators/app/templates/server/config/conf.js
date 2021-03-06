// where real server will be
exports.targetServer = {
    ip : 'http://127.0.0.1',
    port : 3000,
    restApi : '/api' // used only in case ONLY targetServer is present (otherwise, mock server will put entire request through)
}

// where mocked server will be
// if you want to go directly to server each time, comment out below
exports.mockServer = {
    port : 3002,
    ip : '0.0.0.0',
    restApi : '/api'
}
