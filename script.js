document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ANIMACIONES AL HACER SCROLL
    ========================= */

    const elementos = document.querySelectorAll(
        ".bienvenida, .tarjeta, .destacada, .invitacion, .final"
    );

    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("mostrar");
            }

        });

    }, {
        threshold: 0.15
    });


    elementos.forEach(function (elemento) {
        elemento.classList.add("oculto");
        observador.observe(elemento);
    });


    /* =========================
       BARRA DE PROGRESO
    ========================= */

    const barra = document.createElement("div");

    barra.className = "barra-progreso";

    document.body.appendChild(barra);


    window.addEventListener("scroll", function () {

        const alturaTotal =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (alturaTotal > 0) {

            const porcentaje =
                (window.scrollY / alturaTotal) * 100;

            barra.style.width = porcentaje + "%";

        }

    });


    /* =========================
       BOTÓN VOLVER ARRIBA
    ========================= */

    const botonArriba = document.createElement("button");

    botonArriba.textContent = "↑";

    botonArriba.className = "volver-arriba";

    document.body.appendChild(botonArriba);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            botonArriba.classList.add("activo");

        } else {

            botonArriba.classList.remove("activo");

        }

    });


    botonArriba.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       PARALLAX DEL FONDO
    ========================= */

    const fondo = document.querySelector(".fondo");

    if (fondo) {

        window.addEventListener("scroll", function () {

            const movimiento =
                window.scrollY * 0.15;

            fondo.style.transform =
                "translateY(" + movimiento + "px)";

        });

    }


    /* =========================
       EFECTO 3D DE LAS TARJETAS
    ========================= */

    const tarjetas =
        document.querySelectorAll(".tarjeta");


    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener("mousemove", function (evento) {

            const rect =
                tarjeta.getBoundingClientRect();

            const x =
                evento.clientX - rect.left;

            const y =
                evento.clientY - rect.top;

            const centroX =
                rect.width / 2;

            const centroY =
                rect.height / 2;

            const rotacionX =
                (y - centroY) / 25;

            const rotacionY =
                (centroX - x) / 25;

            tarjeta.style.transform =
                "perspective(800px) rotateX(" +
                rotacionX +
                "deg) rotateY(" +
                rotacionY +
                "deg) translateY(-8px)";

        });


        tarjeta.addEventListener("mouseleave", function () {

            tarjeta.style.transform = "";

        });

    });


    /* =========================
       ANIMACIÓN DE LOS NÚMEROS
    ========================= */

    const numeros =
        document.querySelectorAll(".fecha span");


    numeros.forEach(function (numero, indice) {

        numero.style.opacity = "0";

        numero.style.transform =
            "translateY(-20px)";


        setTimeout(function () {

            numero.style.transition =
                "all 0.6s ease";

            numero.style.opacity = "1";

            numero.style.transform =
                "translateY(0)";

        }, 500 + indice * 200);

    });


    /* =========================
       ENLACES INTERNOS
    ========================= */

    const enlaces =
        document.querySelectorAll('a[href^="#"]');


    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            const id =
                enlace.getAttribute("href");

            const destino =
                document.querySelector(id);

            if (destino) {

                evento.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       EFECTO EN LA HORA
    ========================= */

    const hora =
        document.querySelector(".hora-grande");


    if (hora) {

        setInterval(function () {

            hora.classList.toggle("brillo-hora");

        }, 1500);

    }


    /* =========================
       CAMBIO DEL TÍTULO DE LA PESTAÑA
    ========================= */

    const tituloOriginal =
        document.title;


    document.addEventListener(
        "visibilitychange",
        function () {

            if (document.hidden) {

                document.title =
                    "🎉 ¡Te esperamos!";

            } else {

                document.title =
                    tituloOriginal;

            }

        }
    );

});