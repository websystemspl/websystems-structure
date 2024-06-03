<script setup>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable'
import { contentStore } from './../store/content.js'
import WidgetActions from './../components/WidgetActions.vue'

const props = defineProps({
  elementData: {
    type: Object,
    default: null,
  },
});


for (let i = 0; i < props.elementData.columnsCount; i++) {
  props.elementData.columns.push([]);
}

watch(() => props.elementData.columnsCount, (newVal) => {
  for (let i = 0; i < newVal; i++) {
    props.elementData.columns.push([]);
  }

  if (props.elementData.columns.length > newVal) {
    props.elementData.columns.splice(newVal);
  }
});

</script>

<template>
    <div class="columns-block"
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
      <div class="columns-block__columns" :style="'align-items:' + (props.elementData.alignVertical)">
        <div v-for="col in props.elementData.columnsCount" :key="col - 1" class="columns-block__column">
          <draggable
              class="drag-area"
              :list="props.elementData.columns[col - 1]"
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
      </div> 
    </div> 
</template>