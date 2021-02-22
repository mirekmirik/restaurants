require("dotenv").config();
module.exports = function (email, username) {
  return {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Рестораны: Аккаунт успешно создан",
    html: `
            <h1>Добро пожаловать, ${username}, на наш сайт: Рестораны Каменское</h1>
            <p>Вы успешно создали аккаунт с email - ${email}</p>
            <hr/>
            <a href="${process.env.BASE_URL}">Наш сайт</a>
            `,
  };
};
