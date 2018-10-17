import * as winston from "winston";

// logger levels and colors
const config = {
  levels: {
    info: 0,
    error: 1,
    warn: 2,
    data: 3
  },
  colors: {
    info: "green",
    error: "magenta",
    warn: "yellow",
    data: "cyan"
  }
};
winston.addColors(config.colors);

// app loger config
const AppLogger = winston.createLogger({
  level: "AppLogger",
  levels: config.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      name: "info",
      level: "info",
      handleExceptions: false,
      json: true,
      colorize: true
    }),
    new winston.transports.Console({
      name: "error",
      level: "error",
      handleExceptions: false,
      json: true,
      colorize: true
    }),
    new winston.transports.Console({
      name: "warn",
      level: "warn",
      handleExceptions: false,
      json: true,
      colorize: true
    }),
    new winston.transports.Console({
      name: "data",
      level: "data",
      handleExceptions: false,
      json: true,
      colorize: true
    })
  ],
  exceptionHandlers: [
    new winston.transports.Console({
      name: "exception",
      level: "exception",
      handleExceptions: true,
      json: true,
      colorize: true
    })
  ]
});

export default AppLogger;
