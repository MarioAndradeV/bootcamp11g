
function logged (request, response, next) {
    console.log(` Method: ${request.method} \n Url: ${request.url} \n Body : ${JSON.stringify(request.body)}`)
next()
}

module.exports = logged