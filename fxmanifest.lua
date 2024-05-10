game 'common'
version '1.0.0'
fx_version 'cerulean'
author 'BeansFL#2022'
description 'https://discord.gg/FK82XqEMnN'
lua54 'yes'

client_script 'client/main.lua'
server_script 'server/main.lua'
loadscreen 'index.html' 
loadscreen_cursor 'yes'


files {
    "index.html",
    "assets/css/*",
    "assets/fonts/Akrobat/*",
    "assets/fonts/Gilroy/*",
    "assets/fonts/MonumentExtended/*",
    "assets/images/*",
    "assets/images/icons/*",
    "assets/images/background/*",
    "assets/js/*",
    "listener.js",
} 
dependency '/assetpacks'