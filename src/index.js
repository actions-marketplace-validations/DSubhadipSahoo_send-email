const nodemailer = require("nodemailer")
const config = require("./config")

async function main() {
    const transport = nodemailer.createTransport(config.SESConfig())
    // const info = await transport.sendMail({
    //     from: "Friender <friender@tier5.us>",
    //     to: "subhadip.sahoo@tier5.in",
    //     subject: "Testing email",
    //     html: "<b>This is a html text</b>",
    //     attachments: [
    //         {
    //             path: "./data/attachment.txt"
    //         }
    //     ]
    // })
    const info = await transport.sendMail(config.inputs())
}

main()