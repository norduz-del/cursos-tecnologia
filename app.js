const courses = [
  { id: "html-css", title: "Tu primera página web", category: "Desarrollo web", level: "Desde cero", duration: "3 h 20 min", lessons: 8, color: "lilac", icon: "⌘", description: "Crea una página web desde cero y descubre cómo el código transforma una idea en algo que puedes compartir con el mundo.", instructor: "Lucía Torres", initials: "LT", lessonsList: ["Cómo funciona la web", "Tu primer documento HTML", "Dale estilo con CSS", "Colores y tipografía", "Diseña para móvil", "Imágenes y enlaces", "Tu página personal", "Publica tu proyecto"], quiz: { question: "¿Qué lenguaje usamos para definir la estructura de una página web?", options: ["CSS", "HTML", "JavaScript"], answer: 1 } },
  { id: "python", title: "Python para mentes curiosas", category: "Datos e IA", level: "Desde cero", duration: "4 h 10 min", lessons: 10, color: "peach", icon: "⌘", description: "Da tus primeros pasos en programación con un lenguaje sencillo, útil y lleno de posibilidades.", instructor: "Mateo Ríos", initials: "MR", lessonsList: ["Pensar como programador", "Tu primer programa", "Datos y variables", "Decisiones con if", "Repetir con bucles", "Listas que organizan", "Funciones útiles", "Explora tus datos", "Mini proyecto: adivina", "Próximos pasos"], quiz: { question: "¿Qué palabra usamos en Python para definir una función?", options: ["function", "def", "make"], answer: 1 } },
  { id: "figma", title: "Diseña ideas con Figma", category: "Diseño digital", level: "Principiante", duration: "2 h 45 min", lessons: 7, color: "mint", icon: "✳", description: "Convierte ideas en diseños digitales claros. Aprende los fundamentos del diseño de interfaces mientras construyes una app.", instructor: "Sofía Vidal", initials: "SV", lessonsList: ["Ideas y diseño digital", "Explora Figma", "Color y contraste", "Tipografía con intención", "Componentes reutilizables", "Diseña una app", "Comparte tu prototipo"], quiz: { question: "¿Qué principio ayuda a que el texto sea fácil de leer?", options: ["Contraste", "Decoración", "Saturación"], answer: 0 } },
  { id: "javascript", title: "JavaScript: hazlo interactivo", category: "Desarrollo web", level: "Principiante", duration: "5 h 00 min", lessons: 12, color: "yellow", icon: "↗", description: "Añade interacción a tus páginas web y crea experiencias que responden a las personas.", instructor: "Nicolás León", initials: "NL", lessonsList: ["De la página a la acción", "Variables y valores", "Texto y números", "Botones que responden", "Decisiones en código", "Listas dinámicas", "Funciones", "El DOM", "Eventos", "Construye un contador", "Construye un juego", "Sigue aprendiendo"], quiz: { question: "¿Qué usamos en JavaScript para reaccionar a un clic?", options: ["Un evento", "Un estilo", "Una etiqueta"], answer: 0 } },
  { id: "ia", title: "Inteligencia artificial en tu día", category: "Datos e IA", level: "Principiante", duration: "2 h 30 min", lessons: 6, color: "blue", icon: "✧", description: "Entiende cómo funciona la IA generativa y aprende a usarla con criterio en tu vida y trabajo.", instructor: "Valentina Cruz", initials: "VC", lessonsList: ["Qué es (y qué no es) la IA", "Cómo aprende un modelo", "Prompts claros y útiles", "Imágenes con IA", "Límites y responsabilidad", "Tu asistente personal"], quiz: { question: "¿Qué ayuda a obtener una respuesta más útil de una IA?", options: ["Una instrucción clara y específica", "Escribir más rápido", "Usar palabras complicadas"], answer: 0 } },
  { id: "datos", title: "Tus primeros pasos con datos", category: "Datos e IA", level: "Desde cero", duration: "3 h 00 min", lessons: 8, color: "rose", icon: "◌", description: "Aprende a leer, ordenar y contar historias con datos usando hojas de cálculo.", instructor: "Diego Acosta", initials: "DA", lessonsList: ["Preguntas que cuentan", "Ordena tus datos", "Filtra lo importante", "Fórmulas cotidianas", "Gráficos que explican", "Encuentra patrones", "Cuenta una historia", "Tu primer informe"], quiz: { question: "¿Qué tipo de gráfico suele funcionar bien para comparar categorías?", options: ["Gráfico de barras", "Mapa de calor siempre", "Texto sin ordenar"], answer: 0 } },
];

const curriculum = {
  "html-css": {
    concepts: [
      "Un navegador solicita archivos a un servidor y los convierte en una página visible. HTML describe el contenido y CSS la presentación; por eso una misma estructura puede verse de muchas maneras.",
      "HTML organiza información con etiquetas que tienen significado. Un documento empieza con doctype, idioma y head; dentro del body, cada sección cuenta una parte de la página.",
      "CSS conecta reglas con elementos HTML: un selector identifica qué cambiar, una propiedad nombra el cambio y un valor lo concreta. El navegador combina las reglas para dibujar la página.",
      "El color, el tamaño y el espaciado guían la atención. Una escala pequeña de colores y tamaños hace que el diseño se sienta coherente y facilita entender qué leer primero.",
      "El diseño adaptable parte de una pantalla estrecha y añade espacio según lo necesite cada dispositivo. Las unidades flexibles y las media queries ayudan a que el contenido no se corte.",
      "Un enlace lleva a otro recurso y una imagen aporta información o contexto. El texto alternativo describe imágenes importantes para lectores de pantalla y si la imagen no carga.",
      "Una página personal comunica quién eres con una jerarquía clara, una introducción breve y una acción concreta. Probar con otra persona revela si el mensaje se entiende.",
      "Publicar significa subir archivos estáticos a una dirección accesible. Antes de compartir, revisa enlaces, lectura en móvil, textos alternativos y que la versión publicada coincida con tu trabajo."
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
      "Programar es descomponer un problema en instrucciones pequeñas, explícitas y comprobables. Un buen primer paso es describir la entrada, el resultado esperado y un caso límite.",
      "Python ejecuta instrucciones de arriba hacia abajo. `print()` muestra un resultado; los errores son pistas sobre qué línea revisar, no señales de que no sirvas para programar.",
      "Una variable da nombre a un valor. Las cadenas representan texto, los enteros cuentan y los decimales miden; elegir el tipo correcto evita operaciones inesperadas.",
      "`if` y `else` permiten que un programa elija según una condición verdadera o falsa. La comparación debe expresar con claridad la regla que la persona necesita.",
      "Un bucle repite trabajo sin copiar líneas. `for` recorre elementos conocidos; `while` continúa mientras se cumpla una condición y debe avanzar para no repetirse para siempre.",
      "Una lista conserva elementos ordenados y permite recorrerlos, añadirlos o consultarlos. Empezar por cero al acceder a un índice es una convención común en Python.",
      "Una función reúne una tarea con nombre, entradas opcionales y un resultado. Reutilizarla reduce duplicación y permite probar partes del programa por separado.",
      "Un conjunto de datos es una colección de observaciones. Antes de calcular, conviene contar registros, detectar valores vacíos y mirar algunos ejemplos para reconocer su forma.",
      "Un juego de adivinanzas combina entrada del usuario, decisiones, intentos y una condición de cierre. Probar aciertos, errores y respuestas inesperadas mejora la experiencia.",
      "Un proyecto terminado incluye instrucciones para ejecutarlo, un ejemplo y límites conocidos. Explicar cómo lo pensaste es parte de mostrar lo que aprendiste."
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
      "Diseñar una interfaz comienza con una necesidad concreta, no con colores. Una persona, una tarea y una situación ayudan a decidir qué información necesita aparecer primero.",
      "Un frame representa una pantalla y las capas organizan sus elementos. Nombrar capas y agrupar piezas relacionadas hace que el archivo se pueda compartir y modificar.",
      "El contraste facilita percibir diferencias y entender estados. Comprobar texto pequeño sobre su fondo evita que una paleta bonita resulte difícil de leer.",
      "La tipografía crea jerarquía. Limitar familias y tamaños, usar pesos con intención y cuidar el interlineado hace que el contenido se pueda recorrer de un vistazo.",
      "Un componente representa una pieza repetible; una variante describe sus estados. Cambiar el componente principal actualiza sus instancias y evita diseños inconsistentes.",
      "Una aplicación se entiende mejor como un flujo de tareas que como pantallas aisladas. Los bocetos y las conexiones ayudan a descubrir pasos confusos antes de pulir.",
      "Un prototipo conecta pantallas y simula acciones; una prueba breve valida si el flujo es comprensible. Observar dónde se atasca alguien vale más que explicar el diseño."
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
      "JavaScript permite que una página responda a datos y acciones. En el navegador puede leer elementos, escuchar eventos y cambiar lo que se muestra sin recargar.",
      "Una variable con `const` conserva una referencia y `let` permite reasignar. Los tipos básicos y nombres que expresan intención hacen el comportamiento más fácil de seguir.",
      "El usuario escribe texto, aunque parezca un número. Convertir y validar antes de calcular evita que una suma termine uniendo cadenas o acepte un campo vacío.",
      "Un evento comunica que pasó algo, como un clic o un envío. Un listener conecta ese evento con una función y permite responder de manera ordenada.",
      "Una condición representa una regla del producto. Es útil probar la condición verdadera, la falsa y valores de frontera, no solo el camino esperado.",
      "Un array guarda una secuencia y métodos como `map` o `filter` producen vistas nuevas a partir de sus elementos. No hace falta copiar tarjetas a mano.",
      "Una función pone nombre a una tarea, acepta parámetros y devuelve un resultado. Las funciones pequeñas permiten reutilizar lógica y revisar errores con precisión.",
      "El DOM es la representación de la página que JavaScript puede consultar. Seleccionar el elemento adecuado y actualizar solo lo necesario mantiene la interfaz predecible.",
      "Un formulario emite un envío y sus campos tienen valores que se pueden leer. Evitar la recarga y mostrar una confirmación conecta el formulario con la interfaz.",
      "Un contador combina estado y representación: cada clic cambia un valor y después actualiza el texto visible. Una sola fuente de verdad evita números desincronizados.",
      "Un juego requiere reglas, estado y retroalimentación. Separar preparar una ronda, evaluar una acción y mostrar el resultado facilita cambiar el juego luego.",
      "Una experiencia interactiva se completa al considerar teclado, mensajes claros y situaciones límite. Consola y pruebas manuales te ayudan a revisar esos caminos."
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
      "La IA generativa produce contenido a partir de patrones aprendidos; no comprende como una persona ni garantiza que cada respuesta sea cierta. La tarea determina si conviene usarla.",
      "Un modelo ajusta patrones a partir de ejemplos de entrenamiento y genera una continuación probable. Puede repetir errores o sesgos, así que los resultados necesitan criterio humano.",
      "Un prompt útil define objetivo, contexto, audiencia, restricciones y formato. Pedir una primera versión y corregirla suele ser mejor que esperar una respuesta perfecta al primer intento.",
      "Las herramientas de generación de imágenes responden a composición, tema, estilo y encuadre. Iterar con una idea cada vez permite notar qué instrucción tuvo efecto.",
      "Los sistemas pueden inventar datos, exponer información y reflejar sesgos. No compartas información confidencial y verifica las afirmaciones importantes con fuentes confiables.",
      "Un asistente personal funciona mejor con una tarea delimitada, contexto no sensible y revisión final. La persona usuaria sigue siendo responsable de las decisiones y resultados."
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
      "Un análisis útil comienza con una pregunta que podría cambiar una decisión. Definir qué cuenta como observación y qué mide cada columna evita conclusiones vagas.",
      "Cada columna describe una variable y cada fila suele representar un registro. Formatos consistentes y nombres claros permiten ordenar la tabla sin perder significado.",
      "Filtrar reduce la vista, no los datos originales. Comparar segmentos requiere usar la misma definición y recordar cuántas observaciones quedaron fuera.",
      "Una fórmula expresa una regla que se repite. Probarla en casos sencillos antes de copiarla en una columna completa evita que un error se propague.",
      "Un gráfico debe responder una pregunta específica. Barras comparan categorías, líneas muestran cambios en el tiempo; etiquetas y escalas ayudan a interpretarlos.",
      "Un patrón observado no explica por sí solo su causa. Fechas, grupos pequeños, datos faltantes y otras variables pueden cambiar la lectura inicial.",
      "Una buena historia con datos presenta la pregunta, una evidencia visible y un límite. No ocultar incertidumbre hace la conclusión más confiable.",
      "Un informe resume métodos, hallazgos y próximos pasos. Un lector debería poder distinguir los datos observados de la recomendación."
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
  const course = activeCourse;
  const lessonName = course.lessonsList[activeLesson];
  const done = progress.has(`${course.id}:${activeLesson}`);
  const isLast = activeLesson === course.lessonsList.length - 1;
  const lessonKey = `${course.id}:${activeLesson}`;
  const lesson = curriculum[course.id];
  const completedLessons = [...progress].filter((key) => key.startsWith(`${course.id}:`)).length;
  document.querySelector("#dialog-content").innerHTML = `
    <div class="lesson-heading"><span class="lesson-category">${course.category} / ${course.level}</span><h2 id="dialog-title">${course.title}</h2><p>${course.description}</p></div>
    <div class="lesson-layout">
      <aside class="lesson-sidebar"><div class="lesson-course-label">CONTENIDO DEL CURSO <span>${course.lessonsList.length} lecciones</span></div>
        ${course.lessonsList.map((lesson, index) => `<button class="lesson-item ${index === activeLesson ? "selected" : ""} ${progress.has(`${course.id}:${index}`) ? "completed" : ""}" type="button" data-lesson="${index}"><span class="lesson-status">${progress.has(`${course.id}:${index}`) ? "✓" : String(index + 1).padStart(2, "0")}</span><span>${lesson}</span>${index === activeLesson ? '<span class="lesson-now">●</span>' : ""}</button>`).join("")}
      </aside>
      <div class="lesson-main">
        <div class="lesson-progress-label">TU AVANCE <span>${completedLessons} de ${course.lessonsList.length} lecciones completadas</span></div><div class="lesson-progress-track"><i style="width:${(completedLessons / course.lessonsList.length) * 100}%"></i></div>
        <div class="lesson-player"><div class="player-orb">✳</div><span class="player-caption">UNA IDEA A LA VEZ</span><div class="player-controls"><span>▶</span><div class="player-progress"><i></i></div><span>04:32</span><span>⛶</span></div></div>
        <div class="lesson-text"><div class="lesson-number">LECCIÓN ${String(activeLesson + 1).padStart(2, "0")} <span>·</span> ${course.duration}</div><h3>${lessonName}</h3>
          <div class="lesson-explanation"><span>IDEA CLAVE</span><p>${lesson.concepts[activeLesson]}</p></div>
          <section class="lesson-activity"><div class="activity-kicker">PRÁCTICA GUIADA · 10–20 MIN</div><h4>Apréndelo haciendo</h4><p>Prepara <strong>${courseProject(course.id)}</strong> y avanza con estos pasos:</p><ol>${lesson.activities[activeLesson].split(". ").filter(Boolean).map((step) => `<li>${step.endsWith(".") ? step : `${step}.`}</li>`).join("")}</ol>
            <label for="activity-response">¿Qué hiciste, qué resultado obtuviste y qué cambiarías en el siguiente intento?</label>
            <textarea id="activity-response" maxlength="1200" placeholder="Escribe aquí tus notas, un resultado o la parte que te costó...">${escapeHTML(lessonResponses.get(lessonKey) ?? "")}</textarea>
            <div class="activity-response-footer"><span id="draft-status">${done ? (configured && currentUser ? "Práctica sincronizada con tu cuenta." : "Práctica guardada en este dispositivo.") : lessonResponses.has(lessonKey) ? "Borrador guardado en este dispositivo." : "Tu respuesta se guarda cuando completes la lección."}</span><span id="response-count">${(lessonResponses.get(lessonKey) ?? "").length}/1200</span></div>
          </section>
          <div class="lesson-callout"><span>✦</span><p><strong>Reflexiona:</strong> ${lessonReflection(lessonName, course.category)}</p></div>
          ${isLast ? renderQuiz(course) : ""}
          <div class="lesson-actions"><button class="button button-dark" id="complete-lesson" type="button">${done ? "Guardar cambios y completar ✓" : "Guardar práctica y completar"} <span aria-hidden="true">→</span></button>${!isLast ? `<button class="text-link" id="next-lesson" type="button">Siguiente lección <span aria-hidden="true">→</span></button>` : ""}</div>
        </div>
      </div>
    </div>`;
  document.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => { activeLesson = Number(button.dataset.lesson); renderLesson(); }));
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
    result.textContent = correct ? "¡Exacto! Ya tienes una idea más clara." : "Casi. Revisa la lección y vuelve a intentarlo.";
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

function lessonReflection(lessonName, category) {
  return `al probar «${lessonName}», ¿qué decisión tomaste y cómo comprobarías que funciona para otra persona que recién empieza en ${category.toLowerCase()}?`;
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
  return `<section class="quiz"><div class="lesson-number">PUNTO DE CONTROL FINAL</div><h4>${course.quiz.question}</h4><p>Elige tu respuesta y revisa lo aprendido antes de cerrar este curso.</p><form id="quiz-form">${course.quiz.options.map((option, index) => `<label class="quiz-option"><input type="radio" name="answer" value="${index}" ${savedAnswer === index ? "checked" : ""} required /><span>${option}</span></label>`).join("")}<button class="button button-outline" type="submit">Comprobar mi respuesta →</button></form><p id="quiz-result" class="quiz-result" role="status">${savedAnswer === course.quiz.answer ? "¡Punto de control superado!" : ""}</p></section>`;
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
document.querySelectorAll(".dialog-close").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
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
