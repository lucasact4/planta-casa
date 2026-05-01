import { reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { planData } from './data.js';

export const store = reactive({
    activeElement: null,
    data: planData,
    
    showGallery: false,
    showLightbox: false,
    showInfoModal: false, // <-- NOVO: Controle do Modal de Informações
    lightboxImage: null,
    currentGalleryImages: [],
    lightboxIndex: 0,

    toggleElement(element) {
        if (this.activeElement && this.activeElement.id === element.id) {
            this.activeElement = null;
        } else {
            this.activeElement = element;
        }
    },

    openGallery(images) {
        this.currentGalleryImages = images;
        this.showGallery = true;
    },

    openLightbox(index) {
        this.lightboxIndex = index;
        this.showLightbox = true;
    },

    nextImage() {
        if (this.lightboxIndex < this.currentGalleryImages.length - 1) {
            this.lightboxIndex++;
        } else {
            this.lightboxIndex = 0;
        }
    },

    prevImage() {
        if (this.lightboxIndex > 0) {
            this.lightboxIndex--;
        } else {
            this.lightboxIndex = this.currentGalleryImages.length - 1;
        }
    },

    closeAll() {
        this.showGallery = false;
        this.showLightbox = false;
        this.showInfoModal = false; // <-- Fecha o modal de info também
    }
});