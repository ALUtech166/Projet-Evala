<template>

  <div class="container-fluid">

    <div class="app">

      <div class="login-popup close">
        <div class="box">
          <div class="container">
            <img src="./components/images/Faure-pop.jpg" alt="" class="img-fluid">
          </div>
          <div class="form">
            <div class="close">&times;</div>

          </div>
        </div>
      </div>

      <router-view />
    </div>

    <footer-bar></footer-bar>

  </div>
</template>

<script>
  import FooterBar from './components/partials/FooterBar.vue'
  import {
    mapGetters
  } from 'vuex'



  export default {
    components: {
      FooterBar

    },

    computed: {
      ...mapGetters(['user'])
    },

    mounted() {
      const loginPopup = document.querySelector(".login-popup");
      const close = document.querySelector(".close");

      window.addEventListener("load", function () {

        showPopup();
        setTimeout(function () {
          loginPopup.classList.add("show");
        }, 1000)

      })

      function showPopup() {
        const timeLimit = 0 // seconds;
        let i = 0;
        const timer = setInterval(function () {
          i++;
          if (i == timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
          }
          console.log(i)
        }, 5000);
      }


      close.addEventListener("click", function () {
        loginPopup.classList.remove("show");
      })


    },


  }
</script>

<style>
  @import './global-style.css';


  .login-popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1099;
    background-color: rgba(0, 0, 0, 0.6);
    visibility: hidden;
    opacity: 0;
    transition: all 1s ease;
    text-align: center;
  }

  .login-popup.show {
    visibility: visible;
    opacity: 1;
  }

  .login-popup .box {

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    opacity: 0;
    margin-left: 50px;
    transition: all 1s ease;
    text-align: center;

  }

  .login-popup.show .box {
    opacity: 1;
    margin-left: 0;
  }

  .login-popup .box .img-area {
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    overflow: hidden;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-popup .box .img-area h1 {
    font-size: 30px;
  }

  .login-popup .box .img-area .img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    animation: zoomInOut 7s linear infinite;
    z-index: -1;

    text-align: center;

  }

  @keyframes zoomInOut {

    0%,
    100% {
      transform: scale(5);
    }


    50% {
      transform: scale(2);
    }
  }

  .login-popup .box .form {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 40px 30px;
  }

  .login-popup .box .form h1 {
    color: #000000;
    font-size: 30px;
    margin: 0 0 30px;
  }

  .login-popup .box .form .form-control {
    height: 45px;
    margin-bottom: 30px;
    width: 100%;
    border: none;

    font-size: 15px;
    color: #000000;
  }

  .login-popup .box .form .form-control:focus {
    outline: none;
  }

  .login-popup .box .form label {
    font-size: 15px;
    color: #555555;
  }

  .login-popup .box .form .btn {
    width: 100%;
    background-color: #E91E63;
    margin-top: 40px;
    height: 45px;
    border: none;
    border-radius: 25px;
    font-size: 15px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
  }

  .login-popup .box .form .btn:focus {
    outline: none;
  }

  .login-popup .box .form .close {
    position: absolute;
    right: 10px;
    top: 0px;
    font-size: 30px;
    cursor: pointer;
  }

  /*responsive*/
  @media(max-width: 767px) {
    .login-popup .box {
      width: calc(100% - 30px);
    }

    .login-popup .box .img-area {
      display: none;
    }

    .login-popup .box .form {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>