<script setup>
defineProps(['contact']);
</script>

<template>
  <div class="card p-3 mb-3">
    <h5>{{ contact.firstName }} {{ contact.lastName }}</h5>
    <p>{{ contact.email }}</p>
    <router-link :to="`/contact/${contact.id}`" class="btn btn-sm btn-outline-primary">Details</router-link>
  </div>
</template>