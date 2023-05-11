const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: 'api',
	key: 'cc951880cc98892c02a9288f1066d219-102c75d8-0b4ff3f4',
});

const sendMailGun = async (options) => {
    //1. Da gi definirame opciite na emailot

    const mailOptions = {
        from: "Mailgun Sandbox<postmaster@sandboxf0375b76aba04a859fd5f8c6fb30d1a5.mailgun.org>",
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    //da ispratime email koristejki mailgun
    await mg.messages.create('sandboxf0375b76aba04a859fd5f8c6fb30d1a5.mailgun.org', mailOptions);
};

module.exports = sendMailGun;