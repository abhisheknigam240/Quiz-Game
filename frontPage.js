let ply = document.getElementById('playButton');

document.getElementById('tape').style.animation = 'moveIn .7s ease';
document.getElementById('pencil').style.animation = 'moveAndRotatePencilIn .7s ease';
document.getElementById('star').style.animation = 'popBounceIn .7s ease';
document.getElementById('playButton').style.animation = 'liftbIn .7s ease';
document.getElementById('exitButton').style.animation = 'liftbIn .7s ease';
document.getElementById('backG2').style.animation = 'fadeIn .7s ease';
document.getElementById('tape2').style.animation = 'move2In .7s ease';
document.getElementById('title').style.animation = 'scaleIn .7s ease';
document.getElementById('titleDisc').style.animation = 'rightIn .7s ease';

document.getElementById('cloud').style.display = 'none';
document.getElementById('sun').style.display = 'none';
document.getElementById('direct').style.display = 'none';
document.getElementById('backB1').style.display = 'none';
document.getElementById('No1').style.display = 'none';
document.getElementById('No2').style.display = 'none';
document.getElementById('No3').style.display = 'none';
document.getElementById('No4').style.display = 'none';
document.getElementById('No5').style.display = 'none';
document.getElementById('No6').style.display = 'none';
document.getElementById('No7').style.display = 'none';
document.getElementById('No8').style.display = 'none';

document.getElementById('backB2').style.display = 'none';
document.getElementById('puzzle').style.display = 'none';
document.getElementById('no1tape').style.display = 'none';
document.getElementById('no1star').style.display = 'none';
document.getElementById('no1tape2').style.display = 'none';
document.getElementById('no1pencil').style.display = 'none';
document.getElementById('timerBg').style.display = 'none';
document.getElementById('qs').style.display = 'none';
document.getElementById('ab').style.display = 'none';
document.getElementById('bb').style.display = 'none';
document.getElementById('db').style.display = 'none';
document.getElementById('cb').style.display = 'none';
document.getElementById('option1').style.display = 'none';
document.getElementById('option2').style.display = 'none';
document.getElementById('option3').style.display = 'none';
document.getElementById('option4').style.display = 'none';
document.getElementById('time').style.display = 'none';
document.getElementById('submit').style.display = 'none';
document.getElementById('no1backg').style.display = 'none';
document.getElementById('one').style.display = 'none';

document.getElementById('tkcloud').style.display = 'none';
document.getElementById('thankbg').style.display = 'none';
document.getElementById('thyou').style.display = 'none';
document.getElementById('for').style.display = 'none';
document.getElementById('exit').style.display = 'none';
document.getElementById('pin').style.display = 'none';
document.getElementById('heart').style.display = 'none';
document.getElementById('flower').style.display = 'none';
document.getElementById('bird').style.display = 'none';

document.getElementById('welDbg').style.display = 'none';
document.getElementById('okbtn').style.display = 'none';
document.getElementById('welDp').style.display = 'none';
document.getElementById('wellD').style.display = 'none';

document.getElementById('oopp').style.display = 'none';
document.getElementById('oops').style.display = 'none';

document.getElementById('nooptp').style.display = 'none';
document.getElementById('nooptcld').style.display = 'none';
document.getElementById('nooptbtn').style.display = 'none';

document.getElementById('gbpaper').style.display = 'none';
document.getElementById('gbtext').style.display = 'none';
document.getElementById('gbbyes').style.display = 'none';
document.getElementById('gbbno').style.display = 'none';
document.getElementById('gbstar').style.display = 'none';
document.getElementById('gbflower').style.display = 'none';

document.getElementById('gwpaper').style.display = 'none';
document.getElementById('gwgreat').style.display = 'none';
document.getElementById('gwnextb').style.display = 'none';
document.getElementById('gwstar').style.display = 'none';
document.getElementById('gwpin').style.display = 'none';
document.getElementById('gwsmily').style.display = 'none';

document.getElementById('topara').style.display = 'none';
document.getElementById('tobackbg').style.display = 'none';
document.getElementById('totime').style.display = 'none';
document.getElementById('tobutton').style.display = 'none';

function frontPgIn() {
    setTimeout(() => {
        document.getElementById('tape').style.animation = 'moveIn .7s ease';
        document.getElementById('pencil').style.animation = 'moveAndRotatePencilIn .7s ease';
        document.getElementById('star').style.animation = 'popBounceIn .7s ease';
        document.getElementById('playButton').style.animation = 'liftbIn .7s ease';
        document.getElementById('exitButton').style.animation = 'liftbIn .7s ease';
        document.getElementById('backG2').style.animation = 'fadeIn .7s ease';
        document.getElementById('tape2').style.animation = 'move2In .7s ease';
        document.getElementById('title').style.animation = 'scaleIn .7s ease';
        document.getElementById('titleDisc').style.animation = 'rightIn .7s ease';
    }, 690);
    setTimeout(() => {
        document.getElementById('tape2').style.display = 'block';
        document.getElementById('pencil').style.display = 'block';
        document.getElementById('tape').style.display = 'block';
        document.getElementById('star').style.display = 'block';
        document.getElementById('playButton').style.display = 'block';
        document.getElementById('backG2').style.display = 'block';
        document.getElementById('exitButton').style.display = 'block';
        document.getElementById('title').style.display = 'block';
        document.getElementById('titleDisc').style.display = 'block';
    }, 690);
}
function frontPgOut() {
    document.getElementById('tape').style.animation = 'moveOut .7s ease';
    document.getElementById('pencil').style.animation = 'moveAndRotatePencilOut .7s ease';
    document.getElementById('star').style.animation = 'popBounceOut .7s ease';
    document.getElementById('playButton').style.animation = 'liftbOut .7s ease';
    document.getElementById('exitButton').style.animation = 'liftbOut .7s ease';
    document.getElementById('backG2').style.animation = 'fadeOut .7s ease';
    document.getElementById('tape2').style.animation = 'move2Out .7s ease';
    document.getElementById('title').style.animation = 'scaleOut .7s ease';
    document.getElementById('titleDisc').style.animation = 'rightOut .7s ease';

    setTimeout(() => {
        document.getElementById('tape2').style.display = 'none';
        document.getElementById('pencil').style.display = 'none';
        document.getElementById('tape').style.display = 'none';
        document.getElementById('star').style.display = 'none';
        document.getElementById('playButton').style.display = 'none';
        document.getElementById('backG2').style.display = 'none';
        document.getElementById('exitButton').style.display = 'none';
        document.getElementById('title').style.display = 'none';
        document.getElementById('titleDisc').style.display = 'none';
    }, 690);
}

function menuIn() {
    setTimeout(() => {
        document.getElementById('cloud').style.animation = 'moveRotateCloudIn .7s ease';
        document.getElementById('sun').style.animation = 'moveRotateSunIn .7s ease';
        document.getElementById('direct').style.animation = 'popBounceIn .7s ease';
        document.getElementById('backB1').style.animation = 'bulgeIn .7s ease';
        document.getElementById('No1').style.animation = 'moveRotateOptIn .7s ease';
        document.getElementById('No2').style.animation = 'moveRotateOptIn .7s ease';
        document.getElementById('No3').style.animation = 'moveRotateOptIn .7s ease';
        document.getElementById('No4').style.animation = 'moveRotateOptIn .7s ease';
        document.getElementById('No5').style.animation = 'moveRotateOptNextIn .7s ease';
        document.getElementById('No6').style.animation = 'moveRotateOptNextIn .7s ease';
        document.getElementById('No7').style.animation = 'moveRotateOptNextIn .7s ease';
        document.getElementById('No8').style.animation = 'moveRotateOptNextIn .7s ease';
    }, 690);
    setTimeout(() => {
        document.getElementById('cloud').style.display = 'block';
        document.getElementById('sun').style.display = 'block';
        document.getElementById('direct').style.display = 'block';
        document.getElementById('backB1').style.display = 'block';
        document.getElementById('No1').style.display = 'block';
        document.getElementById('No2').style.display = 'block';
        document.getElementById('No3').style.display = 'block';
        document.getElementById('No4').style.display = 'block';
        document.getElementById('No5').style.display = 'block';
        document.getElementById('No6').style.display = 'block';
        document.getElementById('No7').style.display = 'block';
        document.getElementById('No8').style.display = 'block';
    }, 690);
}


ply.addEventListener('click', () => {
    frontPgOut();
    menuIn();
});

// content of menu page ======================================================================================================

function out() {
    document.getElementById('cloud').style.animation = 'moveRotateCloudOut .7s ease';
    document.getElementById('sun').style.animation = 'moveRotateSunOut .7s ease';
    document.getElementById('direct').style.animation = 'popBounceOut .7s ease';
    document.getElementById('backB1').style.animation = 'bulgeOut .7s ease';
    document.getElementById('No1').style.animation = 'moveRotateOptOut .7s ease';
    document.getElementById('No2').style.animation = 'moveRotateOptOut .7s ease';
    document.getElementById('No3').style.animation = 'moveRotateOptOut .7s ease';
    document.getElementById('No4').style.animation = 'moveRotateOptOut .7s ease';
    document.getElementById('No5').style.animation = 'moveRotateOptNextOut .7s ease';
    document.getElementById('No6').style.animation = 'moveRotateOptNextOut .7s ease';
    document.getElementById('No7').style.animation = 'moveRotateOptNextOut .7s ease';
    document.getElementById('No8').style.animation = 'moveRotateOptNextOut .7s ease';
    setTimeout(() => {
        document.getElementById('cloud').style.display = 'none';
        document.getElementById('sun').style.display = 'none';
        document.getElementById('direct').style.display = 'none';
        document.getElementById('backB1').style.display = 'none';
        document.getElementById('No1').style.display = 'none';
        document.getElementById('No2').style.display = 'none';
        document.getElementById('No3').style.display = 'none';
        document.getElementById('No4').style.display = 'none';
        document.getElementById('No5').style.display = 'none';
        document.getElementById('No6').style.display = 'none';
        document.getElementById('No7').style.display = 'none';
        document.getElementById('No8').style.display = 'none';
    }, 690);
}

function inno1() {
    setTimeout(() => {
        document.getElementById('backB2').style.animation = 'bulgeIn .7s ease';
        document.getElementById('puzzle').style.animation = 'puzzleIn .7s ease';
        document.getElementById('no1tape').style.animation = 'tapeIn .7s ease';
        document.getElementById('no1star').style.animation = 'starIn .7s ease';
        document.getElementById('no1tape2').style.animation = 'tape2In .7s ease';
        document.getElementById('no1pencil').style.animation = 'pencilIn .7s ease';
        document.getElementById('timerBg').style.animation = 'timeIn .7s ease';
        document.getElementById('countdown').style.animation = 'timeIn .7s ease';
        document.getElementById('qs').style.animation = 'fadeIn .7s ease';
        document.getElementById('ab').style.animation = 'fadeIn .7s ease';
        document.getElementById('bb').style.animation = 'fadeIn .7s ease';
        document.getElementById('db').style.animation = 'fadeIn .7s ease';
        document.getElementById('cb').style.animation = 'fadeIn .7s ease';
        document.getElementById('option1').style.animation = 'fadeIn .7s ease';
        document.getElementById('option2').style.animation = 'fadeIn .7s ease';
        document.getElementById('option3').style.animation = 'fadeIn .7s ease';
        document.getElementById('option4').style.animation = 'fadeIn .7s ease';
        document.getElementById('time').style.animation = 'timeIn .7s ease';
        document.getElementById('submit').style.animation = 'submitIn .7s ease';
        document.getElementById('no1backg').style.animation = 'fadeIn .7s ease';
        document.getElementById('one').style.animation = 'fadeIn .7s ease';
    }, 690);
    setTimeout(() => {
        document.getElementById('backB2').style.display = 'block';
        document.getElementById('puzzle').style.display = 'block';
        document.getElementById('no1tape').style.display = 'block';
        document.getElementById('no1star').style.display = 'block';
        document.getElementById('no1tape2').style.display = 'block';
        document.getElementById('no1pencil').style.display = 'block';
        document.getElementById('timerBg').style.display = 'block';
        document.getElementById('countdown').style.display = 'block';
        document.getElementById('qs').style.display = 'block';
        document.getElementById('ab').style.display = 'block';
        document.getElementById('bb').style.display = 'block';
        document.getElementById('db').style.display = 'block';
        document.getElementById('cb').style.display = 'block';
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'block';
        document.getElementById('option3').style.display = 'block';
        document.getElementById('option4').style.display = 'block';
        document.getElementById('time').style.display = 'block';
        document.getElementById('submit').style.display = 'block';
        document.getElementById('no1backg').style.display = 'block';
        document.getElementById('one').style.display = 'block';
    }, 690);
};

function outno1() {
    document.getElementById('backB2').style.animation = 'bulgeOut .7s ease';
    document.getElementById('puzzle').style.animation = 'puzzleOut .7s ease';
    document.getElementById('no1tape').style.animation = 'tapeOut .7s ease';
    document.getElementById('no1star').style.animation = 'starOut .7s ease';
    document.getElementById('no1tape2').style.animation = 'tape2Out .7s ease';
    document.getElementById('no1pencil').style.animation = 'pencilOut .7s ease';
    document.getElementById('timerBg').style.animation = 'timeOut .7s ease';
    document.getElementById('countdown').style.animation = 'timeOut .7s ease';
    document.getElementById('qs').style.animation = 'fadeOut .7s ease';
    document.getElementById('ab').style.animation = 'fadeOut .7s ease';
    document.getElementById('bb').style.animation = 'fadeOut .7s ease';
    document.getElementById('db').style.animation = 'fadeOut .7s ease';
    document.getElementById('cb').style.animation = 'fadeOut .7s ease';
    document.getElementById('option1').style.animation = 'fadeOut .7s ease';
    document.getElementById('option2').style.animation = 'fadeOut .7s ease';
    document.getElementById('option3').style.animation = 'fadeOut .7s ease';
    document.getElementById('option4').style.animation = 'fadeOut .7s ease';
    document.getElementById('time').style.animation = 'timeOut .7s ease';
    document.getElementById('submit').style.animation = 'submitOut .7s ease';
    document.getElementById('no1backg').style.animation = 'fadeOut .7s ease';
    document.getElementById('one').style.animation = 'fadeOut .7s ease';
    setTimeout(() => {
        document.getElementById('backB2').style.display = 'none';
        document.getElementById('puzzle').style.display = 'none';
        document.getElementById('no1tape').style.display = 'none';
        document.getElementById('no1star').style.display = 'none';
        document.getElementById('no1tape2').style.display = 'none';
        document.getElementById('no1pencil').style.display = 'none';
        document.getElementById('timerBg').style.display = 'none';
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('qs').style.display = 'none';
        document.getElementById('ab').style.display = 'none';
        document.getElementById('bb').style.display = 'none';
        document.getElementById('db').style.display = 'none';
        document.getElementById('cb').style.display = 'none';
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('option4').style.display = 'none';
        document.getElementById('time').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
        document.getElementById('no1backg').style.display = 'none';
        document.getElementById('one').style.display = 'none';
    }, 690);
};

let no1 = document.getElementById('No1');
let no2 = document.getElementById('No2');
let no3 = document.getElementById('No3');
let no4 = document.getElementById('No4');
let no5 = document.getElementById('No5');
let no6 = document.getElementById('No6');
let no7 = document.getElementById('No7');
let no8 = document.getElementById('No8');
let back = document.getElementById('backB1');

no1.addEventListener("click", () => {
    out();
    document.getElementById('No1').style.animation = 'choose .7s ease';
    inno1();
    startCountdown();
})
no2.addEventListener("click", () => {
    out();
    document.getElementById('No2').style.animation = 'choose .7s ease';
})
no3.addEventListener("click", () => {
    out();
    document.getElementById('No3').style.animation = 'choose .7s ease';
})
no4.addEventListener("click", () => {
    out();
    document.getElementById('No4').style.animation = 'choose .7s ease';
})
no5.addEventListener("click", () => {
    out();
    document.getElementById('No5').style.animation = 'choose .7s ease';
})
no6.addEventListener("click", () => {
    out();
    document.getElementById('No6').style.animation = 'choose .7s ease';
})
no7.addEventListener("click", () => {
    out();
    document.getElementById('No7').style.animation = 'choose .7s ease';
})
no8.addEventListener("click", () => {
    out();
    document.getElementById('No8').style.animation = 'choose .7s ease';
})
back.addEventListener("click", () => {
    out();
    frontPgIn();
})


//content of Menu Page ===========================================================================================================
//content of thank for playing ===================================================================================================


function thankPgIn() {
    setTimeout(() => {
        document.getElementById('tkcloud').style.display = 'block';
        document.getElementById('thankbg').style.display = 'block';
        document.getElementById('thyou').style.display = 'block';
        document.getElementById('for').style.display = 'block';
        document.getElementById('exit').style.display = 'block';
        document.getElementById('pin').style.display = 'block';
        document.getElementById('heart').style.display = 'block';
        document.getElementById('flower').style.display = 'block';
        document.getElementById('bird').style.display = 'block';
    }, 690);
}

let frExit = document.getElementById('exitButton');

frExit.addEventListener('click', () => {
    frontPgOut();
    thankPgIn();
});

let exitgame = document.getElementById('exit');

exitgame.addEventListener('click', () => {

});


function welldoneIn() {
    setTimeout(() => {
        document.getElementById('welDbg').style.animation = 'bgIn  .7s ease'
        document.getElementById('okbtn').style.animation = 'okIn  .7s ease'
        document.getElementById('welDp').style.animation = 'textIn  .7s  ease'
        document.getElementById('wellD').style.animation = 'picIn  .7s ease'
    }, 690);
    setTimeout(() => {
        document.getElementById('welDbg').style.display = 'block';
        document.getElementById('okbtn').style.display = 'block';
        document.getElementById('welDp').style.display = 'block';
        document.getElementById('wellD').style.display = 'block';
    }, 690);
}

function welldoneOut() {
    document.getElementById('welDbg').style.animation = 'bgOut  .7s ease'
    document.getElementById('okbtn').style.animation = 'okOut  .7s ease'
    document.getElementById('welDp').style.animation = 'textOut  .7s  ease'
    document.getElementById('wellD').style.animation = 'picOut  .7s ease'
    setTimeout(() => {
        document.getElementById('welDbg').style.display = 'none';
        document.getElementById('okbtn').style.display = 'none';
        document.getElementById('welDp').style.display = 'none';
        document.getElementById('wellD').style.display = 'none';
    }, 690);
}

function oopsIn() {
    setTimeout(() => {
        document.getElementById('welDbg').style.animation = 'bgIn  .7s ease'
        document.getElementById('okbtn').style.animation = 'okIn  .7s ease'
        document.getElementById('oopp').style.animation = 'textIn  .7s ease'
        document.getElementById('oops').style.animation = 'picIn  .7s ease'
    }, 690);
    setTimeout(() => {
        document.getElementById('welDbg').style.display = 'block';
        document.getElementById('okbtn').style.display = 'block';
        document.getElementById('oopp').style.display = 'block';
        document.getElementById('oops').style.display = 'block';
    }, 690);
}

function oopsOut() {
    document.getElementById('welDbg').style.animation = 'bgOut  .7s ease'
    document.getElementById('okbtn').style.animation = 'okOut  .7s ease'
    document.getElementById('oopp').style.animation = 'textOut  .7s ease'
    document.getElementById('oops').style.animation = 'picOut  .7s ease'
    setTimeout(() => {
        document.getElementById('welDbg').style.display = 'none';
        document.getElementById('okbtn').style.display = 'none';
        document.getElementById('oopp').style.display = 'none';
        document.getElementById('oops').style.display = 'none';
    }, 690);
}

function nooptOut() {
    document.getElementById('welDbg').style.animation = 'bgOut  .7s ease'
    document.getElementById('nooptbtn').style.animation = 'okOut  .7s ease'
    document.getElementById('nooptp').style.animation = 'textOut  .7s ease'
    document.getElementById('nooptcld').style.animation = 'picOut  .7s ease'
    setTimeout(() => {
        document.getElementById('welDbg').style.display = 'none';
        document.getElementById('nooptbtn').style.display = 'none';
        document.getElementById('nooptp').style.display = 'none';
        document.getElementById('nooptcld').style.display = 'none';
    }, 690);
}

function nooptIn() {
    setTimeout(() => {
        document.getElementById('welDbg').style.animation = 'bgIn  .7s ease'
        document.getElementById('nooptbtn').style.animation = 'okIn  .7s ease'
        document.getElementById('nooptp').style.animation = 'textIn  .7s ease'
        document.getElementById('nooptcld').style.animation = 'picIn  .7s ease'
    }, 690);
    setTimeout(() => {
        document.getElementById('welDbg').style.display = 'block';
        document.getElementById('nooptbtn').style.display = 'block';
        document.getElementById('nooptp').style.display = 'block';
        document.getElementById('nooptcld').style.display = 'block';
    }, 690);
}

function timeoutIn() {
    setTimeout(() => {
        document.getElementById('tobackbg').style.animation = 'bgIn  .7s ease'
        document.getElementById('tobutton').style.animation = 'okIn  .7s ease'
        document.getElementById('topara').style.animation = 'textIn  .7s ease'
        document.getElementById('totime').style.animation = 'picIn  .7s ease'
    }, 690);
    setTimeout(() => {
        document.getElementById('topara').style.display = 'block';
        document.getElementById('tobackbg').style.display = 'block';
        document.getElementById('totime').style.display = 'block';
        document.getElementById('tobutton').style.display = 'block';
    }, 690);
}

function timeoutOut() {
    document.getElementById('tobackbg').style.animation = 'bgOut  .7s ease'
    document.getElementById('tobutton').style.animation = 'okOut  .7s ease'
    document.getElementById('topara').style.animation = 'textOut  .7s ease'
    document.getElementById('totime').style.animation = 'picOut  .7s ease'
    setTimeout(() => {
        document.getElementById('topara').style.display = 'none';
        document.getElementById('tobackbg').style.display = 'none';
        document.getElementById('totime').style.display = 'none';
        document.getElementById('tobutton').style.display = 'none';
    }, 690);
}

function getSelectedRadio() {
    const radioButtons = document.querySelectorAll('input[name="ans"]');
    let selectedValue;

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break; // Once we find the checked one, we can stop looping
        }
    }

    return selectedValue; // Returns the 'value' of the selected radio button (or undefined if none are selected)
}

function uncheckRB() {
    const radioButtons = document.querySelectorAll('input[name="ans"]');
    radioButtons.forEach(radioButton => {
        radioButton.checked = false;
    });
}

document.getElementById('submit').addEventListener('click', function () {
    const selected = getSelectedRadio();
    if (selected === 'b') {
        console.log(`You selected: ${selected}`);
        welldoneIn();
        outno1();
    } else if (selected === 'a' || selected === 'c' || selected === 'd') {
        console.log(`You selected: ${selected}`);
        oopsIn();
        outno1();
    } else {
        console.log("no option selected");
        outno1();
        nooptIn();
    }
    stopCountdown();
});

function gobackIn() {
    setTimeout(() => {
        document.getElementById('gbpaper').style.animation = 'gbpageIn .7s ease';
        document.getElementById('gbtext').style.animation = 'gbtextIn .7s ease';
        document.getElementById('gbbyes').style.animation = 'gbbuttonIn .7s ease';
        document.getElementById('gbbno').style.animation = 'gbbuttonIn .7s ease';
        document.getElementById('gbstar').style.animation = 'gbstarIn .7s ease';
        document.getElementById('gbflower').style.animation = 'gbflowerIn .7s ease';
    }, 690);
    setTimeout(() => {
        document.getElementById('gbpaper').style.display = 'block';
        document.getElementById('gbtext').style.display = 'block';
        document.getElementById('gbbyes').style.display = 'block';
        document.getElementById('gbbno').style.display = 'block';
        document.getElementById('gbstar').style.display = 'block';
        document.getElementById('gbflower').style.display = 'block';
    }, 690);
}

function gobackOut() {
    document.getElementById('gbpaper').style.animation = 'gbpageOut .7s ease';
    document.getElementById('gbtext').style.animation = 'gbtextOut .7s ease';
    document.getElementById('gbbyes').style.animation = 'gbbuttonOut .7s ease';
    document.getElementById('gbbno').style.animation = 'gbbuttonOut .7s ease';
    document.getElementById('gbstar').style.animation = 'gbstarOut .7s ease';
    document.getElementById('gbflower').style.animation = 'gbflowerOut .7s ease';
    setTimeout(() => {
        document.getElementById('gbpaper').style.display = 'none';
        document.getElementById('gbtext').style.display = 'none';
        document.getElementById('gbbyes').style.display = 'none';
        document.getElementById('gbbno').style.display = 'none';
        document.getElementById('gbstar').style.display = 'none';
        document.getElementById('gbflower').style.display = 'none';
    }, 690);
}

document.getElementById('backB2').addEventListener('click', () => {
    outno1();
    gobackIn();
})

document.getElementById('gbbyes').addEventListener('click', () => {
    frontPgIn();
    gobackOut();
    resetCountdown();
})

document.getElementById('gbbno').addEventListener('click', () => {
    inno1();
    gobackOut();
})

document.getElementById('nooptbtn').addEventListener('click', () => {
    inno1();
    nooptOut();
    startCountdown();
})

document.getElementById('okbtn').addEventListener('click', () => {
    welldoneOut()
    oopsOut()
    greatWrkIn();
})

document.getElementById('tobutton').addEventListener('click', () => {
    timeoutOut()
    greatWrkIn();
})

document.getElementById('gwnextb').addEventListener('click', () => {
    menuIn()
    greatWrkOut();
    uncheckRB();
    resetCountdown();
})

function greatWrkIn() {
    setTimeout(() => {
        document.getElementById('gwpaper').style.animation = 'gwpageIn .7s ease';
        document.getElementById('gwgreat').style.animation = 'gwgreatIn .7s ease';
        document.getElementById('gwnextb').style.animation = 'gwpopIn .7s ease';
        document.getElementById('gwstar').style.animation = 'gwstarIn .7s ease';
        document.getElementById('gwpin').style.animation = 'gwpinIn .7s ease';
        document.getElementById('gwsmily').style.animation = 'gwsmilyIn .7s ease';
    }, 690);
    setTimeout(() => {
        document.getElementById('gwpaper').style.display = 'block';
        document.getElementById('gwgreat').style.display = 'block';
        document.getElementById('gwnextb').style.display = 'block';
        document.getElementById('gwstar').style.display = 'block';
        document.getElementById('gwpin').style.display = 'block';
        document.getElementById('gwsmily').style.display = 'block';
    }, 690);
}

function greatWrkOut() {
    document.getElementById('gwpaper').style.animation = 'gwpageOut .7s ease';
    document.getElementById('gwgreat').style.animation = 'gwgreatOut .7s ease';
    document.getElementById('gwnextb').style.animation = 'gwpopOut .7s ease';
    document.getElementById('gwstar').style.animation = 'gwstarOut .7s ease';
    document.getElementById('gwpin').style.animation = 'gwpinOut .7s ease';
    document.getElementById('gwsmily').style.animation = 'gwsmilyOut .7s ease';
    setTimeout(() => {
        document.getElementById('gwpaper').style.display = 'none';
        document.getElementById('gwgreat').style.display = 'none';
        document.getElementById('gwnextb').style.display = 'none';
        document.getElementById('gwstar').style.display = 'none';
        document.getElementById('gwpin').style.display = 'none';
        document.getElementById('gwsmily').style.display = 'none';
    }, 690);
}

// Set the initial countdown time in seconds
let timeLeft = 10;
let countdownInterval;

// Function to update the countdown timer
function startCountdown() {
    function updateCountdown() {
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            setTimeout(() => {
                countdownEl.textContent = `Time Left: ${timeLeft}s`;
            }, 690)
        }

        if (timeLeft <= 0) {
            // Time's up! Do something here, like showing a message or disabling the quiz
            clearInterval(countdownInterval);
            if (countdownEl) {
                // countdownEl.textContent = "Time's up!";
                timeoutIn();
                outno1();
            }
            // You can add more logic here to handle what happens when the time runs out
        } else {
            timeLeft--;
        }
    }

    // Call updateCountdown() initially to display the initial time
    updateCountdown();
    // Update the countdown every 1 second (1000 milliseconds)
    countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    timeLeft = 10; // Reset the time to the initial value
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        countdownEl.textContent = `Time Left: ${timeLeft}s`; // Update the display
    }
}

let backno1 = document.getElementById('backB2');

backno1.addEventListener('click', () => {
    stopCountdown();
})

// let countdown = document.getElementById('countdown');
// let timeleft;

// function startCount() {
//     countdown.style.display = 'block';
//     timeleft = 10;
//     if(countdown) {
//         while(timeleft>0) {
//             setTimeout(() => {
//                 countdown = timeleft--;
//             }, 690);
//         }
//     }
// }

