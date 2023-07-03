const { RouterOSAPI } = require('node-routeros')

const [host, user, password, cmd, ...args] = process.argv.slice(2)

const conn = new RouterOSAPI({host, user, password})

conn.connect().then(async () => {
    await require('./' + cmd)(conn, ...args)
    conn.close()
})
