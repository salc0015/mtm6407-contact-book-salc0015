<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const id = parseInt(route.params.id);
const contact = ref(null);

const load = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contact.value = contacts.find(c => c.id === id);
};

load();

const deleteContact = () => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts = contacts.filter(c => c.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    router.push('/');
};
</script>

<template>

<div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>{{ contact.email }}</p>
    <router-link class="btn btn-primary me-2" :to="`/edit/${contact.id}`">Edit</router-link>
    <button class="btn btn-danger" @click="deleteContact">Delete</button>
    <router-link class="btn btn-secondary ms-2" to="/">Back</router-link>
</div>

</template>