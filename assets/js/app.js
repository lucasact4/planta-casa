import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { store } from './store.js';
import AppHeader from './components/AppHeader.js';
import BlueprintMap from './components/BlueprintMap.js';
import SidebarPanel from './components/SidebarPanel.js';
import ModalGallery from './components/ModalGallery.js';
import LightBox from './components/LightBox.js';
import InfoModal from './components/InfoModal.js'; // <-- NOVO

createApp({
    components: {
        AppHeader, BlueprintMap, SidebarPanel, ModalGallery, LightBox, InfoModal // <-- Adicionado aqui
    },
    setup() {
        return { store };
    },
    methods: {
        nextImage() { store.nextImage(); },
        prevImage() { store.prevImage(); }
    }
}).mount('#app');