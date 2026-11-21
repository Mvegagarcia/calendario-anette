
// =========================================
// FECHAS DEL CALENDARIO
// =========================================

const FECHA_INICIO = "2026-12-01";

// null = fecha real.
// Para probar todos los días: "2026-12-30"
const FECHA_PRUEBA = "2026-12-30";

// =========================================
// LAS 30 SORPRESAS
// =========================================

const sorpresas = [
    {
        titulo: "Un comienzo especial",
        mensaje: "Anette, hoy comienza este pequeño regalo que preparé para ti. Durante 30 días encontrarás aquí mensajes, recuerdos y pequeños detalles. Espero que cada uno te saque una sonrisa. ❤️"
    },
    {
        titulo: "Una sonrisa",
        mensaje: "Una sonrisa puede cambiar el día. Espero que hoy tengas muchas razones para sonreír y que nunca olvides lo valiosa que eres."
    },
    {
        titulo: "Un pequeño detalle",
        mensaje: "A veces los detalles más pequeños son los que más se recuerdan. Este calendario es uno de esos pequeños detalles que preparé con cariño."
    },
    {
        titulo: "Un deseo bonito",
        mensaje: "Hoy deseo que tengas un día tranquilo, bonito y lleno de momentos que te hagan sentir feliz."
    },
    {
        titulo: "Un recuerdo",
        mensaje: "Los momentos bonitos merecen quedarse guardados. Gracias por todos esos recuerdos que hacen especiales nuestros días."
    },
    {
        titulo: "Tu día",
        mensaje: "Hoy es una oportunidad para disfrutar, descansar, reír y hacer algo que te guste mucho. No olvides dedicarte tiempo."
    },
    {
        titulo: "Una carta",
        mensaje: "Si pudiera regalarte algo todos los días, sería un motivo para sonreír, tranquilidad para tu corazón y muchos momentos bonitos."
    },
    {
        titulo: "Un abrazo de palabras",
        mensaje: "Aunque estas palabras estén en una pantalla, quiero que te recuerden que mereces cosas bonitas, respeto, tranquilidad y felicidad."
    },
    {
        titulo: "Un momento feliz",
        mensaje: "Hoy guarda un momento bonito. Puede ser una canción, una conversación, una comida rica o simplemente un ratito de paz."
    },
    {
        titulo: "Diez días",
        mensaje: "¡Ya llegamos al día 10! Espero que este pequeño calendario esté haciendo tus días un poquito más especiales."
    },
    {
        titulo: "Una flor imaginaria",
        mensaje: "Hoy te regalo una flor imaginaria 🌷. Que su significado sea alegría, calma y nuevos momentos bonitos."
    },
    {
        titulo: "Un mensaje inesperado",
        mensaje: "No necesitas una fecha especial para recibir palabras bonitas. Hoy simplemente quiero desearte un día maravilloso."
    },
    {
        titulo: "Una canción",
        mensaje: "Hoy escucha una canción que te guste mucho, canta si quieres y disfruta el momento. Que la música te acompañe bonito."
    },
    {
        titulo: "Un deseo",
        mensaje: "Deseo que todos tus sueños, metas y proyectos encuentren caminos para hacerse realidad. Nunca dejes de creer en ti."
    },
    {
        titulo: "Un día para ti",
        mensaje: "Hoy recuerda que también está bien descansar, desconectarte un rato y hacer las cosas a tu propio ritmo."
    },
    {
        titulo: "Mitad del camino",
        mensaje: "Llegamos al día 15. Gracias por abrir cada pequeño detalle de este calendario. Todavía quedan más sorpresas."
    },
    {
        titulo: "Algo bonito",
        mensaje: "La vida está llena de pequeños momentos que pueden convertirse en grandes recuerdos. Espero que hoy encuentres uno."
    },
    {
        titulo: "Una sonrisa más",
        mensaje: "Este mensaje tiene una misión: recordarte que tu día también merece un momento de alegría. ¡Sonríe si puedes!"
    },
    {
        titulo: "Un recuerdo especial",
        mensaje: "Hoy piensa en algún recuerdo que te haga feliz. Guárdalo en tu corazón y vuelve a él cuando necesites alegría."
    },
    {
        titulo: "Un día maravilloso",
        mensaje: "Que hoy te pasen cosas bonitas, que tengas tranquilidad y que todo aquello que te preocupa se vuelva un poquito más ligero."
    },
    {
        titulo: "Veinte días",
        mensaje: "¡Ya estamos en el día 20! Este calendario está llegando a su recta final, pero todavía hay sorpresas esperando."
    },
    {
        titulo: "Una pequeña sorpresa",
        mensaje: "La sorpresa de hoy es recordarte que mereces recibir cariño, palabras sinceras y momentos que te hagan sentir bien."
    },
    {
        titulo: "Un deseo para mañana",
        mensaje: "Que mañana sea un nuevo comienzo lleno de oportunidades, buenas noticias y muchas razones para sentirte orgullosa de ti."
    },
    {
        titulo: "Un mensaje sincero",
        mensaje: "Preparar este calendario fue una manera de crear algo especial y diferente. Espero que cada casilla te haya alegrado un poquito."
    },
    {
        titulo: "Un día de gratitud",
        mensaje: "Hoy agradece algo pequeño: una persona, un momento, una oportunidad o una sonrisa. A veces ahí se encuentran las cosas más bonitas."
    },
    {
        titulo: "Últimos días",
        mensaje: "Ya estamos cerca del final. Espero que estas pequeñas sorpresas hayan acompañado tus días de una forma bonita."
    },
    {
        titulo: "Una carta especial",
        mensaje: "No todo lo especial necesita ser grande. Un mensaje, una palabra amable o un detalle preparado con dedicación también puede significar mucho."
    },
    {
        titulo: "Un recuerdo para guardar",
        mensaje: "Si algún día vuelves a este calendario, espero que recuerdes que fue creado con tiempo, dedicación y la intención de compartir momentos bonitos."
    },
    {
        titulo: "Un poquito de felicidad",
        mensaje: "Que nunca te falten motivos para reír, personas que te respeten, sueños que perseguir y momentos para disfrutar."
    },
    {
        titulo: "La última sorpresa",
        mensaje: "Anette, llegamos al último día de este calendario. Gracias por acompañarme en estas 30 pequeñas sorpresas. Espero que este regalo digital se convierta en un recuerdo bonito. ❤️"
    },
    {
        titulo: "Un nuevo comienzo",
        mensaje: "Anette, este calendario termina, pero los recuerdos bonitos pueden continuar. Gracias por descubrir cada detalle de este pequeño regalo. Espero que siempre recuerdes el cariño y la dedicación con los que fue preparado. ❤️"
    }
];

// =========================================
// ELEMENTOS DE LA PÁGINA
// =========================================

const pantallaInicio = document.getElementById("inicio");
const pantallaCarta = document.getElementById("pantallaCarta");
const calendario = document.getElementById("calendario");
const calendarioGrid = document.getElementById("calendarioGrid");

const botonComenzar = document.getElementById("botonComenzar");
const botonVerCalendario = document.getElementById("botonVerCalendario");

const ventanaSorpresa = document.getElementById("ventanaSorpresa");
const cerrarModal = document.getElementById("cerrarModal");
const botonCerrar = document.getElementById("botonCerrar");

const numeroSorpresa = document.getElementById("numeroSorpresa");
const tituloSorpresa = document.getElementById("tituloSorpresa");
const mensajeSorpresa = document.getElementById("mensajeSorpresa");

// =========================================
// VALIDAR LOS ELEMENTOS Y LOS MENSAJES
// =========================================

if (sorpresas.length !== 30) {
    console.error("El calendario debe tener exactamente 30 sorpresas.");
}

if (
    !pantallaInicio ||
    !pantallaCarta ||
    !calendario ||
    !calendarioGrid ||
    !botonComenzar ||
    !botonVerCalendario ||
    !ventanaSorpresa ||
    !cerrarModal ||
    !botonCerrar ||
    !numeroSorpresa ||
    !tituloSorpresa ||
    !mensajeSorpresa
) {
    console.error("Falta algún elemento HTML. Revisa los identificadores.");
}

// =========================================
// CONVERTIR FECHAS
// =========================================

function convertirFecha(fecha) {
    const partes = fecha.split("-");

    return new Date(
        Number(partes[0]),
        Number(partes[1]) - 1,
        Number(partes[2])
    );
}

// =========================================
// OBTENER FECHA ACTUAL
// =========================================

function obtenerFechaActual() {
    if (FECHA_PRUEBA !== null) {
        return convertirFecha(FECHA_PRUEBA);
    }

    const ahora = new Date();

    return new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        ahora.getDate()
    );
}

// =========================================
// CALCULAR DÍA DISPONIBLE
// =========================================

function obtenerDiaDisponible() {
    const inicio = convertirFecha(FECHA_INICIO);
    const hoy = obtenerFechaActual();

    const diferencia = hoy - inicio;

    const dia = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    ) + 1;

    return Math.max(0, Math.min(dia, 30));
}

// =========================================
// CREAR LOS 30 DÍAS
// =========================================

function crearCalendario() {
    calendarioGrid.innerHTML = "";

    const diaDisponible = obtenerDiaDisponible();

    for (let i = 1; i <= 30; i++) {
        const boton = document.createElement("button");

        boton.classList.add("dia");

        const numero = document.createElement("span");
        numero.classList.add("numero-dia");
        numero.textContent = String(i).padStart(2, "0");

        const icono = document.createElement("span");
        icono.classList.add("icono-dia");

        if (i <= diaDisponible) {
            boton.disabled = false;

            icono.textContent = "♥ Abierto";
            boton.classList.add("abierto");

            boton.addEventListener("click", function () {
                abrirSorpresa(i);
            });
        } else {
            boton.disabled = true;
            icono.textContent = "🔒 Cerrado";
        }

        boton.appendChild(numero);
        boton.appendChild(icono);

        calendarioGrid.appendChild(boton);
    }
}

// =========================================
// ABRIR SORPRESA
// =========================================

function abrirSorpresa(dia) {
    const sorpresa = sorpresas[dia - 1];

    if (!sorpresa) {
        console.error("No existe la sorpresa del día " + dia);
        return;
    }

    numeroSorpresa.textContent =
        "DÍA " + String(dia).padStart(2, "0");

    tituloSorpresa.textContent = sorpresa.titulo;
    mensajeSorpresa.textContent = sorpresa.mensaje;

    ventanaSorpresa.classList.remove("oculto");
}

// =========================================
// CERRAR SORPRESA
// =========================================

function cerrarSorpresa() {
    ventanaSorpresa.classList.add("oculto");
}

cerrarModal.addEventListener("click", cerrarSorpresa);
botonCerrar.addEventListener("click", cerrarSorpresa);

ventanaSorpresa.addEventListener("click", function (evento) {
    if (evento.target === ventanaSorpresa) {
        cerrarSorpresa();
    }
});

// =========================================
// MOSTRAR LA CARTA
// =========================================

botonComenzar.addEventListener("click", function () {
    pantallaInicio.classList.add("oculto");
    pantallaCarta.classList.remove("oculto");
});

// =========================================
// MOSTRAR EL CALENDARIO
// =========================================

botonVerCalendario.addEventListener("click", function () {
    pantallaCarta.classList.add("oculto");
    calendario.classList.remove("oculto");

    crearCalendario();
});

// =========================================
// FIN DEL SCRIPT
// =========================================