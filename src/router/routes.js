// import SearchFor from '../pages/SearchFor.vue'
import Login from '../pages/Profile/Login/Login.vue';
import Register from '../pages/Profile/Register/Register.vue';

const Home = () => import('../pages/Home/Home.vue');
const SearchFor = () => import('../pages/SearchFor/SearchFor.vue');
const Search = () => import('../pages/Search/Search.vue');
const CategoryList = () => import('../pages/CategoryList/CategoryList.vue');
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue');
const Profile = () => import('../pages/Profile/Profile.vue');


export default[
    {
        path:'/home',
        component:Home,
        meta: {
            isShoww: true
          }
    },
    {
        path:'/search',
        component:Search,
        meta: {
            isShoww: true
          }
    },
    {
        path:'/categoryList',
        component:CategoryList,
        meta: {
            isShoww: true
          }
    }, 
    {
        path:'/shopCart',
        component:ShopCart,
        meta: {
            isShoww: true
          }
    },
    {
        path:'/searchfor',
        component:SearchFor,
       
    },
    {
        path:'/profile',
        component:Profile,
        
    },
    {
        path:'/',
        redirect:'/home'
    },
  
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '',
        redirect: '/profile/login'
      }
    
   
]