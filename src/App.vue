<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="bg-blue-400 text-grey-500">
        <RouterLink to="/" class="m-2">Home</RouterLink>
        <RouterLink to="/EditChaussure">Chaussure</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

