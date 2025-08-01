<script setup>
import { ref, computed, onMounted } from 'vue';
import { contacts as initialContacts } from '../data';
import ContactCard from '../components/ContactCard.vue';

const search = ref('');
const contacts = ref([]);

onMounted(() => {
    const stored = JSON.parse(localStorage.getItem('contacts'));
    contacts.value = stored || initialContacts;
    localStorage.setItem('contacts', JSON.stringify(contacts.value));
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
        <h2>Contact Book</h2>
    </div>
</template>