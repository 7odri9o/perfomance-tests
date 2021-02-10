const uuid = require('uuid')

const pool = require('./pool-factory')
const model = require('./model.json')
const logger = require('../logger')

const selectItems = async () => {
    try {
        const result = await pool.query(`SELECT COUNT(*) AS 'total' FROM events_poc_test`)
        logger.info('Encontrados', { result })
        return true
    } catch (err) {
        logger.error(err)
        return false
    }

}

const insertItems = async (amount) => {
    const items = []
    try {
        for (const position of Array.from(Array(amount).keys())) {
            const data = [...model]
            const id = uuid.v4()
            data[2] = `${id}`
            items.push(data)
        }

        const query = `
            INSERT INTO events_poc_test
                (TskStatus, TaskType, ObjectLinkingId, ObjectName, ObjectType, ObjectState, 
                    Location, SlaDomainId, SlaDomain, SlaDomainState, StartTime, 
                    EndTime, Duration, DataTransferred, DataStored)
            VALUES ?;`

        const [{ affectedRows }] = await pool.query(query, [ items ])

        logger.info(`Registro inseridos: ${affectedRows}`)
    } catch (err) {
        logger.error(err)
    }

}

module.exports = {
    selectItems,
    insertItems
}