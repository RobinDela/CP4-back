const mysql = require('mysql2/promise');

require('dotenv').config();
const nodemailer = require('nodemailer');

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

const connection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

module.exports = {
  db: connection,
  mailer: transporter,
};
