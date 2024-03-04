const nodemailer = require("nodemailer")
const core = require("@actions/core")
const config = require("./config")

async function main() {
    try {
        const transport = nodemailer.createTransport(config.mailServerConfig())
        const info = await transport.sendMail(config.inputs())
    } catch(error) {
        core.setFailed(error.message)
    }
}

main()