// Declare the audio variable in a higher scope
var audio;

function respond(answer) {
    var responseContainer = document.getElementById('response');

    // Remove any previously added GIFs
    var previousGif = responseContainer.querySelector('img');
    if (previousGif) {
        previousGif.remove();
    }

    var gif = document.createElement('img');
    gif.style.width = '200px'; // Adjust the width as needed
    gif.style.height = 'auto'; // Maintain aspect ratio

    if (answer === 'Yes') {
        gif.src = 'happy.gif';
        gif.alt = 'Happy GIF';

        // Check if audio is not already defined to avoid multiple instances
        if (!audio) {
            audio = new Audio('happy-happy-happy-song.mp3');
            audio.play();
        }
    } else {
        gif.src = 'sad.gif';
        gif.alt = 'Sad GIF';
        if (audio) { // Check if the 'audio' variable is defined
            audio.pause(); // Pause the audio
            audio = null; // Set audio to null to allow restarting the song
        }
    }

    responseContainer.appendChild(gif);
}