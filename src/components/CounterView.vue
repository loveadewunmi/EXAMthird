<template>
  <div class="container">
    <div class="counter">{{   getCounter }}</div>
    <div class="counter_input"><input  v-model="value" type="number" placeholder="setvalue"  /></div>
    <div class="count_btns">
      <button @click="decrement" >-</button>
      <button @click="increment">+</button>
      <button  @click="setValue">setvalue</button>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value: ""
    }
  },
  computed:{
    getCounter(){
      return this.$store.getters.getCounter
    }
  },
  methods:{

    decrement(){
      this.$store.commit('decrement')
    },
    increment() {
      this.$store.commit('increment')
    },
    setValue(){      
      this.$store.commit('setValue', this.value)
    }, 

    reset(){
      this.$store.commit('reset' )
    }


  }
};
</script>

<style scoped>
.container{
  top: 0;

  display:flex;
  background: hotpink;
  height: 50vh;  
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  gap:1rem;
  
  flex-direction: column;
  box-sizing: border-box;
  max-width: 50%;
  margin: 0 auto;  
  
}
.counter{
  display:flex;    
  
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 2rem;
  
} 

.counter_input input:active, .counter_input input:focus{
  outline: none;
}
.counter_input input{
  outline: none;
  padding: 1rem 0.5rem;
  width: auto;
  border-radius: 5px;  
  border: 1px solid gainsboro;
}

.count_btns{
  display:flex;
  gap:1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.count_btns button{
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 20px;
  border-radius: 5px;



}


</style>