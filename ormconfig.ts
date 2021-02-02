
import { ConnectionOptions } from 'typeorm'
import * as dotenv from 'dotenv'
import * as path from 'path'
dotenv.config({
   path: path.join(__dirname, `../env/${process.env.NODE_ENV}.env`)
})
let synchronize = false
if (process.env.SYNCHRONIZE == 'true') {
   synchronize = true
}
export const config: ConnectionOptions = {
   name:'default',
   host: "localhost",
   type: 'mysql',
   port: 3306,
   username: "root",
   password: process.env.DB_PSW,
   database: "mt_mall",
   logging: true,
   entities: [
      __dirname + "/**/*.entity.js"
   ],
   migrations: [
      __dirname + "/migration/*.js"
   ],
   synchronize,
   cli: {
      migrationsDir: "../migration"
   }
}