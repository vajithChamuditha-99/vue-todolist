import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import firebase from 'firebase'


Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyAlKlJN06EoC7Ws17iS_yLTr7msw-x8pvI",
  authDomain: "vue-todolist-572f0.firebaseapp.com",
  projectId: "vue-todolist-572f0",
  storageBucket: "vue-todolist-572f0.appspot.com",
  messagingSenderId: "383206235162",
  appId: "1:383206235162:web:78454fc82529223a5845a3",
  measurementId: "G-2S2L11VRQD"
}

firebase.initializeApp(config);

export const db= firebase.firestore();


new Vue({
  render: h => h(App),
}).$mount('#app')
