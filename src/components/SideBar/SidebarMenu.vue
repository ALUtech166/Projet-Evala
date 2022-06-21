<script>
  import SidebarLink from '../SideBar/SidebarLink.vue'
  import axios from 'axios'
  import {
    collapsed,
    toggleSidebar,
    sidebarWidth
  } from '../state'

  export default {
    props: {},
    components: {
      SidebarLink
    },
    data() {
      return {
        login: [],
        errors: []
      }
    },
    setup() {
      return {
        collapsed,
        toggleSidebar,
        sidebarWidth
      }
    },

    // Fetches posts when the component is created.
    created(data) {
      axios.get(`api/register`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.canton = response.data
          console.log(data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>K</div>
        <div>E</div>
      </span>
      <span v-else>
        
        <img class="profile" src="./serge.jpg" alt=""> <br>
         Kofi Anan

        <hr class="style-hr">


      </span>



    </h1>

    <br>
    <br>


    <div class="side-bar">
      <SidebarLink to="/user-profile" icon="fa-solid fa-user">Profile</SidebarLink>
      <SidebarLink to="/societe" icon="fas fa-chart-bar">Société</SidebarLink>
      <SidebarLink to="/article" icon="fa-solid fa-cart-shopping">Articles</SidebarLink>
      <SidebarLink to="/login" icon="fa-solid fa-right-from-bracket">Deconnecter</SidebarLink>


    </div>


    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left" />
    </span>
  </div>

</template>


<style>
  .profile {
    border: 5px solid #fff;
    border-radius: 50%;
  }

  :root {
    --sidebar-bg-color: #006A4A;
    --sidebar-item-hover: #FFCE00;
    --sidebar-item-active: #FFCE00;

  }

  a {
    text-decoration: none;
    color: #fff;

  }

  a:hover,
  a:active {
    color: #fff;
    ;
  }

  .sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    font-family: 'jost';
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5rem;

    transition: 0.5s ease-in-out;

    display: flex;
    flex-direction: column;
  }

  span,
  .side-bar {
    font-size: 20px;
  }

  .sidebar h1 {
    height: 2.5em;
  }

  .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }
</style>