<script setup>
import { ref, inject } from 'vue';
import draggable from 'vuedraggable'
import { contentStore } from './../store/content.js'
import WidgetActions from './../components/WidgetActions.vue'

const openSettings = inject('openSettings');
const closeSettings = inject('closeSettings');

const props = defineProps({
  elementData: {
    type: Object,
    default: null,
  },
});

</script>

<template>
    <div class="section-block" 
    :style="[
        'padding-top:'+props.elementData.settings.Padding.top+'px;',
        'padding-right:'+props.elementData.settings.Padding.right+'px;',
        'padding-bottom:'+props.elementData.settings.Padding.bottom+'px;',
        'padding-left:'+props.elementData.settings.Padding.left+'px;',
        'margin-top:'+props.elementData.settings.Margin.top+'px;',
        'margin-right:'+props.elementData.settings.Margin.right+'px;',
        'margin-bottom:'+props.elementData.settings.Margin.bottom+'px;',
        'margin-left:'+props.elementData.settings.Margin.left+'px;',
        'background-color:'+props.elementData.settings.Background+';',
        'color:'+props.elementData.settings.Color+';',
        'text-align:'+props.elementData.settings.Align+';',
        'max-width:'+(props.elementData.settings.Container ? '1140px; margin: auto;' : '100%;'),
        (props.elementData.settings.FontSize) ? 'font-size:'+props.elementData.settings.FontSize+props.elementData.settings.FontSizeType.code+';' : '',
      ]
    ">
          <draggable
              class="drag-area"
              :list="props.elementData.blocks"
              group="containers"
              itemKey="uid"
          >
              <template #item="{ element }">
                  <div class="active-widget">
                    <WidgetActions :elementData="element" :has-parent="true"></WidgetActions>
                    <component :elementData="element" :is="contentStore.createBlock(element.component)"></component>    
                  </div>
              </template>
          </draggable> 
    </div> 
</template>