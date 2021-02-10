const uuid = require('uuid')

const EventsModel = require('./model')
const seed = require('./seed.json')
const logger = require('../logger')
const { differenceInMilliseconds } = require('date-fns')

const execute = async (amount) => {
    const items = []
    try {

        for (const position of Array.from(Array(amount).keys())) {
            const data = {...seed}
            const id = uuid.v4()
            data['ObjectLinkingId'] = id
            items.push(data)
        }

        const before = new Date()

        for (const item of items) {
            const result = await EventsModel.create(item)
            logger.info('Objeto adicionado ao mongodb')
        }

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