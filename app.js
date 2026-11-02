const courses = [
  { id: "html-css", title: "Tu primera página web", category: "Desarrollo web", level: "Desde cero", duration: "3 h 20 min", lessons: 8, color: "lilac", icon: "⌘", description: "Crea una página web desde cero y descubre cómo el código transforma una idea en algo que puedes compartir con el mundo.", instructor: "Lucía Torres", initials: "LT", lessonsList: ["Cómo funciona la web", "Tu primer documento HTML", "Dale estilo con CSS", "Colores y tipografía", "Diseña para móvil", "Imágenes y enlaces", "Tu página personal", "Publica tu proyecto"], quiz: { question: "¿Qué lenguaje usamos para definir la estructura de una página web?", options: ["CSS", "HTML", "JavaScript"], answer: 1 } },
  { id: "python", title: "Python para mentes curiosas", category: "Datos e IA", level: "Desde cero", duration: "4 h 10 min", lessons: 10, color: "peach", icon: "⌘", description: "Da tus primeros pasos en programación con un lenguaje sencillo, útil y lleno de posibilidades.", instructor: "Mateo Ríos", initials: "MR", lessonsList: ["Pensar como programador", "Tu primer programa", "Datos y variables", "Decisiones con if", "Repetir con bucles", "Listas que organizan", "Funciones útiles", "Explora tus datos", "Mini proyecto: adivina", "Próximos pasos"], quiz: { question: "¿Qué palabra usamos en Python para definir una función?", options: ["function", "def", "make"], answer: 1 } },
  { id: "figma", title: "Diseña ideas con Figma", category: "Diseño digital", level: "Principiante", duration: "2 h 45 min", lessons: 7, color: "mint", icon: "✳", description: "Convierte ideas en diseños digitales claros. Aprende los fundamentos del diseño de interfaces mientras construyes una app.", instructor: "Sofía Vidal", initials: "SV", lessonsList: ["Ideas y diseño digital", "Explora Figma", "Color y contraste", "Tipografía con intención", "Componentes reutilizables", "Diseña una app", "Comparte tu prototipo"], quiz: { question: "¿Qué principio ayuda a que el texto sea fácil de leer?", options: ["Contraste", "Decoración", "Saturación"], answer: 0 } },
  { id: "javascript", title: "JavaScript: hazlo interactivo", category: "Desarrollo web", level: "Principiante", duration: "5 h 00 min", lessons: 12, color: "yellow", icon: "↗", description: "Añade interacción a tus páginas web y crea experiencias que responden a las personas.", instructor: "Nicolás León", initials: "NL", lessonsList: ["De la página a la acción", "Variables y valores", "Texto y números", "Botones que responden", "Decisiones en código", "Listas dinámicas", "Funciones", "El DOM", "Eventos", "Construye un contador", "Construye un juego", "Sigue aprendiendo"], quiz: { question: "¿Qué usamos en JavaScript para reaccionar a un clic?", options: ["Un evento", "Un estilo", "Una etiqueta"], answer: 0 } },
  { id: "ia", title: "Inteligencia artificial en tu día", category: "Datos e IA", level: "Principiante", duration: "2 h 30 min", lessons: 6, color: "blue", icon: "✧", description: "Entiende cómo funciona la IA generativa y aprende a usarla con criterio en tu vida y trabajo.", instructor: "Valentina Cruz", initials: "VC", lessonsList: ["Qué es (y qué no es) la IA", "Cómo aprende un modelo", "Prompts claros y útiles", "Imágenes con IA", "Límites y responsabilidad", "Tu asistente personal"], quiz: { question: "¿Qué ayuda a obtener una respuesta más útil de una IA?", options: ["Una instrucción clara y específica", "Escribir más rápido", "Usar palabras complicadas"], answer: 0 } },
  { id: "datos", title: "Tus primeros pasos con datos", category: "Datos e IA", level: "Desde cero", duration: "3 h 00 min", lessons: 8, color: "rose", icon: "◌", description: "Aprende a leer, ordenar y contar historias con datos usando hojas de cálculo.", instructor: "Diego Acosta", initials: "DA", lessonsList: ["Preguntas que cuentan", "Ordena tus datos", "Filtra lo importante", "Fórmulas cotidianas", "Gráficos que explican", "Encuentra patrones", "Cuenta una historia", "Tu primer informe"], quiz: { question: "¿Qué tipo de gráfico suele funcionar bien para comparar categorías?", options: ["Gráfico de barras", "Mapa de calor siempre", "Texto sin ordenar"], answer: 0 } },
];

const config = window.PRISMA_SUPABASE_CONFIG ?? {};
const configured = Boolean(config.url && config.anonKey);
let supabase;
let currentUser = null;
let authMode = "signin";
let progress = new Set();
let activeCourse = null;
let activeLesson = 0;
let activeCategory = "Todos";
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
  document.querySelector("#dialog-content").innerHTML = `
    <div class="lesson-heading"><span class="lesson-category">${course.category} / ${course.level}</span><h2 id="dialog-title">${course.title}</h2><p>${course.description}</p></div>
    <div class="lesson-layout">
      <aside class="lesson-sidebar"><div class="lesson-course-label">CONTENIDO DEL CURSO <span>${course.lessonsList.length} lecciones</span></div>
        ${course.lessonsList.map((lesson, index) => `<button class="lesson-item ${index === activeLesson ? "selected" : ""} ${progress.has(`${course.id}:${index}`) ? "completed" : ""}" type="button" data-lesson="${index}"><span class="lesson-status">${progress.has(`${course.id}:${index}`) ? "✓" : String(index + 1).padStart(2, "0")}</span><span>${lesson}</span>${index === activeLesson ? '<span class="lesson-now">●</span>' : ""}</button>`).join("")}
      </aside>
      <div class="lesson-main">
        <div class="lesson-player"><div class="player-orb">✳</div><span class="player-caption">UNA IDEA A LA VEZ</span><div class="player-controls"><span>▶</span><div class="player-progress"><i></i></div><span>04:32</span><span>⛶</span></div></div>
        <div class="lesson-text"><div class="lesson-number">LECCIÓN ${String(activeLesson + 1).padStart(2, "0")} <span>·</span> ${course.duration}</div><h3>${lessonName}</h3>
          <p>${lessonCopy(course, activeLesson)}</p>
          <div class="lesson-callout"><span>✦</span><p><strong>Prueba esto:</strong> abre una nota y escribe una idea que te gustaría construir con lo que acabas de aprender.</p></div>
          ${isLast ? renderQuiz(course) : ""}
          <div class="lesson-actions"><button class="button button-dark" id="complete-lesson" type="button">${done ? "Lección completada ✓" : "Marcar como completada"} <span aria-hidden="true">→</span></button>${!isLast ? `<button class="text-link" id="next-lesson" type="button">Siguiente lección <span aria-hidden="true">→</span></button>` : ""}</div>
        </div>
      </div>
    </div>`;
  document.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => { activeLesson = Number(button.dataset.lesson); renderLesson(); }));
  document.querySelector("#complete-lesson").addEventListener("click", () => completeLesson(course, activeLesson));
  document.querySelector("#next-lesson")?.addEventListener("click", () => { activeLesson += 1; renderLesson(); });
  document.querySelector("#quiz-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = Number(new FormData(event.currentTarget).get("answer"));
    const result = document.querySelector("#quiz-result");
    const correct = selected === course.quiz.answer;
    result.textContent = correct ? "¡Exacto! Ya tienes una idea más clara." : "Casi. Revisa la lección y vuelve a intentarlo.";
    result.className = `quiz-result ${correct ? "correct" : "incorrect"}`;
    if (correct) {
      if (!configured) showToast("Respuesta correcta. Configura Supabase para guardar tu progreso en la nube.");
      else if (!currentUser) openAuth();
      else saveProgress(course, activeLesson, selected);
    }
  });
}

function lessonCopy(course, lessonIndex) {
  if (lessonIndex === 0) return `Todo lo que usamos en internet empezó con una idea. En este curso de ${course.category.toLowerCase()} vamos a convertir la curiosidad en algo concreto, paso a paso. No hace falta experiencia previa: empezamos por lo esencial y practicamos desde el primer momento.`;
  return `En esta parte de ${course.title.toLowerCase()}, vamos a explorar ${course.lessonsList[lessonIndex].toLowerCase()}. Sigue el ejemplo, prueba una variación propia y no te preocupes por equivocarte: experimentar es parte del aprendizaje.`;
}

function renderQuiz(course) {
  return `<section class="quiz"><div class="lesson-number">UN ÚLTIMO RETO</div><h4>${course.quiz.question}</h4><form id="quiz-form">${course.quiz.options.map((option, index) => `<label class="quiz-option"><input type="radio" name="answer" value="${index}" required /><span>${option}</span></label>`).join("")}<button class="button button-outline" type="submit">Comprobar respuesta →</button></form><p id="quiz-result" class="quiz-result" role="status"></p></section>`;
}

async function completeLesson(course, lessonIndex) {
  if (!configured) {
    showToast("Para guardar tu progreso en la nube, configura tu proyecto de Supabase. Consulta la guía en README.");
    return;
  }
  if (!currentUser) { openAuth(); return; }
  const saved = await saveProgress(course, lessonIndex);
  if (!saved) return;
  renderLesson();
  updateAccountButton();
  showToast("Progreso guardado en tu cuenta. ¡Vas muy bien!");
}

async function saveProgress(course, lessonIndex, quizAnswer = null) {
  if (!configured || !currentUser || !supabase) return false;
  const { error } = await supabase.from("course_progress").upsert({
    user_id: currentUser.id,
    course_id: course.id,
    lesson_id: lessonIndex,
    completed: true,
    quiz_answer: quizAnswer,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id,course_id,lesson_id" });
  if (error) {
    showToast(`No se pudo guardar el progreso: ${error.message}`);
    return false;
  }
  progress.add(`${course.id}:${lessonIndex}`);
  return true;
}

async function loadProgress() {
  if (!supabase || !currentUser) return;
  const { data, error } = await supabase.from("course_progress").select("course_id,lesson_id").eq("user_id", currentUser.id);
  if (error) { showToast(`No se pudo cargar tu progreso: ${error.message}`); return; }
  progress = new Set(data.map((row) => `${row.course_id}:${row.lesson_id}`));
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
