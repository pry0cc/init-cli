function id (env) {
    env.output("uid=1337(0x00sec) gid=1337(0x00sec) groups=1337(0x00sec),954(docker),998(wheel)")
    env.exit()
}

module.exports = id

