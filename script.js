const date = new Date().getTime();
localStorage.getItem('firstTime') == null ? localStorage.setItem('firstTime', 'true') : localStorage.getItem('firstTime');
localStorage.getItem('showPopup') == null ? localStorage.setItem('showPopup', date.toString()) : localStorage.getItem('showPopup');
localStorage.getItem('messagePortalRhLogin') == null ? localStorage.setItem('messagePortalRhLogin', "first") : localStorage.getItem('messagePortalRhLogin');

const firstTime = localStorage.getItem('firstTime');
const showPopup = localStorage.getItem('showPopup');

if(firstTime == 'true' && (date - parseInt(showPopup)) > 2629800000) {
    document.getElementById('popup').style.display = 'flex';
	let botao = document.getElementById('botao');
	botao.addEventListener("click", function() {
        document.getElementById('popup').style.display = 'none';
        localStorage.setItem('showPopup', date.toString());
        localStorage.setItem('firstTime', 'false');
    })
} else {
    if((date - parseInt(showPopup)) > 7889400000){
        document.getElementById('popup').style.display = 'flex';
        let botao = document.getElementById('botao');
        botao.addEventListener("click", function() {
        document.getElementById('popup').style.display = 'none';
        localStorage.setItem('showPopup', date.toString());
        localStorage.setItem('firstTime', 'false');
    })
    }
}

