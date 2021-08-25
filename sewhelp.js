/* Coded By Ravindu Manoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

function successfullMessage(msg) {
    return "🇱🇰 𝓣𝓱𝓲𝓵𝓲𝓷𝓪™:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🥴 𝓣𝓱𝓲𝓵𝓲𝓷𝓪™:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🐲 𝓣𝓱𝓲𝓵𝓲𝓷𝓪™:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
