import { config_datas } from './config.mjs';

let links_sm = {
    instagram: config_datas.links.instagram,
    youtube: config_datas.links.youtube,
    discord: config_datas.links.discord,
}

var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        set_loading(data.count)
    },

    initFunctionInvoking(data) {
        set_loading(data.idx)
    },

    startDataFileEntries(data) {
        set_loading(data.count)
    },

    performMapLoadFunction(data) {
        set_loading(data.count)
    },
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});


//SOFLY CODES
let text_item = document.getElementById("loading_percentage");

let item = {
    ON: document.getElementById("tumbler_on"),
    OFF: document.getElementById("tumbler_off"),
}

let logo_fill = {
    FILL_LAYER: document.getElementById("over_fill"),
}
if(screen.width > 1490){
    logo_fill.FILL_LAYER.style.height = "150px" //FILL 650px / EMPTY 150px;
}else if(screen.width < 1490){
    logo_fill.FILL_LAYER.style.height = "100px" //FILL 430px / EMPTY 100px;
}
let items = document.getElementById("loading_counts").querySelectorAll("li");

function set_loading(percentag){
    let percentage = percentag + 23;
    let ifrk;
    let ml;
    let per_section = 100 / items.length;
    let fillment = percentage / per_section;

    if(screen.width > 1490){
        let per_percent = 100 / 500;
        let fillment_layer = percentage / per_percent;
        logo_fill.FILL_LAYER.style.height = 150 + fillment_layer;
        text_item.innerText = percentage + "%";
    }else if(screen.width < 1490){
        let per_percent = 100 / 330;
        let fillment_layer = percentage / per_percent;
        logo_fill.FILL_LAYER.style.height = 100 + fillment_layer;
        text_item.innerText = percentage + "%";
    }
    console.log(Number(fillment.toString().split(".")[0]))

    for(ml=0; ml < items.length; ml++){
        items[ml].id = "unactive"
    }
    for(ifrk=0; ifrk < Number(fillment.toString().split(".")[0]); ifrk++){

        items[ifrk].id = "active"
    }
}

function clear_loading(){
    for(i=0; i < items.length; i++){
        items[i].id = "unactive"
    }
}

let tumbler = document.getElementById("tumbler_point");
tumbler.style = "margin-top: 9px; background: radial-gradient(76.04% 77.75% at 50% 50%, #42FF6B 0%, #156727 100%); border: 1px solid #42FF6B; box-shadow: 0px 4px 22px rgba(66, 255, 107, 0.25);"
item.ON.style.color = "white"
tumbler.addEventListener("click", function (){
    if(this.style.marginTop == "9px"){
        item.ON.style.color = "#45C7FF"
        muteAudio()
        item.OFF.style.color = "white"
        this.style = "margin-top: 43px; background: radial-gradient(76.04% 77.75% at 50% 50%, #ff4242 0%, #671515 100%); border: 1px solid #ff4242; box-shadow: 0px 4px 22px rgba(255, 66, 66, 0.25);"
    }else{
        item.ON.style.color = "white"
        playAudio_replay()
        item.OFF.style.color = "#45C7FF"
        this.style = "margin-top: 9px; background: radial-gradient(76.04% 77.75% at 50% 50%, #42FF6B 0%, #156727 100%); border: 1px solid #42FF6B; box-shadow: 0px 4px 22px rgba(66, 255, 107, 0.25);"
    }
})

let social_media_links = {
    discord: document.getElementById("discord"),
    youtube: document.getElementById("youtube"),
    instagram: document.getElementById("instagram")
}


social_media_links.discord.addEventListener("click", function(){
    copyTextToClipboardded(links_sm.discord)
    window.invokeNative("openUrl", links_sm.discord);
})

social_media_links.youtube.addEventListener("click", function(){
    copyTextToClipboardded(links_sm.youtube)
    window.invokeNative("openUrl", links_sm.youtube);
})

social_media_links.instagram.addEventListener("click", function(){
    copyTextToClipboardded(links_sm.instagram)
    window.invokeNative("openUrl", links_sm.instagram);
})


function copyTextToClipboardded(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.innerText = text;
    document.getElementsByTagName("body")[0].appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

let iframe = document.getElementById("player").appendChild(document.createElement("iframe"));
let audio_link;

function getRandomInt(max) {
    let min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function initAudio(){
    audio_link = config_datas.audioFiles[getRandomInt(config_datas.audioFiles.length)];
    iframe.style = "width: 0px; height: 0px;"
    iframe.src = `https://www.youtube.com/embed/${audio_link}?autoplay=1`
    iframe.setAttribute("allow", "autoplay; encrypted-media;")
    iframe.id = "video1"
    playAudio()
}

function playAudio(){
    var symbol = document.getElementById("video1").src.indexOf("?") > -1 ? "&" : "?";
    //modify source to autoplay and start video
    document.getElementById("video1").src += symbol + "autoplay=1";
}

function playAudio_replay(){
    initAudio()
    iframe.src = `https://www.youtube.com/embed/${audio_link}?autoplay=1`
}

function muteAudio(){
    var symbol = document.getElementById("video1").src.indexOf("?") > -1 ? "&" : "?";
    //modify source to autoplay and start video
    document.getElementById("video1").src += symbol + "mute=1";
}

function initTexts(){
    document.getElementById("project_1").innerText = config_datas.texts.authors.project1;
    document.getElementById("name_1").innerText = config_datas.texts.authors.name1;
    document.getElementById("project_2").innerText = config_datas.texts.authors.project2;
    document.getElementById("name_2").innerText = config_datas.texts.authors.name2;
    document.getElementById("sound_name").innerText = config_datas.texts.sound;
    document.getElementById("QA_header").innerText = config_datas.texts.QA_BOX_HEADER;
    document.getElementById("QA_answer").innerHTML = config_datas.texts.QA_BOX_ANSWER;
    document.getElementById("instagram_name").innerText = config_datas.texts.instagram;
    document.getElementById("youtube_name").innerText = config_datas.texts.youtube;
    document.getElementById("discord_name").innerText = config_datas.texts.discord;
    document.getElementById("loading_is").innerText = config_datas.texts.loading;
    document.getElementById("your_game_is").innerText = config_datas.texts.yourgameis;
}

initTexts()
playAudio_replay()