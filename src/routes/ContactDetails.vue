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



</template>