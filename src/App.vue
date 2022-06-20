<template>
  <div id="app">
    <link rel="preload" as="font" />
    <router-view />
  </div>
</template>

<script>

</script>

<style>
@font-face {
  font-family: Comfortaa;
  src: url("./assets/fonts/Comfortaa-VariableFont_wght.ttf");
  font-display: swap;
}

@font-face {
  font-family: Baloo_2 extrabold;
  src: url("./assets/fonts/Baloo2-ExtraBold.ttf");
  font-display: swap;
}

@font-face {
  font-family: Baloo_2 Bold;
  src: url("./assets/fonts/Baloo2-Bold.ttf");
  font-display: swap;
}

@font-face {
  font-family: Pacifico;
  src: url("./assets/fonts/Pacifico-Regular.ttf");
  font-display: swap;
}

#app {
  /* font-family: 'Nunito Sans', sans-serif; */
  font-family: Comfortaa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;

  overflow-x: hidden;
}

.login {
  overflow-y: hidden;
}
</style>