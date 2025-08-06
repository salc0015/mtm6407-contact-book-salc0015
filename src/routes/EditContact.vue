<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Parse the dynamic id from the route parameters
const id = parseInt(route.params.id);
// Reactive contact object, populated by load function
const contact = ref(null);

// Load a copy of the contact from localStorage
const load = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    // Copy to avoid mutating the original until saved
    contact.value = { ...contacts.find(c => c.id === id) };
};

load();

// Save the edited contact back into the array and localStorage
const updateContact = () => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    // Find the index of the current contact
    const index = contacts.findIndex(c => c.id === id);
    // Replace the original with the edited copy
    contacts[index] = contact.value;
    // Persist to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // Navigate to the details page of the updated contact
    router.push(`/contact/${id}`);
};

</script>

<template>
    <!-- Only show the form when contact is loaded -->
    <div v-if="contact">
        <h2>Edit Contact</h2>
        <!-- Form bound to the contact object -->
        <form @submit.prevent="updateContact">
            <!-- First Name, pre-filled -->
            <input class="form-control mb-2" v-model="contact.firstName" required />
            <!-- Last Name, pre-filled -->
            <input class="form-control mb-2" v-model="contact.lastName" required />
            <!-- Email, pre-filled -->
            <input class="form-control mb-2" type="email" v-model="contact.email" required />
            <!-- Save button -->
            <button class="btn btn-success">Save</button>
        </form>
    </div>
</template>