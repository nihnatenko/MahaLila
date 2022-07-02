const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const TOKEN = '5462719501:AAHRtM-c6ww1NZkTq0tct-KyLsNvUlX_STc';
console.log('Bot has been started...')
const ttt = [
    'Для этого тебе нужно будет пройти несколько уровней игры, в которой, я Верю, ты раскроешь: свои таланты, радость к Жизни, безграничную Любовь, Достаток и свою Божественную природу.',
    'Тебе необходимо собрать несколько артефактов, которые дают ключи к Жизни в Счастье и Любви. И первый ключ - это Самоценность. Почему важно начать именно с этого? Принятие и ценность себя - это фундамент на котором строятся все остальные качества, таланты, сидхи, Вера, Любовь и тд. Много лет я искал проекты, партнеров, ключи, инструменты, практики для того, чтобы сделать свою жизнь успешной и счастливой. Но каждый раз терпел разочарование. Так как без Самоценности почва очень зыбкая. И все опоры рушатся от волн сомнений и ростков заблуждений.,',
    'Самоценность - это ценность себя во всех своих проявлениях и действиях.. и даже без действий. Ценность себя просто так. Без условий и ограничений - по праву рождения.',
    'Когда я смог глубинно ощутить ценность своей жизни и себя. В один момент жизнь кардинально изменилась вокруг. Родные, близкие и незнакомые люди начали совсем по другому ко мне относится. Я получаю понимание, признание, принятие, любовь и уважение. И это происходит без всех тех усилий, которые раньше я прикладывал надрываясь. ',
    'Помогло мне в этом перепроживание момента своего рождения. Это один из основных сакральных моментов в жизни Души, который закладывает основы для всей последующей жизни.Ощутив это 1 раз - я смог закрепить это навсегда. Приглашаю пройти медитацию на перепроживание своего рождения прямо сейчас.',
    'Хочешь прикоснуться к проживанию живого опыта Жизни, наполненной признанием, Любовью и уважением окружающих?' +
    ' Напишыте ответ в чат (yes | no)'
];
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on('message', (msg) => {
    // console.log(msg);
    if (msg.text.toLowerCase() === 'yes') {
        bot.sendAudio(msg.chat.id, './0.mp3')
        setTimeout(() => {
            bot.sendMessage(msg.chat.id, 'А её ещё нет)))))');
        }, 2000)
    }else if (msg.text.toLowerCase() === 'no') {
        bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/3.webp'));
        setTimeout(() => {
            bot.sendMessage(msg.chat.id, 'Лутше бы тебе передумать! Мы уже все знаем о тебе ' + msg.from.first_name);
        }, 2000)
        setTimeout(() => {
            bot.sendMessage(msg.chat.id, ttt[5])
        }, 6000)
    } else if (msg.text.toLowerCase() !== 'yes' && msg.text.toLowerCase() !== 'no' && msg.text.toLowerCase() !== '/welcome' && msg.text.toLowerCase() !== '/game' && msg.text.toLowerCase() !== '/start' && msg.text.toLowerCase() !== '/help')  {
        bot.sendMessage(msg.chat.id, 'Нужно написать yes или no ' + msg.from.first_name);
    }
});
bot.onText(/\game/, msg => {
    bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/1.jpg'));
    bot.sendMessage(msg.chat.id, ttt[0])
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, ttt[1])
    }, 8000)
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, ttt[2])
    }, 36000)
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, ttt[3])
        bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/2.jpg'));

    }, 46000)
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, ttt[4])
    }, 66000)
    setTimeout(() => {
        bot.sendMessage(msg.chat.id, ttt[5])
    }, 80000)
})
bot.onText(/\welcome/, msg => {
    bot.sendMessage(msg.chat.id, 'Welcome, to MahaLila game ' + msg.from.first_name);
    bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/0.jpg'));
})
bot.onText(/\help/, msg => {
    bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/4.jpeg'));
})
