const { CronJob } = require('cron')

const logger = require('../logger')
const app = require('./app')

const execute = async () => {
    
    let isRunning = false
    logger.info('Cron Add Objects To MariaDB - Antes da Criação do Job')

    const onComplete = function (job, result) {
        const nextDate = job.nextDates().format('YYYY-MM-DD HH:mm:ss')
        const nextRun = `Próxima Execução: ${nextDate}`
        logger.info('Cron Add Objects To MariaDB - Execução finalizada', { nextRun, result })
    }

    const onTick = async function () {
        if (!isRunning) {
        isRunning = true

        try {
            const result = await app.selectItems()
            job.onComplete(job, result)
        } catch (err) {
            logger.error(err)
        }

        isRunning = false
        } else {
            logger.info('Cron Add Objects To MariaDB - Já estava em execução')
            job.onComplete(job, result)
        }
    }

    const job = new CronJob('*/5 * * * * *', onTick, onComplete, false, 'America/Sao_Paulo')
    logger.info('Cron Add Objects To MariaDB - Depois da Criação do Job')

    job.start()
}

module.exports = {
    execute
}