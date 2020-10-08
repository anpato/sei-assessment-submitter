const { createTransport } = require('nodemailer')
require('dotenv/config')
const transport = () => {
  let config = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD
    }
  }
  console.log(process.env)
  return createTransport(config)
}

const mailer = async (email, score) => {
  console.log('Sending Mail')
  let options = {
    from: process.env.MAILER_USER,
    to: email,
    subject: 'Your Assessment Scores',
    text: `Great work on the assessment today, here is your score: ${score} out of 100%. If you have any questions regarding your result contact your IL and IA's.`
  }

  return await transport().sendMail(options)
}

module.exports = mailer
