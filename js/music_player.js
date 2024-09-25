const audioElement = document.getElementById('bgm');  
const playList = [  
    {timeRange: [6, 9], src: '../bgm/HOYO-MiX、陈致逸 - Reminiscence (Genshin Impact Main Theme Var.) 追忆.mp3'}, // 清晨的曲子  
    {timeRange: [9, 15], src: '../bgm/陈致逸、HOYO-MiX - Genshin Impact Main Theme 原神.mp3'}, // 上午的曲子      
    {timeRange: [15, 19], src: '../bgm/HOYO-MiX、陈致逸 - Twilight Serenity (Genshin Impact Main Theme Var.) 宁静的黄昏.mp3'}, // 下午的曲子      
    {timeRange: [19, 24], src: '../bgm/陈致逸、HOYO-MiX - Dream Aria (Genshin Impact Main Theme Var.) 梦之咏叹.mp3'},  // 夜晚的曲子  
    {timeRange: [0, 6], src: '../bgm/陈致逸、HOYO-MiX - Dream Aria (Genshin Impact Main Theme Var.) 梦之咏叹.mp3'}  // 凌晨的曲子  
];  
let currentIndex = -1;  

function getCurrentTimeRange() {    
    const now = new Date();    
    const hour = now.getHours();    
    return hour;    
}    

function playByTime() {    
    const currentHour = getCurrentTimeRange();    
    for (let i = 0; i < playList.length; i++) {    
        const { timeRange, src } = playList[i];    
        if ((timeRange[0] <= currentHour && currentHour < timeRange[1]) || (timeRange[0] <= 24 && timeRange[1] <= 6 && (currentHour < timeRange[1] || currentHour >= timeRange[0]))) {  
            audioElement.src = src;    
            audioElement.volume = 0.5;    
            audioElement.play();    
            currentIndex = i;  
            break;    
        }    
    }    
}    

function playNext() {    
    // currentIndex = (currentIndex + 1) % playList.length;    
    audioElement.src = playList[currentIndex].src;    
    audioElement.volume = 0.5;    
    audioElement.play();    
}    

audioElement.addEventListener('ended', playNext);    
playByTime(); 

document.getElementById('playerButton').addEventListener('click', function() {  
    audioElement.muted = true;  
    var modal = document.getElementById('videoModal');  
    var video = document.getElementById('modalVideo');  
    modal.style.display = 'block';  
    video.play();  
    document.getElementById('bgmon').style.display = 'none';  
    document.getElementById('bgmoff').style.display = 'block';     
});  

document.getElementById('header-logo').addEventListener('click', function() {  
    document.getElementById('videoModal2').style.display = 'block';  
    var modalVideo2 = document.getElementById('modalVideo2');  
    modalVideo2.play();  
    audioElement.muted = true;  
    document.getElementById('bgmon').style.display = 'none';  
    document.getElementById('bgmoff').style.display = 'block';  
});  

window.onclick = function(event) {  
    var modal = document.getElementById('videoModal');  
    var modal2 = document.getElementById('videoModal2');  
    var video = modal.querySelector('video');  
    var video2 = modal2.querySelector('video');  
    if (event.target === modal && !video.contains(event.target)) {  
        video.pause();  
        modal.style.display = 'none';  
        audioElement.muted = false;  
        document.getElementById('bgmoff').style.display = 'none';  
        document.getElementById('bgmon').style.display = 'block';  
    } else if (event.target === modal2 && !video2.contains(event.target)) {  
        video2.pause();  
        modal2.style.display = 'none';  
        audioElement.muted = false;  
        document.getElementById('bgmoff').style.display = 'none';  
        document.getElementById('bgmon').style.display = 'block';  
    }  
};  

const bgmoff = document.getElementById('bgmoff');  
const bgmon = document.getElementById('bgmon');  
bgmon.addEventListener('click', function() {  
    audioElement.muted = true;  
    bgmon.style.display = 'none';  
    bgmoff.style.display = 'block';  
});  
bgmoff.addEventListener('click', function() {  
    audioElement.muted = false;  
    bgmoff.style.display = 'none';  
    bgmon.style.display = 'block';  
});  