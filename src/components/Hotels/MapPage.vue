<template>

     <div class="mapouter">
          <div class="gmap_canvas"><iframe width="1000" height="500" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=kara,Togo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                    scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br>
          </div>
     </div>
</template>

<script>
     export default {

     }
</script>

<style scoped>
     .mapouter {
          position: relative;
          text-align: right;
          height: 100%;
          width: 100%;
          text-align: center;
     }

     .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 100%;
          width: 100%;
     }


     .overview {
          background-color: #fff;
          width: 100%;
     }
</style>