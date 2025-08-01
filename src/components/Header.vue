<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
    <RouterLink class="navbar-brand fw-bold" to="/">Contact Book</RouterLink>

    <ul class="navbar-nav ms-auto d-flex flex-row gap-3">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/new">Add Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>