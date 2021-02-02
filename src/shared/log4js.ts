import log4js from 'log4js'
import path from 'path'
let logPath = path.resolve(__dirname, process.env.NODE_ENV=='dev'?'../../../logs/dev.log':'../../env/log.log')
console.log(logPath)
log4js.configure({
   appenders: {
      file: { type: "file", filename: logPath },
      console: {
         type: "console",
         categories: 'console'
      },
   },

   categories: { default: { appenders: ["file", 'console'], level: "DEBUG" } }
});
export const logger = log4js.getLogger("default") ;
