export function correctAnswerConformation() {
    const rightAnswerButton = document.querySelector('.answer.right');

    rightAnswerButton.addEventListener('click', () => {
        if (rightAnswerButton.classList.contains('correct')) return;

        // Sound
        const sound = new Audio('./media/CorrectSoundEffect.mp3'); 
        sound.play();

        // CSS animation
        rightAnswerButton.classList.add('correct');
    });
}