async function checkCompatibility() {
    console.log('🚀 checkCompatibility llamada');
    
    const name1Input = document.getElementById('name1Input');
    const name2Input = document.getElementById('name2Input');
    const sign1Select = document.getElementById('sign1Select');
    const sign2Select = document.getElementById('sign2Select');
    
    console.log('🔍 Elementos de input:', {
        name1Input: name1Input ? 'SÍ' : 'NO',
        name2Input: name2Input ? 'SÍ' : 'NO', 
        sign1Select: sign1Select ? 'SÍ' : 'NO',
        sign2Select: sign2Select ? 'SÍ' : 'NO'
    });
    
    if (!name1Input || !name2Input || !sign1Select || !sign2Select) {
        alert('Error: No se encontraron los campos de entrada');
        return;
    }
    
    const name1 = name1Input.value.trim();
    const name2 = name2Input.value.trim();
    const sign1 = sign1Select.value;
    const sign2 = sign2Select.value;
    
    console.log('📝 Valores:', {name1, name2, sign1, sign2});
    
    if (!name1 || !name2 || !sign1 || !sign2) {
        alert('Por favor, completa todos los campos 💕');
        return;
    }
    
    const questionSection = document.getElementById('questionSection');
    const animationSection = document.getElementById('animationSection');
    
    console.log('🔍 Elementos de sección:', {
        questionSection: questionSection ? 'SÍ' : 'NO',
        animationSection: animationSection ? 'SÍ' : 'NO'
    });
    
    if (!questionSection || !animationSection) {
        alert('Error: No se encontraron las secciones');
        return;
    }
    
    console.log('🎨 Cambiando secciones...');
    questionSection.style.display = 'none';
    animationSection.style.display = 'block';
    
    console.log('❤️ Creando corazón...');
    createHeartWithNames(name1, name2);
    resetAnimations();
    
    // Obtener compatibilidad real
    console.log('🧪 Obteniendo compatibilidad real...');
    
    setTimeout(async () => {
        try {
            console.log('⏰ Ejecutando análisis de compatibilidad...');
            const compatibility = await getZodiacCompatibility(sign1, sign2);
            console.log('✅ Compatibilidad obtenida:', compatibility);
            
            if (compatibility) {
                showCompatibilityResult(compatibility, false);
            } else {
                // Resultado por defecto solo si falla todo
                showCompatibilityResult({
                    score: 75,
                    description: 'Hay potencial en esta relación. Con comunicación y comprensión mutua, pueden crear algo hermoso juntos.'
                }, false);
            }
        } catch (error) {
            console.error('❌ Error en análisis:', error);
            // Resultado por defecto en caso de error
            showCompatibilityResult({
                score: 70,
                description: 'No pudimos analizar completamente, pero toda relación tiene potencial con amor y dedicación.'
            }, false);
        }
    }, 2000);
}

function createHeartWithNames(name1, name2) {
    const heartText = document.getElementById('heartText');
    heartText.innerHTML = '';
    
    // Crear corazones individuales y combinado
    const combinedNames = name1 + name2;
    
    // Crear el patrón de 3 corazones
    const heartSection1 = createSingleHeart(name1); // Primer corazón
    const heartSection2 = createSingleHeart(name2); // Segundo corazón  
    const heartSection3 = createSingleHeart(combinedNames); // Tercer corazón combinado
    
    // Crear layout de 3 corazones
    const allHearts = [
        '                   💕 CORAZÓN DE ' + name1.toUpperCase() + ' 💕',
        '',
        ...heartSection1,
        '',
        '',
        '                   💕 CORAZÓN DE ' + name2.toUpperCase() + ' 💕',
        '',
        ...heartSection2,
        '',
        '',
        '                   💕 CORAZÓN UNIDOS: ' + name1.toUpperCase() + ' & ' + name2.toUpperCase() + ' 💕',
        '',
        ...heartSection3,
        ''
    ];
    
    allHearts.forEach((line, lineIndex) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'heart-line';
        lineDiv.textContent = line;
        lineDiv.style.animationDelay = (lineIndex * 0.08) + 's';
        
        heartText.appendChild(lineDiv);
    });
}

function createSingleHeart(name) {
    // Función que crea un corazón individual con el patrón que pediste
    const nameRepeated = name.repeat(50); // Repetir suficientes veces
    
    return [
        `…..*..${nameRepeated.substring(0, 12)}…*`,
        `…*..${nameRepeated.substring(0, 15)}….*`,
        `..*.${nameRepeated.substring(0, 18)}…*…………….*….*`,
        `.*..${nameRepeated.substring(0, 21)}…*………*..${nameRepeated.substring(0, 8)}….*`,
        `...*..${nameRepeated.substring(0, 24)}…*….*…${nameRepeated.substring(0, 11)}.*`,
        `*.. ${nameRepeated.substring(0, 23)}…*….*…${nameRepeated.substring(0, 11)}.*`,
        `.*..${nameRepeated.substring(0, 23)}…*..*…${nameRepeated.substring(0, 11)}…*`,
        `..*…${nameRepeated.substring(0, 23)}..*…${nameRepeated.substring(0, 11)}…*`,
        `…*….${nameRepeated.substring(0, 26)}${nameRepeated.substring(0, 11)}…*`,
        `…..*….${nameRepeated.substring(0, 29)}…*`,
        `……..*….${nameRepeated.substring(0, 23)}…*`,
        `………..*….${nameRepeated.substring(0, 18)}…*`,
        `……………*…${nameRepeated.substring(0, 11)}….*`,
        `………………*..${nameRepeated.substring(0, 8)}…*`,
        `…………………*…..*`,
        `………………….*..*`
    ];
}


async function getZodiacCompatibility(sign1, sign2) {
    console.log(`Analizando compatibilidad entre ${sign1} y ${sign2}`);
    
    // Simulación local únicamente
    console.log('Usando análisis local...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Base de datos de compatibilidad zodiacal expandida
    const compatibilityData = {
        'aries': {
            'leo': { score: 95, description: '¡Fuego con fuego! Esta combinación es explosiva y apasionada. Ambos comparten energía, aventura y liderazgo natural.' },
            'sagitario': { score: 92, description: 'Aventureros natos unidos por la pasión. Su energía es contagiosa y juntos conquistan cualquier desafío.' },
            'geminis': { score: 85, description: 'Dinamismo y versatilidad se combinan. Una relación estimulante llena de nuevas experiencias.' },
            'acuario': { score: 83, description: 'Independencia y originalidad se complementan. Respetan la libertad del otro mientras crecen juntos.' }
        },
        'tauro': {
            'virgo': { score: 88, description: 'Estabilidad y dedicación definen esta unión. Ambos valoran la seguridad y construyen algo sólido juntos.' },
            'capricornio': { score: 87, description: 'Ambición y perseverancia van de la mano. Construyen imperios juntos con determinación inquebrantable.' },
            'cancer': { score: 85, description: 'Seguridad emocional y material se fusionan. Una relación cálida basada en el cuidado mutuo.' }
        },
        'geminis': {
            'libra': { score: 90, description: 'Mentes brillantes que se complementan. Su conexión intelectual es extraordinaria y la comunicación fluye.' },
            'acuario': { score: 88, description: 'Innovación y curiosidad se unen. Una pareja que explora nuevas ideas y horizontes juntos.' },
            'aries': { score: 85, description: 'Dinamismo y versatilidad se combinan. Una relación estimulante llena de nuevas experiencias.' }
        },
        'cancer': {
            'escorpio': { score: 94, description: 'Profundidad emocional sin límites. Se entienden a nivel del alma, creando una conexión transformadora.' },
            'piscis': { score: 91, description: 'Sensibilidad y intuición se encuentran. Una conexión espiritual profunda y sanadora.' },
            'tauro': { score: 85, description: 'Seguridad emocional y material se fusionan. Una relación cálida basada en el cuidado mutuo.' }
        },
        'leo': {
            'aries': { score: 95, description: '¡Fuego con fuego! Esta combinación es explosiva y apasionada. Ambos comparten energía, aventura y liderazgo natural.' },
            'sagitario': { score: 89, description: 'Generosidad, optimismo y aventura. Juntos iluminan cualquier lugar y se inspiran a brillar.' },
            'geminis': { score: 84, description: 'Creatividad y expresión se potencian. Una relación llena de diversión y crecimiento personal.' }
        },
        'virgo': {
            'tauro': { score: 88, description: 'Estabilidad y dedicación definen esta unión. Ambos valoran la seguridad y construyen algo sólido juntos.' },
            'capricornio': { score: 86, description: 'Perfección y ambición se combinan. Juntos crean sistemas eficientes y logran grandes metas.' },
            'escorpio': { score: 84, description: 'Análisis y profundidad se encuentran. Una relación intensa basada en la comprensión mutua.' }
        }
    };
    
    // Buscar compatibilidad en ambas direcciones
    let result = null;
    if (compatibilityData[sign1] && compatibilityData[sign1][sign2]) {
        result = compatibilityData[sign1][sign2];
    } else if (compatibilityData[sign2] && compatibilityData[sign2][sign1]) {
        result = compatibilityData[sign2][sign1];
    }
    
    // Si no hay datos específicos, generar resultado dinámico
    if (!result) {
        const score = Math.floor(Math.random() * 35) + 65; // Score entre 65-99
        const descriptions = [
            'Una combinación interesante que requiere paciencia y comprensión mutua para florecer plenamente.',
            'Diferencias complementarias que pueden crear una relación equilibrada y enriquecedora con esfuerzo.',
            'Desafío estimulante donde ambos signos pueden aprender y crecer juntos significativamente.',
            'Polaridades que se atraen, creando una dinámica única y potencialmente transformadora.',
            'Potencial real de crecimiento mutuo a través de la comprensión y aceptación de diferencias.'
        ];
        
        result = {
            score: score,
            description: descriptions[Math.floor(Math.random() * descriptions.length)]
        };
    }
    
    console.log('Resultado calculado:', result);
    return result;
}

function showCompatibilityResult(compatibility, isRealAI = false) {
    console.log('🔍 INICIO showCompatibilityResult:', compatibility, 'isRealAI:', isRealAI);
    
    const scoreElement = document.getElementById('compatibilityScore');
    const descriptionElement = document.getElementById('compatibilityDescription');
    
    console.log('🔍 Elementos encontrados:', {
        scoreElement: scoreElement ? 'SÍ' : 'NO',
        descriptionElement: descriptionElement ? 'SÍ' : 'NO'
    });
    
    if (!scoreElement || !descriptionElement) {
        console.error('❌ Elementos no encontrados');
        alert('Error: No se encontraron los elementos de resultado');
        return;
    }
    
    // Mostrar inmediatamente para debugging
    console.log('⏰ Mostrando resultados inmediatamente...');
    
    // Mostrar score
    scoreElement.textContent = `${compatibility.score}% Compatibles`;
    scoreElement.style.opacity = '1';
    scoreElement.style.display = 'block';
    
    // Determinar color basado en score
    if (compatibility.score >= 90) {
        scoreElement.style.color = '#4CAF50'; // Verde
    } else if (compatibility.score >= 75) {
        scoreElement.style.color = '#FF9800'; // Naranja
    } else {
        scoreElement.style.color = '#F44336'; // Rojo
    }
    
    // Mostrar descripción
    const prefix = isRealAI ? '🤖 Gemini IA: ' : '💫 ';
    descriptionElement.innerHTML = `${prefix}${compatibility.description}`;
    descriptionElement.style.opacity = '1';
    descriptionElement.style.display = 'block';
    
    console.log('✅ Resultados mostrados exitosamente');
}

function resetForm() {
    const questionSection = document.getElementById('questionSection');
    const animationSection = document.getElementById('animationSection');
    const name1Input = document.getElementById('name1Input');
    const name2Input = document.getElementById('name2Input');
    const sign1Select = document.getElementById('sign1Select');
    const sign2Select = document.getElementById('sign2Select');
    
    animationSection.style.display = 'none';
    questionSection.style.display = 'block';
    
    name1Input.value = '';
    name2Input.value = '';
    sign1Select.value = '';
    sign2Select.value = '';
    
    name1Input.focus();
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
    document.getElementById('name1Input').focus();
    
    // Enter key listeners
    document.getElementById('name1Input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('sign1Select').focus();
        }
    });
    
    document.getElementById('name2Input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('sign2Select').focus();
        }
    });
});