// Menú
document.addEventListener('DOMContentLoaded', function() {
    var elemssidenav = document.querySelectorAll('.sidenav');
    var instancessidenav = M.Sidenav.init(elemssidenav);
   });

//Formulario

((d) => {
    // Se le coloca $ para que sepamos que es un elemnto dentro del DOM.
    const $form = d.querySelector(".contact__form"),
    $loader = d.querySelector(".contact-form__loader"),
    $response = d.querySelector(".modales-content__form");

    $form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/rosaidabhz@gmail.com",{
            method : "POST" , 
            body: new FormData(e.target)
        })

        // SI LA RTA ES OK, SE EJECUTA ESTO.
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            console.log(json);
            $loader.classList.add("none");

            // location controla todas las partes de la URL.
            location.hash = "#gracias";
            $form.reset();

        })
        // DE LO CONTRARIO, EJECUTA EL CATCH PARA AGARRAR EL ERROR.
        .catch((err) => {
            console.log(err);
            let mensaje = err.statusText || "Error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${mensaje}`;
        }).finally(() => {
            $loader.classList.add("none");
            setTimeout(()=>{
                location.hash = "close";
            },3000);
        });
        
        
    })
})(document);


// Animaciones
window.sr = ScrollReveal();

    sr.reveal('.header' , {
        duration: 3000 ,
        origin: 'bottom', 
        distance: '-50px'

    });
    sr.reveal('.container-links' , {
         duration: 3000 ,
         origin: 'bottom', 
         distance: '100px'

    });
     sr.reveal('.hero-image__container' , {
         duration: 3000 ,
         origin: 'bottom', 
         distance: '-100px'
    });
    sr.reveal('.about__container' , {
        duration: 1500 ,
        origin: 'left', 
        distance: '400px'

    });
    sr.reveal('.skills__article' ,  {
        duration: 1500 ,
        origin: 'left', 
        distance: '50%'
    });
    sr.reveal('.section__projects' , {
        duration: 1500 ,
        origin: 'left', 
        distance: '20%'
    });
    sr.reveal('.services__container' , {
        duration: 1500 ,
        origin: 'left', 
        distance: '400px'
    });
    sr.reveal('.section__contact' , {
        duration: 1500 ,
        origin: 'bottom', 
        distance: '400px'
    });
