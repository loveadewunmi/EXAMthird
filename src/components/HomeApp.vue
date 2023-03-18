<template>
  <main>
    <h1>Home</h1>
    <p></p>
    <div class="btn">
      <button class="btn-link">
        <router-link to="/counter">COUNTER</router-link>
      </button>
      <button type="btn-link" class="btn-link">
        <router-link to="/sdsdsd">404 Page</router-link>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeApp",
};
</script>
<style scoped>
.btn{
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items:center;
    gap:
}
</style>
