const nodemailer = require("nodemailer")
const config = require("./config")

async function main() {
    const transport = nodemailer.createTransport(config.SESConfig())
    const info = await transport.sendMail(config.inputs())
}

main()