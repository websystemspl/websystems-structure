<script setup>
import { defineProps, inject } from 'vue';

let props = defineProps({
  elementData: {
    type: Object,
    default: null,
  },
});

const openSettings = inject('openSettings');
</script>

<template>
    <div class="button-block" 
      @click="openSettings(props.elementData)"
      :style="[
          'text-align:'+props.elementData.settings.Align+';',
        ]
      "    
    >
        <a
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
        (props.elementData.settings.FontSize) ? 'font-size:'+props.elementData.settings.FontSize+props.elementData.settings.FontSizeType.code+';' : '',
      ]
    "        
        
        :href="props.elementData.link" :target="props.elementData.target" :class="props.elementData.buttonclass" :title="props.elementData.label">{{ props.elementData.label }}</a>
    </div>
</template>