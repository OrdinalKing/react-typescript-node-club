require('dotenv').config();

const {
  NODE_ENV,
  PORT,
  MONGO_URI,
  MONGO_URI_DEV,
  JWT_SECRET,
  JWT_EXPIRE_MINUTES,
  APP_NAME,
  DATA_API_KEY,
  // MAIL_SENDER,
  // MAIL_SENDER_PASS,
} = process.env;

module.exports = {
  port: PORT,
  mongoURI: NODE_ENV === 'production' ? MONGO_URI : MONGO_URI_DEV,
  secretOrKey: JWT_SECRET,
  jwtExpireMinutes: JWT_EXPIRE_MINUTES,
  appName: APP_NAME,
  apiKey: DATA_API_KEY,
  // emailSender: {
  //   service: 'Gmail',
  //   auth: {
  //     user: MAIL_SENDER,
  //     pass: MAIL_SENDER_PASS,
  //   },
  // },
};
