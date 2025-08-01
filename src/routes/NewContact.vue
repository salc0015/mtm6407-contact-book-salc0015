<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const firstName = ref('');
const lastName = ref('');
const email = ref('');

const saveContact = () => {
    const newContact = {
        id: Date.now(),
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value
    };

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    router.push(`/contact/${newContact.id}`);
}

</script>

<template>

<div>
    
    <h2>Add New Contact</h2>
    
</div>

</template>