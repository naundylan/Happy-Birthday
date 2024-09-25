// game
function miniGame() {
    var bubbles = document.querySelectorAll(".bubble");
    var score = 0;
    var scoreDisplay = document.querySelector(".score");
    scoreDisplay.textContent = score;
    

    bubbles.forEach(item => {
        item.zIndex = 100;
        item.addEventListener("click", () => {
            scoreDisplay.textContent = score;
            item.classList.remove("anima");
            item.style.display = "none";
            if(score === 19) {
                // save score to sesssionstorage
                sessionStorage.setItem("score", score);
                score+= 0.1;
                alert("Chúc mừng cậu đã bước sang tuổi mới, bây giờ những vùng kí ức trong năm qua đã mở, hãy cùng nhìn lại với chúng tớ nhé!");
                document.body.style.overflow = "unset";
                var game = document.querySelector(".game");
                game.style.display = "none";
                window.addEventListener("scroll", scrollEventListener);
            }
            else {
                score = score + 0.5;
            }
        });
    })

    let myInterval = setInterval(function() {
        if(score >= 1709) {
            clearInterval(myInterval);
        }
        else {
            var random = Math.floor(Math.random() * 30);
            // console.log(random);
                    
            bubbles[random].classList.add('anima');
            bubbles[random].style.display = "block";
            bubbles[random].style.left = (random * 40) + "px";
            setTimeout(function() {
                bubbles[random].classList.remove('anima');
            }, 1798);
        }
    }, 1800);
}

function start() {
    var game = document.querySelector(".game");
    game.style.display = "none";
    document.body.style.overflow = 'hidden';
    var start = document.querySelector(".start");
    // var candyWorld = document.querySelector("#candyworld");
    var loopy = document.querySelector(".inner-loopy");
    var capy = document.querySelector(".inner-capy");
    var poster = document.querySelector(".poster");
    var posterMain = document.querySelector(".poster .inner-main");
    var close = document.querySelector(".close");

    // instruction
    var instruction = document.querySelector(".instruction");
    var instruc = document.querySelector(".instruction .inner-main");
    var img = document.querySelector(".instruction img");
    var list = document.querySelector(".instruction ul");
    var gift = document.querySelector(".gift");
    var instrucWrap = document.querySelector(".instruction .inner-wrap");


    setTimeout(function() {
        poster.classList.remove("disabled");
        poster.style.display = "flex";
        posterMain.classList.add("topFade");
        poster.classList.add("opacity");

        close.addEventListener("click", () => {
            poster.style.display = "none";
            start.classList.remove("disabled");
        });
    }, 1000);

    loopy.addEventListener("click", function() {
        loopy.classList.add("disabled");
        capy.classList.remove("disabled");
    });
    
    capy.addEventListener("click", function() {
        start.classList.add("disabled");
        instruction.classList.remove("disabled");
        instruction.style.display = "flex";
        instrucWrap.classList.add("zoomout");
    });

    instruc.addEventListener("mouseover", () => {
        img.classList.add("scale");
        list.classList.add("translate");
        img.classList.remove("scale-reverse");
        list.classList.remove("translate-reverse");
    });

    instruc.addEventListener('mouseout', () => {
        img.classList.remove('scale');
        list.classList.remove("translate");
        img.classList.add("scale-reverse");
        list.classList.add("translate-reverse");
    });
    

    gift.addEventListener("click", () => {
        instruction.style.display = "none";
        var part = document.getElementsByClassName("part");
        var value = window.scrollY;
        var curr = Math.trunc(value/3330);
        var tmp = 23-curr;
        if(value == 0) {
            part[tmp].classList.remove("disabled");
        }
        scroll();
    });
}

function scroll() {
    document.body.style.overflow = 'unset';
    var first = 99;

    window.addEventListener("scroll", scrollEventListener = function() {
        // variable
        var value = window.scrollY;
        var tmpbr = value/300000;        
        var score = sessionStorage.getItem("score");
        
        if((value >= 18600) && (value <= 19800) && (score != 19)) {
            document.body.style.overflow = "hidden";
            var game = document.querySelector(".game");
            game.style.display = "block";
            miniGame();
            window.removeEventListener("scroll", scrollEventListener);
        }

        // fog bgr
        var fog = document.getElementById("bgrfog");
        fog.style.transform = `scale(${1 + tmpbr})`;
        fog.style.bottom = 50 - value / 200 + "px"; 

        var tmpfog = value - 79000;
        if(value > 79000) {
            fog.style.opacity = 1 - tmpfog/11000;
        }

        // cake
        tmpCake = value - 80000;

        if(value >= 80000 && value <= 90000) {
            var cake = document.getElementById("cake");
            cake.style.display = "block";

            cake.style.transform = `scale(${1 + tmpCake/10000})`;
            cake.style.opacity = tmpCake/5000;
        }

        const scrollTop = document.documentElement.scrollTop;
        
        if (scrollTop >= 89300) {
            console.log("sau 2 s");
            
            let button = document.querySelector(".button");
            let popUp = document.querySelector(".popup");
            button.style.display = "flex";
            button.classList.add("opacity");
            button.addEventListener("click", () => {
                popUp.classList.remove("disabled");
            })
        }

        // backgr
        var candyWorld = document.getElementById("candyworld");
        candyWorld.style.transform = `scale(${1 + tmpbr})`;


        // mountain & cloud
        var part = document.getElementsByClassName("part");
        var tmpmou = value%3331;
        var num;

        if(tmpmou < 2500) {
            num = tmpmou;
        }
        
        if(value <= 80000) {
            var curr = Math.trunc(value/3330);
            var tmp = 23-curr;
            
            if(tmp < first) {
                part[tmp].classList.remove("disabled");
                first = tmp;
                part[tmp-1].classList.remove("disabled");
                if(tmp != 23) {
                    part[tmp+1].classList.add("disabled");
                }
            }
            if(tmp > first) {
                part[tmp].classList.remove("disabled");
                first = tmp;
                if(tmp != 23) {
                    part[tmp+1].classList.remove("disabled");
                }
                if(tmp != 1) {
                    part[tmp-2].classList.add("disabled");
                }
            }    
            
            // get moutains
            var mountainLeft = part[tmp].querySelector(".mountain-left");
            var mountainRight = part[tmp].querySelector(".mountain-right");
            // get clouds
            var fogLeft = part[tmp].querySelector(".fog-left");
            var fogRight = part[tmp].querySelector(".fog-right");

            //get memory
            var memory = document.querySelectorAll(".memory");
             
            
            if (tmp <= 10 && tmp >= 2) {
                memory[tmp - 2].style.transform = `scale(${1 + num/2000})`;
                memory[tmp - 2].style.opacity = 1 - num/9000;
            }
            

            // get quotes
            var quote = document.querySelectorAll(".quote");
            
            
            if (tmp <= 17 && tmp >= 12) {
                quote[tmp - 12].style.transform = `scale(${1 + num/2000})`;
                quote[tmp - 12].style.opacity = 1 - num/6000;
            }

            mountainLeft.style.left = 350 - num/1.3 + "px";
            mountainLeft.style.transform = `scale(${1 + num/500})`;
            mountainRight.style.right = 350 - num/1.3 + "px";
            mountainRight.style.transform = `scale(${1 + num/500})`;

            fogLeft.style.left = -500 - num*4 + "px";
            fogLeft.style.transform = `scale(${1 + num/500})`;
            fogRight.style.right = -500 - num*4 + "px";
            fogRight.style.transform = `scale(${1 + num/500})`;

            // z index
            part[tmp].style.zIndex = tmp;
        }

        

        // world
        var world = document.querySelector(".world");
        
    });
}

function init() {
    start();
}

window.onload = init();