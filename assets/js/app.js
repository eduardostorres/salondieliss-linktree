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
   La elección se guarda localmente para mantener
   la preferencia en futuras visitas.

   ========================================================================== */

function initializeThemeToggle(){

    const themeToggle =
        document.querySelector(".theme-toggle");

    const themeIcon =
        document.querySelector(".theme-toggle__icon i");

    const themeText =
        document.querySelector(".theme-toggle__text");

    const themeColorMeta =
        document.querySelector("meta[name='theme-color']");

    if(!themeToggle) return;



    const updateThemeControls = theme => {

        const isDarkMode =
            theme === "dark";

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDarkMode)
        );

        themeToggle.setAttribute(
            "aria-label",
            isDarkMode ? "Activar modo claro" : "Activar modo oscuro"
        );

        if(themeIcon){

            themeIcon.className =
                isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon";

        }

        if(themeText){

            themeText.textContent =
                isDarkMode ? "Modo claro" : "Modo oscuro";

        }

        if(themeColorMeta){

            themeColorMeta.setAttribute(
                "content",
                isDarkMode ? "#120D12" : "#FDF9F8"
            );

        }

    };



    const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";

    updateThemeControls(currentTheme);



    themeToggle.addEventListener(

        "click",

        () => {

            const activeTheme =
                document.documentElement.getAttribute("data-theme") || "light";

            const nextTheme =
                activeTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute(
                "data-theme",
                nextTheme
            );

            localStorage.setItem(
                "salondieliss-theme",
                nextTheme
            );

            updateThemeControls(nextTheme);

        }

    );

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
