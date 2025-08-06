<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form fields as reactive values
const firstName = ref('');
const lastName = ref('');
const email = ref('');

// Save handler, builds the object, persists to localStorage, navigate to detail view
const saveContact = () => {
    const newContact = {
        // Simple unique ID using timestamp
        id: Date.now(),
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
    };

    // Read existing contacts from localStorage, or start fresh
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    // Add new contact
    contacts.push(newContact);
    // Persist back to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
    // Redirect to the details page of the new contact
    router.push(`/contact/${newContact.id}`);
}

</script>

<template>

<div>
    
    <h2>Add New Contact</h2>
    <!-- Controlled form bound to refs, avoids page reload -->
    <form @submit.prevent="saveContact">
        <!-- First name input -->
        <input class="form-control mb-2" v-model="firstName" placeholder="First Name" required />
        <!-- Last name input -->
        <input class="form-control mb-2" v-model="lastName" placeholder="Last Name" required />
        <!-- Email input -->
        <input class="form-control mb-2" type="email" v-model="email" placeholder="Email" required />
        <!-- Save button triggers saveContact -->
        <button class="btn btn-success">Save</button>
    </form>
</div>

</template>