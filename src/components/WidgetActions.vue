<template>
    <div :class="['active-widget__actions', (props.hasParent ? 'active-widget__actions--has-parent' : '')]">
        <div class="active-widget__drag"><i class="bi bi-grip-horizontal"></i></div>
        <button type="button" class="s-button s-button--transparent" @click="openSettings(props.elementData)"><i class="bi bi-gear-fill"></i></button>
        <button type="button" class="s-button s-button--transparent" @click="contentStore.findAndDuplicateByUID(props.elementData.uid)"><i class="bi bi-copy"></i></button>
        <button type="button" class="s-button s-button--transparent" @click="contentStore.removeElement(props.elementData.uid), closeSettings(props.elementData)"><i class="bi bi-x-lg"></i></button>
    </div>
</template>

<script setup>
import { defineProps, inject } from 'vue';
import { contentStore } from './../store/content.js'
import Button from 'primevue/button';

const props = defineProps({
    elementData: {
        type: Object,
        default: null,
    },
    hasParent: {
        type: Boolean,
        default: false,
    },
});

const openSettings = inject('openSettings');
const closeSettings = inject('closeSettings');
</script>