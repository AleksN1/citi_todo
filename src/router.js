import { createRouter, createWebHashHistory } from "vue-router";
import CitiPage from '@/pages/CitiPage.vue';
import ToDoPage from '@/pages/ToDoPage.vue';
import LoginBlock from '@/components/LoginBlock.vue';
import RegBlock from '@/components/RegBlock.vue';



export default new createRouter ({
    history: createWebHashHistory(),
    //mode: "history",
    routes: [
        { path: '/', name: 'Citi', component: CitiPage, alias:"/",
            children:[
                { path: '/', name:'Log', component: LoginBlock, alias:"/"}, 
                { path: '/Reg', name:'Reg', component: RegBlock },
            ]
        },    
        { path: '/ToDo', name: "ToDo", component: ToDoPage }
    ]
});
