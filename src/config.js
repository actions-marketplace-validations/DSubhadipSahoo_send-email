'user strict'
const core = require("@actions/core")

module.exports = {
    smtpConfig: function() {
      return {
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'devsupport@redbeltsoftware.com', // generated ethereal user
          pass: 'Redbelt@2', // generated ethereal password
        }
      }
    },
    SESConfig: function() {
        return {
          host: "email-smtp.us-east-1.amazonaws.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          pool: true,
          requireTLS: true,
          logger: true,
          auth: {
            user: 'AKIAQYPXCYQR2WA56SXX', // generated ethereal user
            pass: 'BKfznplhcLWg+6aTrvFzTZJ2A8gLUAYwrdI+xGUnRmY8', // generated ethereal password
          }
        }
      },
      inputs: function() {
        return {
            from: "Friender <friender@tier5.us>",
            to: core.getInput("to", {required: true}),
            subject: core.getInput("subject", { required: true }),
            html: core.getInput("html_body", {required: true}),
            attachments: [
                {
                    path: core.getInput("attachment", {required: false})
                }
            ]
        }
    }
};