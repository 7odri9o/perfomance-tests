const uuid = require('uuid')

const EventsModel = require('./model')
const logger = require('../logger')
const { differenceInMilliseconds } = require('date-fns')

const execute = async (amount) => {
    const items = []
    try {
        const before = new Date()

        const result = await EventsModel.deleteMany({})

        logger.info('Objeto adicionado ao mongodb')

        const after = new Date()
        const timeLeft = differenceInMilliseconds(after, before)

        logger.info(`Teste MongoDB Finalizado. Tempo Gasto: ${timeLeft}`)
    } catch (err) {
        return err
    }   
}

module.exports = {
    execute
}