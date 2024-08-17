document.addEventListener('DOMContentLoaded', function () {
    var turntable = document.getElementById('turntable'),
        turntableArm = document.getElementById('turntable-arm'),
        speaker = document.getElementById('speaker');

    var songs = [
        'valentine.mp3',
    ];

    var currentSongIndex = 0;

    var play = function () {
        if (songs.length > 0) {
            speaker.src = songs[currentSongIndex];
            speaker.play().then(() => {
                console.log('Playback started successfully');
            }).catch((error) => {
                console.error('Error starting playback:', error);
            });
        }
    };

    var stop = function () {
        speaker.pause();
        speaker.currentTime = 0;
    };

    var playNextSong = function () {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; // Loop back to the first song if desired
        }
        play();
    };

    turntable.addEventListener('click', function () {
        turntable.classList.toggle('started');
        if (turntable.classList.contains('started')) {
            play();
        } else {
            stop();
        }
    });

    speaker.addEventListener('ended', function () {
        playNextSong();
    });
});
