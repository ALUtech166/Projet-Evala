import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import KozahView from "../views/KozahView.vue";
import EvalaView from "../views/EvalaView.vue"
import AkpemaView from "../views/AkpemaView.vue"
import HabyeView from "../views/HabyeView.vue"
import KondonaView from "../views/KondonaView.vue"
import HotelView from "../views/HotelView.vue"
import Bar_restoView from '@/views/Bar_restoView.vue';
import TourismeView from '@/views/TourismeView.vue';
import PharmacieView from '@/views/PharmacieView.vue';
import SanteView from '@/views/SanteView.vue';
import BanqueView from '@/views/BanqueView.vue';
import RadioView from '@/views/RadioView.vue';
import BoiteView from '@/views/BoiteView.vue';
import MarcheView from '@/views/MarcheView.vue';
import ReligionView from '@/views/ReligionView.vue';
import GymView from '@/views/GymView.vue'
import GalleryView from '@/views/GalleryView.vue';
import AlbumEvala from '@/views/AlbumEvala.vue';
import AlbumAkpema from '@/views/AlbumAkpema.vue';
import AlbumHabye from '@/views/AlbumHabye.vue';
import BlogView from '@/views/BlogView.vue'
import PubliciteView from '@/views/PubliciteView.vue';
import HotelKara from '../components/Hotels/HotelKara.vue';
import ReservationHotel from '@/components/Hotels/ReservationHotel.vue';
import MapPage from '@/components/Hotels/MapPage.vue';
import LoginPage from '@/components/ui/LoginPage.vue';
import SinginPage from '@/components/ui/SinginPage.vue';
import UserView from '@/components/layout/UserView.vue';
import ArticleView from '@/components/layout/ArticleView.vue';
import SocieteView from '@/components/layout/SocieteView.vue';
import CheckoutView from '@/components/layout/CheckoutView.vue';
import StationView from '@/views/StationView.vue';
import GuichetView from '@/views/GuichetView.vue';
import TelecomView from '@/views/TelecomView.vue';
import EventsView from '@/views/EventsView.vue';
import ProgramEvala from '@/views/ProgramEvala.vue'
import PortalView from '../components/layout/PortalView.vue';


const routes = [{
    path: '/user-profile',
    name: 'User',
    component: UserView,
   
  },
  {
    path: '/article',
    name: 'Article',
    component: ArticleView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  },
  {
    path: '/societe',
    name: 'Societe',
    component: SocieteView
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsView
  },

  {
    path: '/program',
    name: 'Program',
    component: ProgramEvala
  },

  {
    path: '/portal',
    name: 'Portal',
    component: PortalView
  },



  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'SiginginPage',
    component: SinginPage
  },
  {
    path: '/pub',
    name: 'pub',
    component: PubliciteView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: HotelView
  },
  {
    path: '/station',
    name: 'station',
    component: StationView
  },
  {
    path: '/guichet',
    name: 'guichet',
    component: GuichetView
  },
  {
    path: '/telecom',
    name: 'telecom',
    component: TelecomView
  },
  {
    path: '/hotel-kara',
    name: 'hotel-kara',
    component: HotelKara
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: ReservationHotel
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage
  },
  {
    path: '/bar-resto',
    name: 'bar-resto',
    component: Bar_restoView
  },
  {
    path: '/tourisme',
    name: 'tourisme',
    component: TourismeView
  },
  {
    path: '/pharmacie',
    name: 'pharmacie',
    component: PharmacieView
  },
  {
    path: '/sante',
    name: 'sante',
    component: SanteView
  },
  {
    path: '/banque',
    name: 'banque',
    component: BanqueView
  },
  {
    path: '/radio',
    name: 'radio',
    component: RadioView
  },
  {
    path: '/boite',
    name: 'boite',
    component: BoiteView
  },
  {
    path: '/marche',
    name: 'marche',
    component: MarcheView
  },
  {
    path: '/religion',
    name: 'religion',
    component: ReligionView
  },
  {
    path: '/gym',
    name: 'gym',
    component: GymView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/album-evala',
    name: 'album',
    component: AlbumEvala
  },
  {
    path: '/album-akpema',
    name: 'album-akpema',
    component: AlbumAkpema
  },
  {
    path: '/album-habye',
    name: 'album-haby',
    component: AlbumHabye
  },

  {
    path: '/evala',
    name: 'evala',
    component: EvalaView
  },
  {
    path: '/akpema',
    name: 'akpema',
    component: AkpemaView
  },
  {
    path: '/habye',
    name: 'habye',
    component: HabyeView
  },

  {
    path: '/kozah',
    name: 'kozah',
    component: KozahView
  },
  {
    path: '/kondona',
    name: 'kondona',
    component: KondonaView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router