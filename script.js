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
        '           💕 Una persona muy especial 💕',
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

function showSpecialLoveMessage() {
    const scoreElement = document.getElementById('compatibilityScore');
    const descriptionElement = document.getElementById('compatibilityDescription');
    
    // Mostrar mensaje amoroso especial
    scoreElement.innerHTML = '💖 Mensaje Especial 💖';
    scoreElement.style.opacity = '1';
    scoreElement.style.display = 'block';
    scoreElement.style.color = '#e91e63';
    
    const loveMessage = `✨ "Quiero que sepas que valoro mucho la libertad que tienes y la manera en que vives tu vida. Para mí eres una persona muy especial y cada momento que compartimos me hace sentir que eres alguien importante. No busco cambiar nada en ti, al contrario, me gusta acompañar lo que ya eres." ✨`;
    
    descriptionElement.innerHTML = loveMessage;
    descriptionElement.style.opacity = '1';
    descriptionElement.style.display = 'block';
    
    console.log('💕 Mensaje especial mostrado para Marina');
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
    
    animationSection.style.display = 'none';
    verificationSection.style.display = 'block';
    
    verificationInput.value = '';
    verificationInput.focus();
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

document.addEventListener('DOMContentLoaded', function() {
    // Enfocar en el campo de verificación al cargar
    document.getElementById('verificationInput').focus();
    
    // Enter key listener para verificación
    document.getElementById('verificationInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            verifyPerson();
        }
    });
});