<script setup>
import { ref, computed, onMounted } from 'vue';
import { contacts as initialContacts } from '../data';
import ContactCard from '../components/ContactCard.vue';

// Reactive variable for search input
const search = ref('');
// Reactive variable for the contacts list
const contacts = ref([]);

// On first mount, load contacts from localStorage or fall back to initial contacts
onMounted(() => {
    // Try to load contacts from localStorage
    const stored = JSON.parse(localStorage.getItem('contacts'));
    // If there are stored contacts, use them; otherwise, use the initial contacts
    if (stored && stored.length > 0){
        contacts.value = stored;
    } else {
        contacts.value = initialContacts;
        localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
});

// Computed property to filter and sort contacts based on search input
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
        <!-- Search input field -->
        <input type="text" class="form-control mb-3" v-model="search" placeholder="Search by name" />

        <!-- Results area, show list or no contacts state -->
        <div v-if="filteredContacts.length > 0">
            <!-- Render a ContactCard for each filtered contact -->
            <ContactCard v-for="contact in filteredContacts" :key="contact.id" :contact="contact" />
        </div>
        <!-- Empty state if filter yields no results -->
        <div v-else>
            <p>No contacts found</p>
        </div>
    </div>
</template>