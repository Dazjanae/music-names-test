const express = require('express')
const app = express()
const PORT = 8000


//JSON HERE
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheya',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor',
        'birthLocation': 'ChiTown'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request , response) => {
    response.sendFile(__dirname + '/index.html')
} )

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else {
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT,() => {
    console.log(`The server is now running on ${PORT}!`)
})