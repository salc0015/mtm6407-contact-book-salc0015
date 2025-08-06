<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const id = parseInt(route.params.id);

// Reactive reference to hold the contact data
const contact = ref(null);

// Load the contact from localStorage by id
const load = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contact.value = contacts.find(c => c.id === id);
};

load();

// Delete handler, remove from array, save, and go back to home
const deleteContact = () => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts = contacts.filter(c => c.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    router.push('/');
};
</script>

<template>
<!-- Only render details if the contact is found -->
<div v-if="contact">
    <!-- Name as a heading -->
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <!-- Email as a paragraph -->
    <p>{{ contact.email }}</p>

    <!-- Primary actions, edit, delete, back -->
    <router-link class="btn btn-primary me-2" :to="`/edit/${contact.id}`">Edit</router-link>
    <button class="btn btn-danger" @click="deleteContact">Delete</button>
    <router-link class="btn btn-secondary ms-2" to="/">Back</router-link>
</div>

</template>