<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = parseInt(route.params.id);
const contact = ref(null);

const load = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contact.value = { ...contacts.find(c => c.id === id) };
};

load();

const updateContact = () => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const index = contacts.findIndex(c => c.id === id);
    contacts[index] = contact.value;
    localStorage.setItem('contacts', JSON.stringify(contacts));
    router.push(`/contact/${id}`);
};

</script>

<template>
    <div v-if="contact">
        <h2>Edit Contact</h2>
        <form @submit.prevent="updateContact">
            <input class="form-control mb-2" v-model="contact.firstName" required />
            <input class="form-control mb-2" v-model="contact.lastName" required />
            <input class="form-control mb-2" type="email" v-model="contact.email" required />
            <button class="btn btn-success">Save</button>
        </form>
    </div>
</template>