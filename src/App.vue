<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" id="vue-logo" />
    <div class="title">What do I do today?</div>
    <input v-model="myTodo"/>
    <button @click="addToDo">Add</button>
    <div v-if="errors !==''" id='errors'>{{errors}}</div>
  </div>
</template>

<script>
import {db} from '@/main'
export default {
  name: 'App',
  data: function(){
    return {
      myTodo: "",
      errors: ''
    }
  },
  methods: {
    addToDo: function(){
      this.errors ='';
      if(this.myTodo !==''){
        db.collection('items').add({
          title: this.myTodo,
          createdAt: Date.now()
        }).then((response)=>{
          console.log(this.myTodo);
          if (response){
            this.myTodo=''
          }
        }).catch((error)=>{
          this.errors=error
        })
      }else{
        this.errors='Enter a todo';
      }
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

body, html, #app{
  background: #8ac8e5;
}

.home{
  width: 300px;
  margin: auto;
}

#vue-logo{
  width: 100px;
}

input, button{
  border: 0;
  width: 100%;
  margin: 0 0 10px;
  padding: 7px;
}

input{
  font-size: 12px;
}

button{
  background: #43b823;
  border: 0;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.title{
  font-size: 14px;
  font-weight: 700;
  padding: 0 0 10px 0;
  margin: 0 0 10px 0;
  border-bottom: 1px solid #666;
}

#errors{
  background: red;
  color: #fff;
  padding: 5px;
}

</style>
