import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = () => {
      return(
      <nav class="navbar navbar-expand-lg navbar-light bg-white" id="mainNav" >
      <div class="container-fluid sticky-top">
         <a class="navbar-brand" href="../index.html">AB20c</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <a class="nav-link" aria-current="page" href="../index.html">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" href="#">Energie Stromerzeugung</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="../klima/">Klima</a>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Lineare Funktionen
                     </a>
                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="../linearefunktionen/">Lineare Funktionen</a></li>
                        <li>
                              <hr class="dropdown-divider"></hr>
                        </li>
                        <li><a class="dropdown-item" href="#">Unterseite 1</a></li>
                        <li><a class="dropdown-item" href="#">Unterseite 2</a></li>
                     </ul>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="../linearegleichungen/">Lineare Gleichungen</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="../Temperatur/">Temperatur</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="../Vektoren/">Vektoren</a>
                  </li>
            </ul>
         </div>
      </div>
   </nav>
   );
}

window.addEventListener('DOMContentLoaded', () => {
   let scrollPos = 0;
   const mainNav = document.getElementById('mainNav');
   const headerHeight = mainNav.clientHeight;
   window.addEventListener('scroll', function() {
       const currentTop = document.body.getBoundingClientRect().top * -1;
       if ( currentTop < scrollPos) {
           // Scrolling Up
           if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
               mainNav.classList.add('is-visible');
           } else {
               console.log(123);
               mainNav.classList.remove('is-visible', 'is-fixed');
           }
       } else {
           // Scrolling Down
           mainNav.classList.remove(['is-visible']);
           if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
               mainNav.classList.add('is-fixed');
           }
       }
       scrollPos = currentTop;
   });
})


  document.addEventListener("DOMContentLoaded", function(){
     
     window.addEventListener('scroll', function() {
         
        if (window.scrollY > 50) {
           document.getElementById('mainNav').classList.add('fixed-top');
           // add padding top to show content behind navbar
           const navbar_height = document.querySelector('.navbar').offsetHeight;
           document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('mainNav').classList.remove('fixed-top');
            // remove padding top from body
           document.body.style.paddingTop = '0';
        } 
     });
  });