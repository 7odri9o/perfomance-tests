const amount = parseInt(process.argv[2], 10)

require('./app').insertItems(amount)