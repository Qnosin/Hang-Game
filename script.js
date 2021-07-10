const answers = ['Germany', 'Poland', 'Spain', 'Brazil', 'Russia']
let length = 0
let places = ''
let lives = 10;
document.querySelector('.lives').textContent = `your lives : ${lives}`
const RandomNum = Math.floor(Math.random() * 5)
for (let i of answers) {
    length = answers[RandomNum].length
}
for (let x = 0; x < length; x++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "_";
    const placeForPlacingLetters = document.querySelector('.answer')
    placeForPlacingLetters.append(paragraph);
}


const allLetters = document.querySelectorAll('.letter');
allLetters.forEach(n => {
    n.addEventListener('click', () => {
        console.log(n.textContent)
        const Template = answers[RandomNum].toUpperCase()
        if (Template.includes(n.textContent)) {
            const letterPlace = Template.indexOf(n.textContent)
            for (let x = 0; x <= length; x++) {
                if (x === letterPlace) {
                    const all = document.querySelector('.answer').children;
                    for (let i in all) {
                        if (x == i) {
                            all[i].textContent = n.textContent;
                        }
                    }

                }

            }
        } else {
            document.querySelector('.lives').textContent = `your lives : ${lives--}`
            if (lives <= 0) {
                document.querySelector('.lives').textContent = `Game Over`;
                document.querySelector('.answer').textContent = `↺`;
                document.querySelector('.answer').addEventListener('click', () => {
                    window.location.reload();
                })
            }
        }
    })
})