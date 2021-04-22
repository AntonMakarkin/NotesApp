import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tosha.makarkin@yandex.ru',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tosha.makarkin@yandex.ru',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. We hope yo see you back sometime soon.`
    })
}

export {
    sendWelcomeEmail,
    sendByeEmail
}
