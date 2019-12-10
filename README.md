# vk-winner-bot

1) Создаем Standalone-приложение [https://vk.com/editapp?act=create](тут)

2) Переходим в настройки и берем ID приложения

3) Переходим по ссылке:
   
   https://oauth.vk.com/authorize?client_id=<APP_ID>&
   scope=photos,audio,video,docs,notes,pages,status,offers,questions
   ,wall,groups,messages,email,notifications,stats,ads,offline
   ,docs,pages,stats,notifications&response_type=token
   
   , где APP_ID - id нашего приложения
   
4) Разрешаем доступ

5) в URL будет access token
               
6) вставляем id и access token в .env файл

                  

