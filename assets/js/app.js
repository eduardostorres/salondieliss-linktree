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

    initializeAnimations();

    initializeButtonEffects();

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