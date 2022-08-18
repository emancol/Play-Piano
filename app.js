var pianoKeys = document.querySelectorAll('.key');
var playSound = function (newUrl) {
    new Audio(newUrl).play();
};
pianoKeys.forEach(function (pianoKey, i) {
    var number = (i < 9) ? '0' + (i + 1) : i + 1;
    console.log(number);
    var newUrl = '24-keys-piano/key' + number + '.mp3';
    pianoKey.addEventListener('click', function () {
        playSound(newUrl);
    });
});
