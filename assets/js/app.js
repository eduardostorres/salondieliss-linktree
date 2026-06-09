/* ==========================================================================
   EVENTO PRINCIPAL

   Espera a que todo el DOM esté disponible
   antes de ejecutar cualquier lógica.

   ========================================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeApp();

    }
);



/* ==========================================================================
   INICIALIZADOR GENERAL

   Punto de entrada único para toda la aplicación.

   Desde aquí se ejecutan todos los módulos.

   ========================================================================== */

function initializeApp(){

    console.log(
        "%cSalonDiEliss",
        `
        color:#C99487;
        font-size:18px;
        font-weight:bold;
        `
    );

    console.log(
        "%cAplicación inicializada correctamente.",
        "color:#888;"
    );

    initializeThemeToggle();

    initializeAnimations();

    initializeButtonEffects();

}






/* ==========================================================================
   SELECTOR DE TEMA

   Permite alternar entre light mode y dark mode.
   La preferencia se guarda en localStorage y, si no existe,
   se toma la configuración del sistema del visitante.

   ========================================================================== */

function initializeThemeToggle(){

    const themeToggle =
        document.querySelector(".theme-toggle");

    const themeToggleText =
        document.querySelector(".theme-toggle__text");

    const themeColorMeta =
        document.querySelector("#theme-color-meta");

    const storedTheme =
        localStorage.getItem("salondieliss-theme");

    const systemPrefersDark =
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const documentTheme =
        document.documentElement.dataset.theme;

    const initialTheme =
        storedTheme || documentTheme || (systemPrefersDark ? "dark" : "light");

    applyTheme(
        initialTheme,
        themeToggle,
        themeToggleText,
        themeColorMeta
    );

    if(!themeToggle) return;



    themeToggle.addEventListener(

        "click",

        () => {

            const currentTheme =
                document.documentElement.dataset.theme || "light";

            const nextTheme =
                currentTheme === "dark" ? "light" : "dark";

            localStorage.setItem(
                "salondieliss-theme",
                nextTheme
            );

            applyTheme(
                nextTheme,
                themeToggle,
                themeToggleText,
                themeColorMeta
            );

        }

    );

}

function applyTheme(
    theme,
    themeToggle,
    themeToggleText,
    themeColorMeta
){

    const isDarkTheme =
        theme === "dark";

    document.documentElement.dataset.theme =
        isDarkTheme ? "dark" : "light";

    if(themeToggle){

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDarkTheme)
        );

        themeToggle.setAttribute(
            "aria-label",
            isDarkTheme ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        );

    }

    if(themeToggleText){

        themeToggleText.textContent =
            isDarkTheme ? "Dark" : "Light";

    }

    if(themeColorMeta){

        themeColorMeta.setAttribute(
            "content",
            isDarkTheme ? "#17100F" : "#D6AAA0"
        );

    }

}


/* ==========================================================================
   ANIMACIONES DE ENTRADA

   Utiliza Intersection Observer para detectar
   cuándo un elemento entra en pantalla.

   Ventajas:
   - Excelente rendimiento.
   - Menor consumo de recursos.
   - Mejor experiencia visual.

   ========================================================================== */

function initializeAnimations(){

    const animatedElements = [

        document.querySelector(".brand-title"),

        document.querySelector(".brand-subtitle"),

        document.querySelector(".cta-button"),

        document.querySelector(".social-container"),

        document.querySelector(".map")

    ];

    animatedElements.forEach(
        element => {

            if(!element) return;

            element.classList.add("fade-in");

        }
    );



    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(

                entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }

            );

        },

        {
            threshold:0.15
        }

    );



    animatedElements.forEach(

        element => {

            if(element){

                observer.observe(element);

            }

        }

    );

}



/* ==========================================================================
   EFECTO DE PULSACIÓN EN CTA

   Genera una pequeña sensación táctil
   cuando el usuario interactúa con el botón.

   ========================================================================== */

function initializeButtonEffects(){

    const ctaButton =
        document.querySelector(".cta-button");

    if(!ctaButton) return;



    ctaButton.addEventListener(

        "click",

        () => {

            ctaButton.animate(

                [

                    {
                        transform:"scale(1)"
                    },

                    {
                        transform:"scale(.97)"
                    },

                    {
                        transform:"scale(1)"
                    }

                ],

                {

                    duration:220,

                    easing:"ease-out"

                }

            );

        }

    );

}



/* ==========================================================================
   UTILIDADES FUTURAS

   Espacio reservado para funciones auxiliares.

   Ejemplos:
   - Analytics
   - Tracking de clics
   - Formularios
   - Reservaciones
   - Integraciones externas

   ========================================================================== */



/**
 * --------------------------------------------------------------------------
 * TRACKING DE EVENTOS
 * --------------------------------------------------------------------------
 *
 * Plantilla para futuras integraciones.
 *
 * Ejemplo:
 *
 * trackEvent(
 *   "whatsapp_click",
 *   {
 *      source:"landing"
 *   }
 * );
 *
 * --------------------------------------------------------------------------
 */

function trackEvent(
    eventName,
    payload = {}
){

    console.log(
        "[TRACK]",
        eventName,
        payload
    );

}



/**
 * --------------------------------------------------------------------------
 * OBTENER ELEMENTO
 * --------------------------------------------------------------------------
 *
 * Wrapper sencillo para querySelector.
 *
 * --------------------------------------------------------------------------
 */

function $(
    selector
){

    return document.querySelector(
        selector
    );

}



/**
 * --------------------------------------------------------------------------
 * OBTENER MÚLTIPLES ELEMENTOS
 * --------------------------------------------------------------------------
 *
 * Wrapper sencillo para querySelectorAll.
 *
 * --------------------------------------------------------------------------
 */

function $$(
    selector
){

    return document.querySelectorAll(
        selector
    );

}



/* ==========================================================================
   FIN DEL ARCHIVO

   Si llegaste hasta aquí:
   ✨ Que el cabello quede hermoso
   ☕ Y que el deploy salga a la primera.

   ========================================================================== */