require('dotenv').config();
const scope = ['wall','messages','offline'];

const url = `https://oauth.vk.com/authorize?client_id=${process.env.CLIENT}&scope=notify,photos,friends,audio,video,notes,pages,docs,status,questions,offers,wall,groups,messages,notifications,stats,ads,offline&redirect_uri=http://api.vk.com/blank.html&display=page&response_type=token`
console.log(url)
