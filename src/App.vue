<script setup>
import { defineProps, ref, watch, provide, onMounted } from 'vue';
import { contentStore } from './store/content.js'
import Editor from './components/Editor.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

let props = defineProps({
  name: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  media: {
    type: String,
  },
  widgets: {
    type: String,
  },
  save: {
    type: String,
    default: null,
  },
});

const showEditor = ref(false);
const pageContent = ref('[]');
const twigWidgets = ref('[]');

const startApp = () => {
  showEditor.value = true;
}

onMounted(() => {
  pageContent.value = JSON.stringify([]);
}) 

</script>

<template>
  <input type="hidden" v-model="pageContent" :name="props.name" :id="props.id" />
  <div class="start-structure">
    <button type="button" class="start-structure__button" @click="startApp()">Start Structure</button>
  </div>
  <Teleport to="body">
    <Editor 
        v-if="showEditor" 
        @close="(e) => {showEditor = false}" 
        @update:content="pageContent = $event"
        :mediaEndpoint="'/ajax/media'"
        :pageContent="JSON.parse(pageContent)"
        :twigWidgets="JSON.parse(twigWidgets)"
    />
  </Teleport>
</template>
