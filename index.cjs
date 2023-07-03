const { RouterOSAPI } = require('node-routeros')

const conn = new RouterOSAPI({
    host: '172.17.1.1',
    user: 'nataniel',
    password: 'N@tan@097',
});

conn.connect().then(async () => {
    const cmd = process.argv[2]
    await require('./' + cmd)(conn)
    conn.close()
})
