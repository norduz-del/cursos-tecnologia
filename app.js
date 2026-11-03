const courses = [
  { id: "html-css", title: "Tu primera página web", category: "Desarrollo web", level: "Desde cero", duration: "3 h 20 min", lessons: 8, color: "lilac", icon: "⌘", description: "Crea una página web desde cero y descubre cómo el código transforma una idea en algo que puedes compartir con el mundo.", instructor: "Lucía Torres", initials: "LT", lessonsList: ["Cómo funciona la web", "Tu primer documento HTML", "Dale estilo con CSS", "Colores y tipografía", "Diseña para móvil", "Imágenes y enlaces", "Tu página personal", "Publica tu proyecto"], quiz: { question: "¿Qué lenguaje usamos para definir la estructura de una página web?", options: ["CSS", "HTML", "JavaScript"], answer: 1, explanation: "HTML pone cada parte del contenido en su lugar. CSS cambia la apariencia." } },
  { id: "python", title: "Python para mentes curiosas", category: "Datos e IA", level: "Desde cero", duration: "4 h 10 min", lessons: 10, color: "peach", icon: "⌘", description: "Da tus primeros pasos en programación con un lenguaje sencillo, útil y lleno de posibilidades.", instructor: "Mateo Ríos", initials: "MR", lessonsList: ["Pensar como programador", "Tu primer programa", "Datos y variables", "Decisiones con if", "Repetir con bucles", "Listas que organizan", "Funciones útiles", "Explora tus datos", "Mini proyecto: adivina", "Próximos pasos"], quiz: { question: "¿Qué palabra usamos en Python para definir una función?", options: ["function", "def", "make"], answer: 1, explanation: "En Python, `def` empieza la definición de una función." } },
  { id: "figma", title: "Diseña ideas con Figma", category: "Diseño digital", level: "Principiante", duration: "2 h 45 min", lessons: 7, color: "mint", icon: "✳", description: "Convierte ideas en diseños digitales claros. Aprende los fundamentos del diseño de interfaces mientras construyes una app.", instructor: "Sofía Vidal", initials: "SV", lessonsList: ["Ideas y diseño digital", "Explora Figma", "Color y contraste", "Tipografía con intención", "Componentes reutilizables", "Diseña una app", "Comparte tu prototipo"], quiz: { question: "¿Qué principio ayuda a que el texto sea fácil de leer?", options: ["Contraste", "Decoración", "Saturación"], answer: 0, explanation: "El contraste hace que las letras se distingan del fondo." } },
  { id: "javascript", title: "JavaScript: hazlo interactivo", category: "Desarrollo web", level: "Principiante", duration: "5 h 00 min", lessons: 12, color: "yellow", icon: "↗", description: "Añade interacción a tus páginas web y crea experiencias que responden a las personas.", instructor: "Nicolás León", initials: "NL", lessonsList: ["De la página a la acción", "Variables y valores", "Texto y números", "Botones que responden", "Decisiones en código", "Listas dinámicas", "Funciones", "El DOM", "Eventos", "Construye un contador", "Construye un juego", "Sigue aprendiendo"], quiz: { question: "¿Qué usamos en JavaScript para reaccionar a un clic?", options: ["Un evento", "Un estilo", "Una etiqueta"], answer: 0, explanation: "El evento de clic avisa al programa que alguien pulsó el botón." } },
  { id: "ia", title: "Inteligencia artificial en tu día", category: "Datos e IA", level: "Principiante", duration: "2 h 30 min", lessons: 6, color: "blue", icon: "✧", description: "Entiende cómo funciona la IA generativa y aprende a usarla con criterio en tu vida y trabajo.", instructor: "Valentina Cruz", initials: "VC", lessonsList: ["Qué es (y qué no es) la IA", "Cómo aprende un modelo", "Prompts claros y útiles", "Imágenes con IA", "Límites y responsabilidad", "Tu asistente personal"], quiz: { question: "¿Qué ayuda a obtener una respuesta más útil de una IA?", options: ["Una instrucción clara y específica", "Escribir más rápido", "Usar palabras complicadas"], answer: 0, explanation: "Una petición clara le dice a la IA qué necesitas y en qué formato." } },
  { id: "datos", title: "Tus primeros pasos con datos", category: "Datos e IA", level: "Desde cero", duration: "3 h 00 min", lessons: 8, color: "rose", icon: "◌", description: "Aprende a leer, ordenar y contar historias con datos usando hojas de cálculo.", instructor: "Diego Acosta", initials: "DA", lessonsList: ["Preguntas que cuentan", "Ordena tus datos", "Filtra lo importante", "Fórmulas cotidianas", "Gráficos que explican", "Encuentra patrones", "Cuenta una historia", "Tu primer informe"], quiz: { question: "¿Qué tipo de gráfico suele funcionar bien para comparar categorías?", options: ["Gráfico de barras", "Mapa de calor siempre", "Texto sin ordenar"], answer: 0, explanation: "Las barras permiten comparar cantidades entre grupos con facilidad." } },
];

const curriculum = {
  "html-css": {
    concepts: [
      "El navegador (la aplicación donde abres sitios) muestra la página. HTML pone el contenido en orden; CSS le da color y forma.",
      "En HTML, cada etiqueta marca una parte de la página. Por ejemplo, `<h1>` es el título principal y `<p>` es un párrafo.",
      "CSS cambia la apariencia de la página. Una regla dice qué parte cambiar y cómo hacerlo: por ejemplo, mostrar un título en verde.",
      "Los colores y tamaños ayudan a encontrar lo importante. Usa pocos colores y haz el título más grande que el texto normal.",
      "Una página también debe verse bien en el teléfono. Comprueba que el texto quepa y los botones sean fáciles de pulsar.",
      "Un enlace abre otra página. El texto alternativo explica una imagen a quien no puede verla o cuando no carga.",
      "Una página personal presenta quién eres y cómo contactarte. Pide a alguien que encuentre esa información sin pedirle ayuda.",
      "Publicar tu página crea un enlace para que otras personas la vean. Abre ese enlace en tu teléfono y revisa que todo funcione."
    ],
    activities: [
      "Dibuja en papel el recorrido navegador → servidor → página. Anota qué información viajaría en cada paso y explica el dibujo en voz alta.",
      "Crea `index.html`, añade idioma español, título, encabezado, dos párrafos, una lista y un enlace. Comprueba que cada etiqueta de apertura tenga su cierre.",
      "Crea `styles.css`, conéctalo desde el head y define reglas para el body, un título y un botón. Cambia una propiedad cada vez y observa qué elemento responde.",
      "Elige tres colores con buen contraste. Define tamaños para título, subtítulo y cuerpo; aplícalos a la página y comprueba que la acción principal destaque.",
      "Prueba tu página en ancho de móvil y escritorio. Ajusta el ancho máximo, el espaciado y una media query para que la navegación siga siendo cómoda.",
      "Agrega una imagen con texto alternativo y dos enlaces con nombres descriptivos. Prueba navegar con Tab y usa cada enlace sin ver el destino de antemano.",
      "Construye una página de presentación con biografía, habilidades, proyecto favorito y contacto. Pídele a alguien que encuentre dónde escribirte y anota dónde dudó.",
      "Publica el proyecto en GitHub Pages o un servicio estático. Abre el enlace público desde el teléfono, corrige un detalle y verifica que la nueva versión aparezca."
    ]
  },
  python: {
    concepts: [
      "Un programa es una lista de instrucciones para la computadora. Divide una tarea en pasos pequeños que puedas revisar uno por uno.",
      "`print()` muestra texto en la pantalla. Escribe `print(\"Hola\")` y ejecuta el programa para ver el resultado.",
      "Una variable guarda un dato con un nombre. Por ejemplo, `nombre = \"Ana\"` guarda el texto «Ana» para usarlo después.",
      "`if` significa «si pasa esto». El programa revisa una condición y elige qué hacer; `else` indica qué hacer si no se cumple.",
      "`for` repite una acción para cada elemento de una lista. `while` la repite hasta que una condición deja de cumplirse.",
      "Una lista guarda varios datos en orden. Puedes agregar un dato y luego pedir el primero, el segundo o mostrar todos.",
      "Una función guarda instrucciones bajo un nombre. Así puedes pedirle al programa que las repita sin volver a escribirlas.",
      "Los datos son la información que usa el programa. Antes de calcular, mira algunos para comprobar que no falte algo.",
      "Un juego de adivinanzas necesita una respuesta secreta, intentos y un mensaje cuando alguien acierta o se queda sin intentos.",
      "Un proyecto está listo cuando otra persona sabe cómo ejecutarlo y entiende para qué sirve. Escribe los pasos y pruébalos con esa persona."
    ],
    activities: [
      "Elige una tarea cotidiana, como preparar una merienda. Escribe seis instrucciones sin ambigüedad y marca qué datos de entrada y resultado produce.",
      "Abre Python y ejecuta `print(\"Hola, mundo\")`. Provoca a propósito un error de comillas, lee el mensaje y corrige el programa.",
      "Guarda nombre, ciudad y año de nacimiento en variables. Muestra una frase personalizada e identifica qué valores son texto y cuáles podrían servir para calcular.",
      "Pide una temperatura y muestra un mensaje distinto si está bajo, dentro o sobre un rango elegido. Comprueba también un valor justo en cada límite.",
      "Imprime una cuenta regresiva con `for`; luego usa `while` para pedir respuestas hasta recibir `salir`. Ensaya qué pasa si la respuesta llega vacía.",
      "Crea una lista de cinco cosas que quieras aprender. Añade una nueva, muestra la primera y recorre todas para imprimirlas con numeración.",
      "Escribe `saludar(nombre)` y `promedio(numeros)`. Prueba cada función con varios datos y decide qué debería pasar si la lista está vacía.",
      "Registra cinco tiempos de viaje. Cuenta cuántos datos hay, encuentra el mínimo y el máximo, y explica qué pregunta útil respondería cada cálculo.",
      "Construye un juego que elija una palabra de una lista y permita tres intentos. Prueba ganar al inicio, agotar intentos y escribir una opción inválida.",
      "Añade un menú inicial, instrucciones, un ejemplo de ejecución y una sección «qué aprendí». Invita a otra persona a probarlo sin darle indicaciones."
    ]
  },
  figma: {
    concepts: [
      "Antes de diseñar, decide quién usará la pantalla y qué quiere hacer. Eso te dice qué información debe aparecer primero.",
      "En Figma, un marco es una pantalla y las capas son las piezas que contiene. Ponles nombres para reconocerlas después.",
      "El contraste es la diferencia entre el texto y su fondo. Asegúrate de que las letras se lean con facilidad.",
      "Usa letras grandes para los títulos y más pequeñas para los detalles. Así se entiende qué leer primero.",
      "Un componente es una pieza, como un botón, que puedes reutilizar. Si lo cambias, se actualizan las copias.",
      "Muestra los pasos que sigue una persona para completar una tarea. Cada paso puede ser una pantalla de la aplicación.",
      "Un prototipo conecta las pantallas para que otra persona lo pruebe. Observa si encuentra los botones y puede completar su tarea."
    ],
    activities: [
      "Escribe para quién diseñas y qué tarea intenta completar. Dibuja en tres cajas la información imprescindible antes de abrir la herramienta.",
      "Crea un frame móvil y organiza encabezado, contenido y acción principal en grupos con nombres claros. Duplica el frame para explorar una segunda solución.",
      "Diseña dos combinaciones de fondo y texto. Comprueba cuál se lee mejor con tamaño pequeño y cambia tonos hasta que la jerarquía siga siendo clara.",
      "Define un estilo para título, sección y cuerpo. Escribe un ejemplo real en cada estilo y elimina tamaños que no aporten una diferencia útil.",
      "Convierte un botón en componente con estados normal y deshabilitado. Crea dos instancias y cambia el componente para comprobar que se mantienen coherentes.",
      "Boceta el recorrido de una persona desde abrir tu app hasta completar su tarea. Crea una pantalla por paso y marca dónde necesita tomar una decisión.",
      "Conecta las pantallas con interacciones. Pide a alguien que encuentre una función sin explicarle el diseño; registra una duda y mejora el prototipo."
    ]
  },
  javascript: {
    concepts: [
      "JavaScript hace que una página responda cuando alguien pulsa un botón o escribe algo. El navegador ejecuta estas instrucciones.",
      "`const` crea un nombre para un dato que no cambiará. Usa `let` cuando necesites que ese dato cambie.",
      "Lo que escribes en un campo llega como texto. Comprueba que haya un número antes de hacer una suma.",
      "Un evento avisa que alguien hizo algo, como pulsar un botón. El programa recibe ese aviso y realiza una acción.",
      "`if` hace que el programa elija según una regla. Comprueba qué pasa cuando la regla se cumple y cuando no.",
      "Una lista (array) guarda varios elementos. `map` prepara algo para cada elemento y `filter` selecciona solo algunos.",
      "Una función guarda instrucciones que puedes usar más de una vez. Dale un nombre que explique lo que hace.",
      "El DOM es la lista de elementos de una página que JavaScript puede cambiar. Por ejemplo, puedes cambiar el texto de un título.",
      "Un formulario reúne lo que escribe una persona. Al pulsar «Enviar», muestra el resultado y evita recargar la página.",
      "El contador guarda un número. Cada botón cambia ese número y muestra el nuevo resultado.",
      "Un juego tiene reglas, una respuesta a cada jugada y una forma de volver a empezar. Prueba los casos correctos e incorrectos.",
      "Prueba tu página con el teclado y con el ratón. Comprueba que los mensajes se entiendan y los botones funcionen."
    ],
    activities: [
      "Crea un botón que muestre un mensaje al pulsarlo. Antes de escribir código, señala qué elemento escucha y qué respuesta debería ver la persona.",
      "Guarda un título y una cantidad en variables. Reasigna la cantidad, concatena un mensaje y explica cuándo una variable podría mantenerse constante.",
      "Lee dos valores de un formulario, conviértelos a número y muestra la suma. Prueba campo vacío, texto accidental y valores negativos.",
      "Añade un listener de clic y otro de envío. Confirma que el evento correcto dispara cada acción y que el formulario no recarga la página.",
      "Escribe una validación para una edad mínima. Prueba justo debajo del límite, el límite exacto y un campo que no se ha rellenado.",
      "Guarda tres cursos en un array y dibuja cada tarjeta con `map`. Filtra solo los de una categoría con `filter` y compara ambas listas.",
      "Crea una función `crearMensaje(nombre)` que devuelva texto. Llámala con dos nombres y separa el cálculo de la actualización de la página.",
      "Selecciona un encabezado con `querySelector` y modifica su texto. Luego oculta y muestra un aviso alternando una clase CSS.",
      "Construye un formulario de tareas: al enviarlo, agrega la tarea a una lista visible y limpia el campo. Muestra un aviso si está vacío.",
      "Haz un contador con botones para sumar, restar y reiniciar. Decide si aceptas números negativos y actualiza siempre el mismo elemento.",
      "Crea un juego de preguntas con puntaje. Prueba respuesta correcta, incorrecta y reinicio; explica cómo el juego sabe cuándo terminó.",
      "Usa toda la página con teclado. Añade textos de estado claros y comprueba qué sucede si se pulsa varias veces rápido o faltan datos."
    ]
  },
  ia: {
    concepts: [
      "Una IA puede crear texto e imágenes a partir de ejemplos que ha visto. No piensa como una persona y puede equivocarse.",
      "La IA busca parecidos con los ejemplos que aprendió y produce una respuesta probable. Una respuesta que suena segura también puede ser falsa.",
      "Un prompt es la instrucción que escribes para la IA. Di qué necesitas, para quién y cómo quieres la respuesta.",
      "Para pedir una imagen, describe qué debe aparecer y cómo debe verse. Cambia una parte de la descripción para comparar el resultado.",
      "No compartas contraseñas, datos personales ni información privada con una IA. Comprueba los datos importantes antes de usarlos.",
      "Pide ayuda con una tarea concreta, usando información inventada. Revisa y corrige el resultado antes de compartirlo."
    ],
    activities: [
      "Elige una tarea sencilla y anota qué aporta una herramienta generativa y qué necesita seguir haciendo una persona. Define cuándo preferirías no usarla.",
      "Pide una explicación de un tema conocido y comprueba dos afirmaciones en una fuente fiable. Anota qué dato parece incompleto o demasiado seguro.",
      "Escribe un prompt indicando tarea, audiencia, contexto, límites y formato. Compara la respuesta con una versión que solo diga «ayúdame».",
      "Describe una imagen con tema, composición y luz; cambia solo el estilo en la siguiente prueba. Compara qué instrucciones transforman realmente el resultado.",
      "Revisa un ejemplo ficticio que incluya una cifra dudosa y un dato personal. Marca qué verificarías, qué quitarías y qué no enviarías a una herramienta.",
      "Diseña un asistente para ordenar una agenda semanal usando datos inventados. Define la instrucción, comprueba el resultado y añade un control humano antes de compartirlo."
    ]
  },
  datos: {
    concepts: [
      "Primero, escribe la pregunta que quieres responder. Luego decide qué información necesitas para responderla.",
      "En una tabla, cada fila contiene un dato y cada columna describe qué es ese dato. Usa nombres claros y el mismo formato.",
      "Un filtro muestra solo las filas que cumplen una condición. Revisa cuántas filas quedan antes de comparar los resultados.",
      "Una fórmula hace un cálculo automáticamente. Pruébala con pocos datos y comprueba el resultado antes de usarla en toda la tabla.",
      "Las barras comparan grupos. Las líneas muestran cambios a través del tiempo. Pon nombres para explicar qué muestra el gráfico.",
      "Que dos cosas pasen a la vez no significa que una cause la otra. Revisa si faltan datos antes de explicar un resultado.",
      "Para explicar lo que encontraste, di qué querías saber y qué datos viste. También aclara qué no puedes concluir.",
      "Un informe corto explica la pregunta, lo que encontraste y qué harías después. Separa los datos de tu recomendación."
    ],
    activities: [
      "Formula una pregunta concreta sobre una actividad cotidiana. Decide qué dato la respondería y crea una pequeña tabla ficticia para explorarlo.",
      "Crea una tabla con fechas, categoría y cantidad. Uniforma encabezados y formatos; encuentra un duplicado y decide cómo lo tratarías.",
      "Filtra la tabla por una categoría y luego por fecha. Cuenta cuántas filas quedan y explica cómo ese subconjunto afecta la comparación.",
      "Calcula un total, un promedio y una diferencia usando fórmulas. Verifica cada resultado a mano con tres filas pequeñas antes de copiarlo.",
      "Elige el gráfico según la pregunta: comparar categorías o ver un cambio temporal. Añade título y etiquetas que expliquen qué representa cada eje.",
      "Busca el valor más alto y el más bajo de la tabla. Antes de explicar por qué, escribe dos factores que podrían influir y una limitación del conjunto.",
      "Redacta un titular, una cifra que lo respalde y una cautela sobre su interpretación. Pide a alguien que explique qué entendió solo leyendo eso.",
      "Prepara un informe de una página con pregunta, método, hallazgo y siguiente paso. Marca qué partes son hechos y cuál es tu recomendación."
    ]
  }
};

const config = window.PRISMA_SUPABASE_CONFIG ?? {};
const configured = Boolean(config.url && config.anonKey);
let supabase;
let currentUser = null;
let authMode = "signin";
let progress = new Set(JSON.parse(localStorage.getItem("prisma-completed-lessons") || "[]"));
let activeCourse = null;
let activeLesson = 0;
let activeCategory = "Todos";
let lessonResponses = new Map(JSON.parse(localStorage.getItem("prisma-lesson-responses") || "[]"));
let lessonAnswers = new Map(JSON.parse(localStorage.getItem("prisma-lesson-answers") || "[]"));
let pendingQuizAnswer = null;
let demoStep = 0;
let demoTimer = null;
let toastTimer;

const grid = document.querySelector("#course-grid");
const courseDialog = document.querySelector("#course-dialog");
const authDialog = document.querySelector("#auth-dialog");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3800);
}

function renderCourses() {
  const filtered = activeCategory === "Todos" ? courses : courses.filter((course) => course.category === activeCategory);
  grid.innerHTML = filtered.map((course, index) => `
    <article class="course-card" style="--card-delay:${index * 60}ms">
      <button class="course-cover cover-${course.color}" type="button" data-open-course="${course.id}" aria-label="Ver curso: ${course.title}">
        <span class="cover-label">${course.category}</span><span class="cover-symbol">${course.icon}</span>
        <span class="cover-art cover-art-one"></span><span class="cover-art cover-art-two"></span>
        <span class="cover-bottom"><span>PRISMA <b>ACADEMIA</b></span><span>0${index + 1} / 06</span></span>
      </button>
      <div class="course-meta"><span>${course.level}</span><span class="meta-dot">·</span><span>${course.duration}</span></div>
      <button class="course-title" type="button" data-open-course="${course.id}">${course.title}</button>
      <p class="course-by">Con ${course.instructor}</p>
      <div class="course-card-footer"><span>◷ &nbsp;${course.lessons} lecciones</span><button class="card-arrow" type="button" data-open-course="${course.id}" aria-label="Abrir curso ${course.title}">↗</button></div>
    </article>`).join("");
}

function renderLesson() {
  stopDemo();
  const course = activeCourse;
  const lessonName = course.lessonsList[activeLesson];
  const done = progress.has(`${course.id}:${activeLesson}`);
  const isLast = activeLesson === course.lessonsList.length - 1;
  const lessonKey = `${course.id}:${activeLesson}`;
  const lesson = curriculum[course.id];
  const completedLessons = [...progress].filter((key) => key.startsWith(`${course.id}:`)).length;
  const demo = createLessonDemo(course, activeLesson);
  demoStep = 0;
  document.querySelector("#dialog-content").innerHTML = `
    <div class="lesson-heading"><span class="lesson-category">${course.category} / ${course.level}</span><h2 id="dialog-title">${course.title}</h2><p>${course.description}</p></div>
    <div class="lesson-layout">
      <aside class="lesson-sidebar"><div class="lesson-course-label">CONTENIDO DEL CURSO <span>${course.lessonsList.length} lecciones</span></div>
        ${course.lessonsList.map((lesson, index) => `<button class="lesson-item ${index === activeLesson ? "selected" : ""} ${progress.has(`${course.id}:${index}`) ? "completed" : ""}" type="button" data-lesson="${index}"><span class="lesson-status">${progress.has(`${course.id}:${index}`) ? "✓" : String(index + 1).padStart(2, "0")}</span><span>${lesson}</span>${index === activeLesson ? '<span class="lesson-now">●</span>' : ""}</button>`).join("")}
      </aside>
      <div class="lesson-main">
        <div class="lesson-progress-label">TU AVANCE <span>${completedLessons} de ${course.lessonsList.length} lecciones completadas</span></div><div class="lesson-progress-track"><i style="width:${(completedLessons / course.lessonsList.length) * 100}%"></i></div>
        <section class="lesson-demo" aria-labelledby="demo-title">
          <div class="demo-header"><div><span class="demo-kicker">GUÍA INTERACTIVA · 3 PASOS</span><h4 id="demo-title">Mira estos 3 pasos</h4></div><span class="demo-not-video">No hay video grabado: el control anterior no reproducía nada. Esta guía visual sí cambia al avanzar los pasos. <a href="#lesson-practice">Ir a la práctica</a>.</span></div>
          <div class="demo-board" aria-live="polite"><span class="demo-step-count" id="demo-step-count">PASO 1 DE 3</span><h5 id="demo-step-title"></h5><p id="demo-step-copy"></p></div>
          <div class="demo-controls"><button class="demo-button demo-play" id="demo-play" type="button" aria-pressed="false">▶ <span>Avanzar automáticamente</span></button><button class="demo-button" id="demo-prev" type="button" aria-label="Ver paso anterior">← Anterior</button><button class="demo-button" id="demo-next" type="button">Siguiente →</button><span class="demo-position" id="demo-position">1 / 3</span></div>
          <div class="demo-track"><i id="demo-track-fill"></i></div>
        </section>
        <div class="lesson-text"><div class="lesson-number">LECCIÓN ${String(activeLesson + 1).padStart(2, "0")} DE ${course.lessonsList.length}</div><h3>${lessonName}</h3>
          <div class="lesson-explanation"><span>QUÉ SIGNIFICA</span><p>${escapeHTML(lesson.concepts[activeLesson])}</p></div>
          <section class="lesson-activity" id="lesson-practice" tabindex="-1"><div class="activity-kicker">TU TURNO · 10–20 MIN</div><h4>Haz esta práctica</h4><p><strong>Necesitas:</strong> ${escapeHTML(courseMaterials(course.id, activeLesson))}. <strong>Proyecto final del curso:</strong> ${escapeHTML(courseProject(course.id))}.</p><ol>${splitActivitySteps(lesson.activities[activeLesson]).map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
            <label for="activity-response">Escribe qué hiciste y qué pasó. Si algo no funcionó, anota tu duda.</label>
            <textarea id="activity-response" maxlength="1200" placeholder="Escribe aquí tus notas, un resultado o la parte que te costó...">${escapeHTML(lessonResponses.get(lessonKey) ?? "")}</textarea>
            <div class="activity-response-footer"><span id="draft-status">${done ? (configured && currentUser ? "Práctica sincronizada con tu cuenta." : "Práctica guardada en este dispositivo.") : lessonResponses.has(lessonKey) ? "Borrador guardado en este dispositivo." : "Tu respuesta se guarda cuando completes la lección."}</span><span id="response-count">${(lessonResponses.get(lessonKey) ?? "").length}/1200</span></div>
          </section>
          <div class="lesson-callout"><span>✦</span><p><strong>Comprueba que lo entendiste:</strong> ${lessonReflection(lessonName, course.category)}</p></div>
          ${isLast ? renderQuiz(course) : ""}
          <div class="lesson-actions"><button class="button button-dark" id="complete-lesson" type="button">${done ? "Guardar cambios y completar ✓" : "Guardar práctica y completar"} <span aria-hidden="true">→</span></button>${!isLast ? `<button class="text-link" id="next-lesson" type="button">Siguiente lección <span aria-hidden="true">→</span></button>` : ""}</div>
        </div>
      </div>
    </div>`;
  document.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => { activeLesson = Number(button.dataset.lesson); renderLesson(); }));
  document.querySelector(".demo-not-video a").addEventListener("click", (event) => {
    event.preventDefault();
    const practice = document.querySelector("#lesson-practice");
    practice.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    document.querySelector("#activity-response").focus({ preventScroll: true });
  });
  renderDemo(demo);
  document.querySelector("#demo-play").addEventListener("click", () => toggleDemo(demo));
  document.querySelector("#demo-prev").addEventListener("click", () => {
    stopDemo();
    demoStep = Math.max(0, demoStep - 1);
    renderDemo(demo);
  });
  document.querySelector("#demo-next").addEventListener("click", () => {
    stopDemo();
    demoStep = Math.min(demo.length - 1, demoStep + 1);
    renderDemo(demo);
  });
  document.querySelector("#complete-lesson").addEventListener("click", () => completeLesson(course, activeLesson));
  document.querySelector("#activity-response").addEventListener("input", (event) => {
    lessonResponses.set(lessonKey, event.currentTarget.value);
    document.querySelector("#response-count").textContent = `${event.currentTarget.value.length}/1200`;
    document.querySelector("#draft-status").textContent = persistLessonResponses()
      ? "Borrador guardado en este dispositivo."
      : "No se pudo guardar el borrador local.";
  });
  document.querySelector("#next-lesson")?.addEventListener("click", () => { activeLesson += 1; renderLesson(); });
  document.querySelector("#quiz-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selected = Number(new FormData(event.currentTarget).get("answer"));
    const result = document.querySelector("#quiz-result");
    const correct = selected === course.quiz.answer;
    result.textContent = correct
      ? `Correcto. ${course.quiz.explanation}`
      : `No es esa. La respuesta correcta es «${course.quiz.options[course.quiz.answer]}». ${course.quiz.explanation}`;
    result.className = `quiz-result ${correct ? "correct" : "incorrect"}`;
    if (correct) {
      if (!configured) {
        lessonAnswers.set(lessonKey, selected);
        progress.add(lessonKey);
        const saved = persistLessonAnswers() && persistLocalProgress();
        renderLesson();
        showToast(saved
          ? "Punto de control guardado en este dispositivo; configura Supabase para sincronizarlo."
          : "Punto de control superado, pero no se pudo guardar localmente.");
      }
      else if (!currentUser) {
        lessonAnswers.set(lessonKey, selected);
        persistLessonAnswers();
        pendingQuizAnswer = { courseId: course.id, lessonIndex: activeLesson, answer: selected };
        openAuth();
      }
      else if (await saveProgress(course, activeLesson, selected, lessonResponses.get(lessonKey) ?? "")) renderLesson();
    }
  });
}

function createLessonDemo(course, lessonIndex) {
  const lesson = curriculum[course.id];
  const instruction = splitActivitySteps(lesson.activities[lessonIndex])[0];
  return [
    { title: "Entiende la idea", text: lesson.concepts[lessonIndex] },
    { title: "Haz una prueba", text: instruction },
    { title: "Revisa el resultado", text: lessonReflection(course.lessonsList[lessonIndex], course.category) },
  ];
}

function splitActivitySteps(text) {
  const steps = [];
  let start = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (".!?".includes(text[index]) && (index === text.length - 1 || /\s/.test(text[index + 1]))) {
      const step = text.slice(start, index + 1).trim();
      if (step) steps.push(step);
      start = index + 1;
    }
  }
  const remaining = text.slice(start).trim();
  if (remaining) steps.push(remaining);
  return steps;
}

function renderDemo(steps) {
  const titles = document.querySelector("#demo-step-title");
  if (!titles) return;
  const step = steps[demoStep];
  document.querySelector("#demo-step-count").textContent = `PASO ${demoStep + 1} DE ${steps.length}`;
  titles.textContent = step.title;
  document.querySelector("#demo-step-copy").textContent = step.text;
  document.querySelector("#demo-position").textContent = `${demoStep + 1} / ${steps.length}`;
  document.querySelector("#demo-track-fill").style.width = `${((demoStep + 1) / steps.length) * 100}%`;
  document.querySelector("#demo-prev").disabled = demoStep === 0;
  document.querySelector("#demo-next").disabled = demoStep === steps.length - 1;
  const playButton = document.querySelector("#demo-play");
  playButton.setAttribute("aria-pressed", String(Boolean(demoTimer)));
  playButton.innerHTML = `${demoTimer ? "Ⅱ" : "▶"} <span>${demoTimer ? "Pausar avance" : "Avanzar automáticamente"}</span>`;
}

function stopDemo() {
  clearInterval(demoTimer);
  demoTimer = null;
}

function toggleDemo(steps) {
  if (demoTimer) {
    stopDemo();
    renderDemo(steps);
    return;
  }
  if (demoStep === steps.length - 1) demoStep = 0;
  demoTimer = setInterval(() => {
    if (demoStep === steps.length - 1) {
      stopDemo();
    } else {
      demoStep += 1;
    }
    renderDemo(steps);
  }, 4000);
  renderDemo(steps);
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function courseProject(courseId) {
  const projects = {
    "html-css": "una página personal publicada en internet",
    python: "un juego de adivinanzas que otra persona pueda probar",
    figma: "un prototipo móvil que resuelva una tarea concreta",
    javascript: "una página interactiva con contador y juego",
    ia: "un flujo de asistente para una tarea cotidiana no sensible",
    datos: "un informe breve con gráficos y una recomendación",
  };
  return projects[courseId];
}

function courseMaterials(courseId, lessonIndex) {
  if (lessonIndex === 0 && ["html-css", "python", "figma", "datos"].includes(courseId)) {
    return "papel y lápiz";
  }
  const materials = {
    "html-css": "papel y lápiz. Cuando escribas código, necesitarás un navegador y un editor de texto",
    python: "papel y lápiz. Para probar Python, usa un editor de Python en el navegador; no necesitas instalarlo",
    figma: "papel y lápiz. Para probar Figma, crea una cuenta gratuita en figma.com",
    javascript: "papel y lápiz. Para probar JavaScript, usa un navegador y un editor de texto",
    ia: "papel y lápiz. Para probar una IA, usa ejemplos inventados; no escribas datos privados",
    datos: "papel y lápiz. Para hacer la tabla, usa una hoja de cálculo",
  };
  return materials[courseId];
}

function lessonReflection(lessonName, category) {
  return `¿Qué aprendiste al probar «${lessonName}»? Explícaselo en una frase a alguien que empieza.`;
}

function persistLessonResponses() {
  try {
    localStorage.setItem("prisma-lesson-responses", JSON.stringify([...lessonResponses]));
    return true;
  } catch (error) {
    showToast(`No se pudo guardar el borrador local: ${error.message}`);
    return false;
  }
}

function renderQuiz(course) {
  const savedAnswer = lessonAnswers.get(`${course.id}:${activeLesson}`);
  return `<section class="quiz"><div class="lesson-number">PUNTO DE CONTROL FINAL</div><h4>${escapeHTML(course.quiz.question)}</h4><p>Elige tu respuesta y revisa lo aprendido antes de cerrar este curso.</p><form id="quiz-form">${course.quiz.options.map((option, index) => `<label class="quiz-option"><input type="radio" name="answer" value="${index}" ${savedAnswer === index ? "checked" : ""} required /><span>${escapeHTML(option)}</span></label>`).join("")}<button class="button button-outline" type="submit">Comprobar mi respuesta →</button></form><p id="quiz-result" class="quiz-result" role="status">${savedAnswer === course.quiz.answer ? "¡Punto de control superado!" : ""}</p></section>`;
}

async function completeLesson(course, lessonIndex) {
  const response = document.querySelector("#activity-response").value.trim();
  if (!response) {
    showToast("Escribe una nota sobre lo que probaste antes de completar esta práctica.");
    document.querySelector("#activity-response").focus();
    return;
  }
  if (!configured) {
    progress.add(`${course.id}:${lessonIndex}`);
    lessonResponses.set(`${course.id}:${lessonIndex}`, response);
    const saved = persistLessonResponses() && persistLocalProgress();
    renderLesson();
    showToast(saved
      ? "Práctica y avance guardados en este dispositivo. Configura Supabase para sincronizar entre dispositivos."
      : "Práctica completada en esta sesión, pero el navegador no permitió guardar el avance local.");
    return;
  }
  if (!currentUser) { openAuth(); return; }
  const saved = await saveProgress(course, lessonIndex, null, response);
  if (!saved) return;
  renderLesson();
  updateAccountButton();
  showToast("Práctica y avance guardados en tu cuenta. ¡Vas muy bien!");
}

function persistLessonAnswers() {
  try {
    localStorage.setItem("prisma-lesson-answers", JSON.stringify([...lessonAnswers]));
    return true;
  } catch (error) {
    showToast(`No se pudo guardar la respuesta local: ${error.message}`);
    return false;
  }
}

function persistLocalProgress() {
  try {
    localStorage.setItem("prisma-completed-lessons", JSON.stringify([...progress]));
    return true;
  } catch (error) {
    showToast(`No se pudo guardar el avance local: ${error.message}`);
    return false;
  }
}

async function saveProgress(course, lessonIndex, quizAnswer = null, activityResponse = "") {
  if (!configured || !currentUser || !supabase) return false;
  const { error } = await supabase.from("course_progress").upsert({
    user_id: currentUser.id,
    course_id: course.id,
    lesson_id: lessonIndex,
    completed: true,
    quiz_answer: quizAnswer ?? lessonAnswers.get(`${course.id}:${lessonIndex}`) ?? null,
    reflection_response: activityResponse,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id,course_id,lesson_id" });
  if (error) {
    showToast(`No se pudo guardar el progreso: ${error.message}`);
    return false;
  }
  progress.add(`${course.id}:${lessonIndex}`);
  if (activityResponse) {
    lessonResponses.set(`${course.id}:${lessonIndex}`, activityResponse);
    persistLessonResponses();
  }
  if (quizAnswer !== null) {
    lessonAnswers.set(`${course.id}:${lessonIndex}`, quizAnswer);
    persistLessonAnswers();
  }
  return true;
}

async function loadProgress() {
  if (!supabase || !currentUser) return;
  const { data, error } = await supabase.from("course_progress").select("course_id,lesson_id,completed,reflection_response,quiz_answer").eq("user_id", currentUser.id);
  if (error) { showToast(`No se pudo cargar tu progreso: ${error.message}`); return; }
  progress = new Set(data.filter((row) => row.completed !== false).map((row) => `${row.course_id}:${row.lesson_id}`));
  data.forEach((row) => {
    const lessonKey = `${row.course_id}:${row.lesson_id}`;
    if (row.reflection_response) lessonResponses.set(lessonKey, row.reflection_response);
    if (row.quiz_answer !== null) lessonAnswers.set(lessonKey, row.quiz_answer);
  });
  persistLessonResponses();
  persistLessonAnswers();
  if (activeCourse && courseDialog.open) renderLesson();
}

function openCourse(id) {
  activeCourse = courses.find((course) => course.id === id);
  activeLesson = 0;
  renderLesson();
  courseDialog.showModal();
  if (currentUser) loadProgress();
}

function openAuth() {
  if (!configured) {
    showToast("La cuenta y el progreso en la nube necesitan configuración de Supabase. Consulta README para activarlos.");
    return;
  }
  authDialog.showModal();
  document.querySelector("#auth-email").focus();
}

function setAuthMode(mode) {
  authMode = mode;
  const signingIn = mode === "signin";
  document.querySelector("#auth-title").textContent = signingIn ? "Qué bueno verte." : "Empieza por aquí.";
  document.querySelector("#auth-submit").innerHTML = `${signingIn ? "Iniciar sesión" : "Crear cuenta"} <span aria-hidden="true">↗</span>`;
  document.querySelector("#auth-switch-label").textContent = signingIn ? "¿Primera vez por aquí?" : "¿Ya tienes una cuenta?";
  document.querySelector("#auth-switch").textContent = signingIn ? "Crea tu cuenta" : "Inicia sesión";
  document.querySelector("#auth-password").autocomplete = signingIn ? "current-password" : "new-password";
  document.querySelector("#auth-feedback").textContent = "";
}

async function handleAuth(event) {
  event.preventDefault();
  if (!supabase) { openAuth(); return; }
  const form = new FormData(event.currentTarget);
  const email = String(form.get("email"));
  const password = String(form.get("password"));
  const submit = document.querySelector("#auth-submit");
  const feedback = document.querySelector("#auth-feedback");
  submit.disabled = true;
  feedback.textContent = authMode === "signin" ? "Conectando..." : "Creando tu cuenta...";
  const result = authMode === "signin"
    ? await supabase.auth.signInWithPassword({ email, password })
    : await supabase.auth.signUp({ email, password });
  submit.disabled = false;
  if (result.error) { feedback.textContent = result.error.message; return; }
  if (authMode === "signup" && !result.data.session) {
    feedback.textContent = "Revisa tu correo para confirmar la cuenta y luego inicia sesión.";
    return;
  }
  currentUser = result.data.user;
  authDialog.close();
  updateAccountButton();
  await loadProgress();
  if (pendingQuizAnswer !== null) {
    const pending = pendingQuizAnswer;
    const pendingCourse = courses.find((course) => course.id === pending.courseId);
    if (!pendingCourse) throw new Error(`Unknown course for pending checkpoint: ${pending.courseId}`);
    pendingQuizAnswer = null;
    const saved = await saveProgress(
      pendingCourse,
      pending.lessonIndex,
      pending.answer,
      lessonResponses.get(`${pending.courseId}:${pending.lessonIndex}`) ?? "",
    );
    if (saved && activeCourse?.id === pending.courseId && activeLesson === pending.lessonIndex && courseDialog.open) renderLesson();
  }
  showToast("Sesión iniciada. Tu progreso ya está sincronizado.");
}

function updateAccountButton() {
  const button = document.querySelector("#account-button");
  if (!currentUser) {
    button.textContent = "Iniciar sesión";
    button.onclick = openAuth;
    return;
  }
  const emailName = currentUser.email?.split("@")[0] ?? "Mi cuenta";
  button.textContent = `${emailName} · Cerrar sesión`;
  button.onclick = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) { showToast(`No se pudo cerrar sesión: ${error.message}`); return; }
    currentUser = null;
    progress = new Set();
    updateAccountButton();
    showToast("Sesión cerrada.");
  };
}

document.querySelectorAll(".category-tab").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".category-tab.active")?.classList.remove("active");
  button.classList.add("active");
  activeCategory = button.dataset.category;
  renderCourses();
}));
grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-course]");
  if (trigger) openCourse(trigger.dataset.openCourse);
});
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => {
  if (button.closest("#course-dialog")) stopDemo();
  button.closest("dialog").close();
}));
courseDialog.addEventListener("close", stopDemo);
document.querySelector("#auth-form").addEventListener("submit", handleAuth);
document.querySelector("#auth-switch").addEventListener("click", () => setAuthMode(authMode === "signin" ? "signup" : "signin"));
document.querySelector("#menu-toggle").addEventListener("click", (event) => {
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  document.querySelector(".main-nav").classList.toggle("nav-open", !expanded);
});
document.querySelector(".main-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.querySelector(".main-nav").classList.remove("nav-open");
    document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  }
});
document.querySelector("#view-all").addEventListener("click", () => {
  activeCategory = "Todos";
  document.querySelectorAll(".category-tab").forEach((button) => button.classList.toggle("active", button.dataset.category === "Todos"));
  renderCourses();
});

renderCourses();
updateAccountButton();
if (configured) {
  import("https://esm.sh/@supabase/supabase-js@2")
    .then(({ createClient }) => {
      supabase = createClient(config.url, config.anonKey);
      return supabase.auth.getSession();
    })
    .then(({ data, error }) => {
      if (error) { showToast(`No se pudo validar la sesión: ${error.message}`); return; }
      currentUser = data.session?.user ?? null;
      updateAccountButton();
      if (currentUser) loadProgress();
      supabase.auth.onAuthStateChange((_event, session) => {
        currentUser = session?.user ?? null;
        updateAccountButton();
        if (currentUser) loadProgress();
      });
    })
    .catch((error) => showToast(`No se pudo conectar con Supabase: ${error.message}`));
}
