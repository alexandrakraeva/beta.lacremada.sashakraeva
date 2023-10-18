




const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');
const background = document.getElementById('background');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        // Trigger audio playback in response to a user interaction
        audio.play();

        isPlaying = true;
        playButton.classList.remove('playing-off');
        // Set opacity to 1 to reveal the gradient background (fade in)
        background.style.opacity = '1';
    } else {
        audio.pause();
        isPlaying = false;
        playButton.classList.add('playing-off');
        // Set opacity to 0 to hide the gradient background (fade out)
        background.style.opacity = '0';
    }
});



