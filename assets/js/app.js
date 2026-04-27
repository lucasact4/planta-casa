import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { store } from './store.js';
import AppHeader from './components/AppHeader.js';
import BlueprintMap from './components/BlueprintMap.js';
import SidebarPanel from './components/SidebarPanel.js';
import ModalGallery from './components/ModalGallery.js';
import LightBox from './components/LightBox.js';

createApp({
    components: {
        AppHeader, BlueprintMap, SidebarPanel, ModalGallery, LightBox
    },
    setup() {
        return { store };
    },
    methods: {
        nextImage() {
            const idx = store.currentGalleryImages.indexOf(store.lightboxImage);
            const nextIdx = (idx + 1) % store.currentGalleryImages.length;
            store.lightboxImage = store.currentGalleryImages[nextIdx];
        },
        prevImage() {
            const idx = store.currentGalleryImages.indexOf(store.lightboxImage);
            const prevIdx = (idx - 1 + store.currentGalleryImages.length) % store.currentGalleryImages.length;
            store.lightboxImage = store.currentGalleryImages[prevIdx];
        }
    }
}).mount('#app');