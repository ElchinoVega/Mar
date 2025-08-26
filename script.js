function verifyPerson() {
    console.log('🔍 Verificando persona...');
    
    const verificationInput = document.getElementById('verificationInput');
    const inputName = verificationInput.value.trim().toLowerCase();
    
    console.log('📝 Nombre ingresado:', inputName);
    
    if (!inputName) {
        alert('Por favor, escribe tu nombre 💕');
        return;
    }
    
    if (inputName === 'marina') {
        // ¡Es Marina! Mostrar mensaje especial
        console.log('✅ ¡Es Marina!');
        showSpecialMessage();
    } else {
        // No es Marina, mostrar mensaje de acceso denegado
        console.log('❌ No es Marina, acceso denegado');
        showAccessDenied();
    }
}

function showSpecialMessage() {
    const verificationSection = document.getElementById('verificationSection');
    const animationSection = document.getElementById('animationSection');
    
    verificationSection.style.display = 'none';
    animationSection.style.display = 'block';
    
    // Crear corazón especial para Marina
    createSpecialHeartForMarina();
    resetAnimations();
    
    // Mostrar mensaje amoroso especial
    setTimeout(() => {
        showSpecialLoveMessage();
    }, 2000);
}

function createSpecialHeartForMarina() {
    const heartText = document.getElementById('heartText');
    heartText.innerHTML = '';
    
    // Crear elemento de imagen
    const photoContainer = document.createElement('div');
    photoContainer.className = 'photo-container';
    photoContainer.innerHTML = `
        <div class="photo-wrapper special-photo">
            <img src="images/marina.jpeg" alt="Marina" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" onerror="this.style.display='none';">
            <div class="photo-placeholder" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; line-height: 1.2;">
                💖<br><strong style="font-size: 2em;">♥</strong><br>💖
            </div>
        </div>
        <div class="photo-frame">💕</div>
    `;
    
    // Agregar la foto primero
    heartText.appendChild(photoContainer);
    
    // Corazón especial para Marina
    const marinaLines = [
        '',
        '                    ✨ MARINA ✨',
        '',
        '´´´´¶¶¶¶¶¶´´´´´´¶¶¶¶¶¶',
        '´´¶¶¶¶¶¶¶¶¶¶´´¶¶¶¶¶¶¶¶¶¶',
        '´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´¶¶¶¶',
        '¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´¶¶¶¶',
        '¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´¶¶¶¶¶',
        '¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ ´¶¶¶¶¶´',
        '´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶',
        '´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶',
        '´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶',
        '´´´´´´´´´¶¶¶¶¶¶¶¶',
        '´´´´´´´´´´´¶¶¶¶',
        '',
        '           💕💕',
        ''
    ];
    
    marinaLines.forEach((line, lineIndex) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'heart-line';
        lineDiv.textContent = line;
        lineDiv.style.animationDelay = (lineIndex * 0.1) + 's';
        
        heartText.appendChild(lineDiv);
    });
}

// Array global de mensajes para Marina
const loveMessages = [
    "A veces pienso que lo más bonito de conocer a alguien no es apresurarse, sino ir descubriendo poco a poco las pequeñas cosas que hacen única a esa persona. Contigo siento eso, que cada día hay algo nuevo que aprender y apreciar.",
    
    "Me gusta la idea de que el amor no se trata de poseer ni de limitar, sino de acompañar. Y contigo, lo que más deseo es acompañar tu camino, respetando tu espacio y valorando tu libertad.",
    
    "Siento que la paciencia es la base de todo lo que realmente vale la pena. No quiero correr ni adelantarnos a nada, me basta con compartir el presente contigo y dejar que las cosas fluyan a su propio ritmo.",
    
    "Hay algo especial en verte ser tú misma, auténtica y libre. Eso me inspira a mí también a ser genuino y transparente, sin máscaras ni apariencias.",
    
    "Quiero que sepas que tu importancia en mi vida no depende del tiempo que llevemos conociéndonos, sino de lo que transmites y despiertas en mí. Y eso ya es bastante significativo.",
    
    "Creo que el amor verdadero empieza con la capacidad de escuchar y entender, más que con grandes palabras. Y yo quiero escucharte siempre, incluso en lo que no dices, en los silencios que también hablan.",
    
    "Aprender a conocerte es como leer un libro que no quiero terminar nunca. Cada página me sorprende, y prefiero avanzar con calma para disfrutar de cada detalle.",
    
    "Admiro la fuerza que hay en tu libertad, y me hace feliz la idea de que, si alguna vez llego a formar parte de tu mundo, sea desde el respeto y no desde la imposición.",
    
    "No tengo prisa, porque sé que lo que se construye despacio suele tener raíces más profundas. Y contigo quiero construir algo así, aunque todavía estemos en los primeros pasos.",
    
    "Lo que más me importa ahora es que sepas que valoro quién eres, sin condiciones, sin expectativas que te aten. Solo con el deseo de caminar a tu lado mientras me lo permitas."
];

let currentMessageIndex = 0;

// Variables para el reproductor de música
let currentSongIndex = 0;
let isPlaying = false;
let songs = [
    {
        title: "Tu Canción Favorita",
        artist: "Artista Especial",
        file: "music/cancion1.mp3"
    },
    {
        title: "Nuestra Melodía",
        artist: "Recuerdos Bonitos",
        file: "music/cancion2.mp3"
    },
    {
        title: "Momentos Especiales",
        artist: "Para Ti",
        file: "music/cancion3.mp3"
    }
];

let musicSectionShown = false;

function showSpecialLoveMessage() {
    const scoreElement = document.getElementById('compatibilityScore');
    const descriptionElement = document.getElementById('compatibilityDescription');
    const heartButtonContainer = document.getElementById('heartButtonContainer');
    
    // Mostrar mensaje amoroso especial
    scoreElement.innerHTML = '💖 Mensaje Especial 💖';
    scoreElement.style.opacity = '1';
    scoreElement.style.display = 'block';
    scoreElement.style.color = '#e91e63';
    
    // Mostrar el primer mensaje
    const loveMessage = `✨ "${loveMessages[currentMessageIndex]}" ✨`;
    
    descriptionElement.innerHTML = loveMessage;
    descriptionElement.style.opacity = '1';
    descriptionElement.style.display = 'block';
    
    // Mostrar el contenedor del botón corazón después de 3 segundos
    setTimeout(() => {
        heartButtonContainer.style.display = 'flex';
        heartButtonContainer.style.opacity = '0';
        heartButtonContainer.style.animation = 'buttonReveal 1s ease-out forwards';
        
        // Mostrar la sección de Spotify después de 5 segundos más
        setTimeout(() => {
            showSpotifySection();
        }, 5000);
    }, 3000);
    
    console.log('💕 Mensaje especial mostrado para Marina:', currentMessageIndex + 1);
}

function changeMessage() {
    const descriptionElement = document.getElementById('compatibilityDescription');
    
    // Incrementar índice y volver al inicio si llegamos al final
    currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
    
    // Efecto de transición
    descriptionElement.style.opacity = '0';
    descriptionElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        const loveMessage = `✨ "${loveMessages[currentMessageIndex]}" ✨`;
        descriptionElement.innerHTML = loveMessage;
        descriptionElement.style.opacity = '1';
        descriptionElement.style.transform = 'translateY(0)';
    }, 300);
    
    console.log('💕 Mensaje cambiado a:', currentMessageIndex + 1);
}

function showAccessDenied() {
    const verificationInput = document.getElementById('verificationInput');
    
    // Limpiar el campo y mostrar mensaje
    verificationInput.value = '';
    verificationInput.placeholder = '❌ Acceso denegado. Intenta de nuevo...';
    verificationInput.style.borderColor = '#f44336';
    verificationInput.style.color = '#f44336';
    
    // Efecto de shake
    verificationInput.style.animation = 'shake 0.5s ease-in-out';
    
    // Restaurar después de 3 segundos
    setTimeout(() => {
        verificationInput.placeholder = 'Escribe tu nombre...';
        verificationInput.style.borderColor = '#e91e63';
        verificationInput.style.color = 'inherit';
        verificationInput.style.animation = 'none';
        verificationInput.focus();
    }, 3000);
}





function resetForm() {
    const verificationSection = document.getElementById('verificationSection');
    const animationSection = document.getElementById('animationSection');
    const verificationInput = document.getElementById('verificationInput');
    const heartButtonContainer = document.getElementById('heartButtonContainer');
    
    animationSection.style.display = 'none';
    verificationSection.style.display = 'block';
    
    verificationInput.value = '';
    verificationInput.focus();
    
    // Resetear el índice del mensaje para la próxima vez
    currentMessageIndex = 0;
    
    // Ocultar el contenedor del botón corazón
    if (heartButtonContainer) {
        heartButtonContainer.style.display = 'none';
    }
}

function resetAnimations() {
    console.log('🎬 Reset animations llamada');
    
    const arrow = document.getElementById('arrow');
    const resetBtn = document.querySelector('.reset-btn');
    
    console.log('🔍 Elementos de animación:', {
        arrow: arrow ? 'SÍ' : 'NO',
        resetBtn: resetBtn ? 'SÍ' : 'NO'
    });
    
    if (arrow) {
        arrow.style.animation = 'none';
        setTimeout(() => {
            arrow.style.animation = 'arrowShoot 2s ease-out 2s forwards';
        }, 100);
    }
    
    if (resetBtn) {
        resetBtn.style.animation = 'none';
        setTimeout(() => {
            resetBtn.style.animation = 'buttonReveal 1s ease-out 5s forwards';
        }, 100);
    }
    
    console.log('✅ Reset animations completado');
}

function createSparkles() {
    const animationSection = document.getElementById('animationSection');
    const sparkleCount = 15;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = Math.random() * 20 + 15 + 'px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = `sparkle ${Math.random() * 2 + 1}s ease-out forwards`;
        sparkle.style.zIndex = '10';
        
        animationSection.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
}

const sparkleCSS = `
@keyframes sparkle {
    0% {
        opacity: 0;
        transform: scale(0) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(180deg);
    }
    100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = sparkleCSS;
document.head.appendChild(styleSheet);

// Función para mostrar la sección de Spotify
function showSpotifySection() {
    const spotifySection = document.getElementById('spotifySection');
    spotifySection.style.display = 'block';
    spotifySection.style.opacity = '0';
    spotifySection.style.animation = 'fadeInUp 1s ease-out forwards';
    
    console.log('🎵 Mostrando playlist de Spotify');
}

function showMusicPlayer() {
    const musicPlayer = document.getElementById('musicPlayer');
    const playlist = document.getElementById('playlist');
    const toggleBtn = document.getElementById('musicToggleBtn');
    
    if (musicPlayer.style.display === 'none' || musicPlayer.style.display === '') {
        musicPlayer.style.display = 'block';
        playlist.style.display = 'block';
        toggleBtn.textContent = '🎵 Ocultar Música';
    } else {
        musicPlayer.style.display = 'none';
        playlist.style.display = 'none';
        toggleBtn.textContent = '🎵 Mostrar Música';
    }
}

function loadPlaylist() {
    const playlistItems = document.getElementById('playlistItems');
    playlistItems.innerHTML = '';
    
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'playlist-item';
        songItem.innerHTML = `
            <div class="song-info">
                <div class="song-name">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <button onclick="playSong(${index})" class="play-song-btn">▶️</button>
        `;
        
        if (index === currentSongIndex) {
            songItem.classList.add('active');
        }
        
        playlistItems.appendChild(songItem);
    });
}

function playSong(index) {
    currentSongIndex = index;
    const song = songs[currentSongIndex];
    const audioPlayer = document.getElementById('audioPlayer');
    
    // Actualizar interfaz
    document.getElementById('currentSongTitle').textContent = song.title;
    document.getElementById('currentSongArtist').textContent = song.artist;
    
    // Cargar y reproducir canción
    audioPlayer.src = song.file;
    audioPlayer.load();
    
    audioPlayer.play().then(() => {
        isPlaying = true;
        updatePlayPauseButton();
        updateActivePlaylistItem();
    }).catch(error => {
        console.log('Error al reproducir:', error);
        alert('⚠️ No se pudo cargar la canción. Asegúrate de que el archivo existe en la carpeta "music".');
    });
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    
    if (audioPlayer.src === '' || audioPlayer.src === window.location.href) {
        // Si no hay canción cargada, reproducir la primera
        playSong(0);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play().then(() => {
            isPlaying = true;
        }).catch(error => {
            console.log('Error al reproducir:', error);
        });
    }
    
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.textContent = isPlaying ? '⏸️' : '▶️';
}

function previousSong() {
    currentSongIndex = currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
    playSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
    playSong(currentSongIndex);
}

function updateActivePlaylistItem() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function setVolume() {
    const volumeSlider = document.getElementById('volumeSlider');
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = volumeSlider.value / 100;
}

function setProgress(event) {
    const progressBar = event.currentTarget;
    const clickX = event.offsetX;
    const width = progressBar.offsetWidth;
    const audioPlayer = document.getElementById('audioPlayer');
    
    if (audioPlayer.duration) {
        audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Enfocar en el campo de verificación al cargar
    document.getElementById('verificationInput').focus();
    
    // Enter key listener para verificación
    document.getElementById('verificationInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verifyPerson();
        }
    });
    
    // Event listeners para el reproductor de audio
    const audioPlayer = document.getElementById('audioPlayer');
    
    audioPlayer.addEventListener('loadedmetadata', function() {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
    });
    
    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        
        document.getElementById('currentTime').textContent = formatTime(currentTime);
        
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            document.getElementById('progressFill').style.width = progressPercent + '%';
        }
    });
    
    audioPlayer.addEventListener('ended', function() {
        nextSong();
    });
    
    audioPlayer.addEventListener('pause', function() {
        isPlaying = false;
        updatePlayPauseButton();
    });
    
    audioPlayer.addEventListener('play', function() {
        isPlaying = true;
        updatePlayPauseButton();
    });
    
    // Establecer volumen inicial
    setTimeout(() => {
        setVolume();
    }, 100);
});