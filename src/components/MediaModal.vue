<script setup>
import Moveable from "vue3-moveable";
import { ref, watch, onMounted, inject } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { contentStore } from './../store/content.js'
import { mediaStore } from './../store/media.js'
import FileUpload from 'primevue/fileupload';

const props = defineProps({
    show: Boolean,
    width: {
        type: Number,
        default: 500
    },
    elementData: {
        type: Object,
        default: null
    }
});

defineEmits(['update']);
const mediaEndpoint = inject('mediaEndpoint');
const showModal = ref(props.show);
const target = ref(null)
const targetHeader = ref(null)
const media = ref([])

onMounted(() => {
  fetchMedia();
})

function fetchMedia()
{
  mediaStore.fetchMedia(mediaEndpoint).then(() => {
    media.value = mediaStore.media;
  })
}

function updateElementData(url)
{
  props.elementData.src = url
  contentStore.updateElement(props.elementData)
}

function onDrag(e)
{
  e.target.style.transform = e.transform;

}

function onResize(e)
{
  e.target.style.width = `${e.width}px`;
  e.target.style.height = `${e.height}px`;
  e.target.style.transform = e.drag.transform;
}

function onAfterUpload()
{
  fetchMedia();
}

watch(() => props.show, (value) => {
    showModal.value = value;
});
</script>

<template>
    <div v-if="showModal" class="media-modal" ref="target"  :style="'transform: translate(-50%, -50%); width: fit-content;'">
      <div>
        <div class="media-modal__header" ref="targetHeader">
          <h2>Media</h2>
          <button type="button" class="s-button s-button--transparent" @click="$emit('update')"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="media-modal__body">
          <PerfectScrollbar>
            <div class="media-list">
              <div v-for="item in media" :key="item.id" class="media-item">
                <img class="media-item__image" :src="item.url" alt="media" @click="updateElementData(item.url)" />
                <p>{{ item.name }}</p>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
      <div class="media-modal__footer">
        <FileUpload name="files[]" :url="mediaEndpoint" @upload="onAfterUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>

      </div>
    </div>
    <Moveable
      className="moveable"
      :target="target"
      :dragTarget="targetHeader"
      :draggable="true"
      :scalable="true"
      :resizable="true"
      :rotatable="false"
      :hideDefaultLines="true"
      :keepRatio="false"
      :checkInput="true"
      :throttleResize="1"
      :renderDirections="['se']"
      :scroll-sensitivity="200"
      :force-fallback="true"
      :edge="['n', 's', 'w', 'e']"
      :origin="false"
      @drag="onDrag"
      @resize="onResize"
    />
</template>