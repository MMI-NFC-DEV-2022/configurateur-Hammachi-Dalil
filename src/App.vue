<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'

</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="bg-blue-400 text-grey-500">
        <RouterLink to="/" class="m-2">Home</RouterLink>
        <RouterLink to="/basket/new">Chaussure</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

