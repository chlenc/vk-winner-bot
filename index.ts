import axios from 'axios'

require('dotenv').config();

const
    owner_id = 6904311,
    post_id = 392749,
    v = 5.52,
    timeout = 20,//60 * 4 + 50,
    access_token = process.env.TOKEN;

setInterval(async () => {
    const comment: any = await getLastComment();
    const dif = new Date().getTime() / 1000 - 10 - comment.date;
    if (dif > timeout) {
        const res = await addNewComment();
        console.log('comment was added', res);
        await playSong()
    } else {
        console.log(comment.text, dif);
    }

}, 1e3);


//api

interface IComment {
    id: number,
    from_id: number,
    date: number,
    text: string,
    attachments: any[]
}

async function getLastComment(): Promise<IComment> {
    const data = {count: 1, sort: 'desc', owner_id, post_id, v, access_token};
    const tail = Object.entries(data).map(([k, v]) => `${k}=${v}`).join('&');
    const {response: {items}} = ((await axios.get(`https://api.vk.com/method/wall.getComments?${tail}`)).data);
    return items.find(({text, attachments}) => text !== '' || attachments != null);
}


const comments = [
    'Ставлю на белое',
    'Ставлю на красное',
    'Надеюсь в три дня уложимся',
    'Продам гараж',
    'Фраза вообще может нести смысл?',
    'Вижу свет в конце туннеля',
    'Хотя далеко ещё',
    'Всё куплено',
    'Вышла новая серия Рика и Морти',
    'Начну цитатами постить',
]

async function addNewComment() {
    // const message = comments[random(comments.length)]
    // console.log(message)
    const message = (await axios.get('https://fish-text.ru/get?type=title')).data.text
    const data = {owner_id, post_id, v, access_token, message};
    const comment = (await axios.get(`https://api.vk.com/method/wall.createComment`, {params: data})).data
    await sleep(1e3);
    return comment
}

async function playSong() {
    var player = require('play-sound')();
    player.play('wakeUp.mp3', function (err) {
        if (err) throw err
    })
}

const random = (n) => Math.floor(1 + Math.random() * n) - 1;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

