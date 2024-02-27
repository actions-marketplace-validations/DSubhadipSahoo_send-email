const core = require("@actions/core")

module.exports = {
    params: function() {
        return {
            from: "Friender <friender@tier5.us>",
            to: core.getInput("to", {required: true}),
            subject: core.getInput("subject", { required: true })
        }
    } 
}
