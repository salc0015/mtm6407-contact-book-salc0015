<script setup>
defineProps(['contact']);
</script>

<template>
  <!-- Bootstrap card for a contact list item -->
  <div class="card p-3 mb-3">
    <!-- Full name as the card title -->
    <h5>{{ contact.firstName }} {{ contact.lastName }}</h5>
    <!-- Email as supporting text -->
    <p>{{ contact.email }}</p>
    <!-- Link to open the full details page -->
    <router-link :to="`/contact/${contact.id}`" class="btn btn-sm btn-outline-primary">Details</router-link>
  </div>
</template>