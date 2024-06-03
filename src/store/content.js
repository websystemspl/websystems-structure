import { reactive, markRaw, defineAsyncComponent } from 'vue'

export const contentStore = reactive({
  content: [],
  selectedElement: null,


  createBlock(element)
  {
      return markRaw(defineAsyncComponent(() => {
        return import(`./../blocks/${element}.vue`)
      }))
  },  

  generateUid() {
    return Math.random().toString(36).substring(7);
  },

  cloneElement(element) {
    let elem = JSON.parse(JSON.stringify(element));
    elem.uid = contentStore.generateUid();
    return elem;
  },

  cloneElementWithWidgets(element) {
    let elem = this.cloneElement(element);
    if (elem.widgets && elem.widgets.length) {
      elem.widgets = elem.widgets.map(widget => {
        return this.cloneElementWithWidgets(widget);
      });
    }
    return elem;
  },  

  findAndDuplicateByUID(uid) {
    const duplicate = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].uid === uid) {
          const elementCopy = this.cloneElementWithWidgets(arr[i]);
          arr.splice(i + 1, 0, elementCopy);
          return true;
        }
        // Sprawdzenie, czy widget posiada własne widgety, i zastosowanie rekursji
        if (arr[i].widgets) {
          const foundAndDuplicated = duplicate(arr[i].widgets);
          if (foundAndDuplicated) return true; // Jeśli znaleziono i zduplikowano widget, nie ma potrzeby dalszego przeszukiwania
        }
      }
      return false; // Zwróć false, jeśli uid nie zostało znalezione na danym poziomie zagnieżdżenia
    };
  
    duplicate(contentStore.content);
  },

  removeElement(uid) {
    this.removeElementByUid(contentStore.content, uid)
  },

  removeElementByUid(elements, uidToRemove) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.uid === uidToRemove) {
        elements.splice(i, 1);
        return true; 
      } else if (element.blocks && element.blocks.length) {
        if (contentStore.removeElementByUid(element.blocks, uidToRemove)) {
          return true; 
        }
      } else if (element.columns && element.columns.length) {
        element.columns.forEach(column => {
          if (contentStore.removeElementByUid(column, uidToRemove)) {
            return true; 
          }
        });
      }
    }
    return false;
  },  

  findElementByUid(elements, uid) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.uid === uid) {
        return element;
      } else if (element.widgets && element.widgets.length) {
        const foundElement = this.findElementByUid(element.widgets, uid);
        if (foundElement) {
          return foundElement;
        }
      } else if (element.columns && element.columns.length) {
        element.columns.forEach(column => {
          const foundElement = this.findElementByUid(column, uid);
          if (foundElement) {
            return foundElement;
          }          
        });
      }      
    }
    return null;
  },  

  updateElement(element) {
    console.log(element)
    this.updateElementByUid(contentStore.content, element)
  },

  updateElementByUid(elements, element) {
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el.uid === element.uid) {
        elements[i] = element;
        return true;
      } else if (el.blocks && el.blocks.length) {
        if (contentStore.updateElementByUid(el.blocks, element)) {
          return true;
        }
      } else if (el.columns && el.columns.length) {
        el.columns.forEach(column => {
          if (contentStore.updateElementByUid(column, element)) {
            return true;
          }
        });
      }
    }
    return false;
  }
})