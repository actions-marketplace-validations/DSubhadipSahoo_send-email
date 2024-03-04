'user strict'
const core = require("@actions/core")

module.exports = {
      mailServerConfig: function() {
        return {
          host: core.getInput("host", {require: true}),
          port: core.getInput("port", {require: true}),
          secure: ((core.getInput("port", {require: true}) === 465)) ? true : false, // true for 465, false for other ports
          pool: core.getInput("pool", {default: true}),
          requireTLS: true,
          logger: true,
          auth: {
            user: core.getInput("user", {require: true}), // generated ethereal user
            pass: core.getInput("pass", {require: true}), // generated ethereal password
          }
        }
      },
      inputs: function() {
        const cc = core.getInput("cc", { required: false })
        const attachment = core.getInput("attachment", {required: false})
        return {
            from: core.getInput("from", {required: true}),
            to: core.getInput("to", {required: true}),
            cc: cc ? cc : undefined,
            subject: core.getInput("subject", { required: true }),
            html: core.getInput("html_body", {required: true}),
            attachments: attachment ? [{ path: attachment}] : undefined
        }
    }
};