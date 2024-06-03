<script setup>
import { defineProps, inject } from 'vue';
import contenteditable from 'vue-contenteditable'

let props = defineProps({
  elementData: {
    type: Object,
    default: null,
  },
});

const openSettings = inject('openSettings');
</script>

<template>
    <div class="header-block" @click="openSettings(props.elementData)">
        <contenteditable :style="[
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
        (props.elementData.settings.LineHeight) ? 'line-height:'+props.elementData.settings.LineHeight+props.elementData.settings.LineHeightType.code+';' : '',
      ]
    " :tag="props.elementData.style" :contenteditable="true" v-model="props.elementData.content" :no-nl="true" :no-html="false" />
    </div>
</template>