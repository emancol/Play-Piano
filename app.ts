const pianoKeys = document.querySelectorAll('.key') as NodeList;

const playSound = (newUrl: string): void => {
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const number: string | number = (i < 9) ? '0' + (i + 1) : i + 1;
    console.log(number)
    const newUrl: string = '24-keys-piano/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => {
        playSound(newUrl)
    })
})