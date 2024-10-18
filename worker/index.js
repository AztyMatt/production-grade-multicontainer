const keys = require ('./keys')
const redis = require ('redis')

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
})
const redisSubscription = redisClient.duplicate()

// Fonction récursive, donc elle s'execute dans elle meme, mais pour autant elle ne retourne qu'un seul et unique résultat
function fib(index) {
    if (index < 2) return 1
    return fib(index - 1) + fib(index - 2)
}

// On défini simplement comment Redis va réagir, on ne déclenche pas immédiatement l'exécution de la fonction !
redisSubscription.subscribe('insert')
redisSubscription.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)))
})