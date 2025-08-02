<script setup>
import { ref, computed, onMounted } from 'vue';
import { contacts as initialContacts } from '../data';
import ContactCard from '../components/ContactCard.vue';

const search = ref('');
const contacts = ref([]);

onMounted(() => {
    const stored = JSON.parse(localStorage.getItem('contacts'));
    if (stored && stored.length > 0){
        contacts.value = stored;
    } else {
        contacts.value = initialContacts;
        localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
});

const filteredContacts = computed(() =>
    contacts.value
    .filter(c =>
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.value.toLowerCase())
    )
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
);

</script>

<template>
    <div>
        <h2 class="mb-4">Contact Book</h2>

        <input type="text" class="form-control mb-3" v-model="search" placeholder="Search by name" />

        <div v-if="filteredContacts.length > 0">
            <ContactCard v-for="contact in filteredContacts" :key="contact.id" :contact="contact" />
        </div>
        <div v-else>
            <p>No contacts found</p>
        </div>
    </div>
</template>