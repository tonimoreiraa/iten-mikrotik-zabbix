module.exports = async (conn) => {
    const interfaces = (await conn.write('/interface/l2tp-server/print'))
    const users = (await conn.write('/ppp/secret/print'))
    
    const vpns = interfaces.map(interface => {
        const user = users.find(user => user.name == interface.user)
        return {...interface, 'remote-address': user && user['remote-address']}
    })
    const data = vpns.map(vpn => Object.fromEntries(Object.entries(vpn).map(entry => [`{#${'VPN.' + entry[0].toUpperCase().replace('.', '')}}`, entry[1]])))

    console.log(JSON.stringify({data}))
}