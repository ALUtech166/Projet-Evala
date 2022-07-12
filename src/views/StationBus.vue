<template>
     <header-bar></header-bar>
     <div class="header">
          <h1 class="titre">
               STATION
          </h1>
     </div>


     <div class="body">
   
          
     </div>



</template>

<script>
import HeaderBar from "../components/partials/HeaderBar.vue";

export default {

     components: {
          HeaderBar
     },



}
</script>

<style scoped>
.body {
     background-image: linear-gradient(to right, #ffcc00, #006a4a3d);
     padding: 50px;
     text-align: center;
}

.btn-light:hover {
     background-color: transparent;
     border-color: #000;
}


.row {
     text-align: center;
}

#col {
     padding-top: 50px;
}


a {
     margin: 10px;
}

span {
     color: red;
     font-size: 30px;
}

em {
     font-size: 20px;
     color: #ffff;
     font-weight: bold;
}

p {
     text-align: center;
     color: black;
     font-family: 'Josefin Sans', sans-serif;
     font-size: 20px;

}


li {
     color: black;
     font-family: 'Josefin Sans', sans-serif;
     font-size: 20px;
     text-align: justify;


}



h1 {
     font-size: 25px;
     font-weight: bold;
     font-family: 'Jost', sans-serif;
}

.banner {
     max-width: 100%;
     border-radius: 12px;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
     padding: 10px;
     background-color: red;
     font-family: 'Jost';
     color: #fff;
}

.content {

     padding: 10px;
     font-family: 'Jost';
     color: #fff;
}



.tit {
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.273);
     background-color: #ffffff;
     border-radius: 12px;
}

h2 {
     font-family: 'Jost';
     text-align: center;
     padding: 10px;
}

.header {
     height: 30vh;
     background-image:
          url(../components/images/banner.jpg);
     background-size: cover;
     background-position: top;
     position: relative;


}


.titre {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;
     color: #fff;
     /*  animation: moveInRight 10s ease-out;
          animation-name: moveInLeft;
          animation-duration: 10s;
          animation-timing-function: ease-in; */
     text-transform: uppercase;
     font-size: 50px;
     font-weight: bold;
}


@keyframes moveInLeft {
     0% {
          opacity: 0;
          transform: translateX(-100px);
     }


     80% {
          transform: translateX(10px);
     }


     100% {
          opacity: 1;
          transform: translate(0) rotate(180deg);
     }
}



@keyframes moveInRight {
     0% {
          opacity: 0;
          transform: translateX(100px) rotate(0deg);
     }

     80% {
          transform: translateX(-20px);
     }

     100% {
          opacity: 1;
          transform: translate(0);
     }
}

@keyframes moveInBottom {
     0% {
          opacity: 0;
          transform: translateY(30px);
     }

     100% {
          opacity: 1;
          transform: translate(0);
     }
}
</style>