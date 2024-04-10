<template>
  <router-view></router-view>
</template>

<script>
export default {
  unmounted() {  
    localStorage.removeItem('Leadhit-Site-Id')
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: rgb(237 237 237);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  padding: 20px;
  border: 1px solid #dbd4d4;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
}

.container__analytics {
  width: 100%;
}

h1 {
  text-align: center;
  margin: 0 0 15px 0;
  font-size: 20px;
  color: #4e4e4e;
}

h2 {
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #948f8f;
}
</style>
