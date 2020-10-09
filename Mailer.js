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

const mailer = async (email, score, name) => {
  console.log('Sending Mail')
  let options = {
    from: process.env.MAILER_USER,
    to: email,
    subject: 'Your Assessment Scores',
    text: `Great work on the assessment today, here is your score: ${score} out of 100%. If you have any questions regarding your result contact your IL and IA's.`
  }

  await transport().sendMail(options)
  return await transport().sendMail({
    ...options,
    to: process.env.MAILER_USER,
    text: `${name} had a score of ${score}`
  })
}

module.exports = mailer
