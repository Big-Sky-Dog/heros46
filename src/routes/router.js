import Vue from 'vue';
// 1. 导入vue-router
import VueRouter from 'vue-router';

// 导入组件
import HeroList from '../views/heroes/List.vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';
import AddHeros from '../views/heroes/Add.vue'
import Edit from '../views/heroes/Edit.vue'

// 注册插件
Vue.use(VueRouter);

// 2. 创建路由对象，配置路由规则
const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes: [
    { name: 'home', path: '/', redirect: {name: 'heroes'} },
    // 路由规则
    { name: 'heroes', path: '/heroes', component: HeroList },
    { name: 'weapons', path: '/weapons', component: WeaponList },
    { name: 'equips', path: '/equips', component: EquipList },
    { name: 'heroadd', path: '/heroes/add', component: AddHeros},
    { name: 'heroedit', path: '/heroes/edit/:id', component: Edit}
  ]
});

// 3 导出模块
export default router;