// import './assets/main.scss'
import ButtonBlock from './blocks/ButtonBlock.vue'
import CodeBlock from './blocks/CodeBlock.vue'
import ColumnBlock from './blocks/ColumnBlock.vue'
import HeaderBlock from './blocks/HeaderBlock.vue'
import ImageBlock from './blocks/ImageBlock.vue'
import SectionBlock from './blocks/SectionBlock.vue'
import TextBlock from './blocks/TextBlock.vue'
import TwigBlock from './blocks/TwigBlock.vue'
import MediaModal from './components/MediaModal.vue'
import WidgetActions from './components/WidgetActions.vue'   

export { ButtonBlock, CodeBlock, ColumnBlock, HeaderBlock, ImageBlock, SectionBlock, TextBlock, TwigBlock, MediaModal, WidgetActions }

const StructureLibrary = {
  install(Vue) {
    Vue.component('ButtonBlock', ButtonBlock);
    Vue.component('CodeBlock', CodeBlock);
    Vue.component('ColumnBlock', ColumnBlock);
    Vue.component('HeaderBlock', HeaderBlock);
    Vue.component('ImageBlock', ImageBlock);
    Vue.component('SectionBlock', SectionBlock);
    Vue.component('TextBlock', TextBlock);
    Vue.component('TwigBlock', TwigBlock);
    Vue.component('MediaModal', MediaModal);
    Vue.component('WidgetActions', WidgetActions);
  },
};

export default StructureLibrary;
