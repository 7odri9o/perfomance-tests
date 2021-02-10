const uuid = require('uuid')

const EventsModel = require('./model')
const ids = require('./ids.json')
const logger = require('../logger')
const { differenceInMilliseconds } = require('date-fns')

const execute = async () => {
    const items = []
    try {
        const before = new Date()

        for (const id of ids) {
            const result = await EventsModel.find({ ObjectLinkingId: { $eq: id }})
            logger.info('Objeto obtido do mongodb', { id })
        }

        const after = new Date()
        const timeLeft = differenceInMilliseconds(after, before)

        logger.info(`Teste Find By Id MongoDB Finalizado. Tempo Gasto: ${timeLeft}`)
    } catch (err) {
        return err
    }   
}

module.exports = {
    execute
}