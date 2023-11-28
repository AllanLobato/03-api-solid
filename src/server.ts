import { env } from "./env"
import {app} from "./app"

app.listen({
    host: '0.0.0.0', //hack para que a aplicação seja mais acessível para o frontend
    port: env.PORT,
}).then(() => {
    console.log('HTTP Server running!')
})