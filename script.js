const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');
const background = document.getElementById('background');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        // Trigger audio playback in response to a user interaction
        audio.play();

        isPlaying = true;
        background.style.background = 'linear-gradient(45deg, yellow, red)'; // Set gradient when playing
        playButton.classList.remove('playing-off');

        // Restore the animation class to play the gradient animation
        background.style.animation = 'gradient-animation 4s infinite alternate';
    } else {
        audio.pause();
        isPlaying = false;
        background.style.background = 'black'; // Set background to black when stopped
        playButton.classList.add('playing-off');

        // Remove the animation class to stop the gradient animation
        background.style.animation = 'none';
    }
});
