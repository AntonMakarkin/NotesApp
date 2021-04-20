import sgMail from "@sendgrid/mail"

const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey)

sgMail.send({
    to: 'tosha.makarkin@yandex.ru',
    from: 'tosha.makarkin@yandex.ru',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you)'
}).then(() => {
    console.log('Message has been sent')
}).catch((error) => {
    console.log(error.response.body)
})