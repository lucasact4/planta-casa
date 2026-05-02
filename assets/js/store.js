import { reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { planData } from './data.js';

const savedTheme = localStorage.getItem('theme');
const initialDark = savedTheme === 'dark' || !savedTheme;

if (initialDark) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

export const store = reactive({
    activeElement: null,
    data: planData,
    
    showGallery: false,
    showLightbox: false,
    showInfoModal: false,
    showGlobalGallery: false, // <-- NOVO: Controle da Galeria Completa
    
    lightboxImage: null,
    currentGalleryImages: [],
    lightboxIndex: 0,
    
    isDarkMode: initialDark,

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },

    toggleElement(element) {
        if (this.activeElement && this.activeElement.id === element.id) {
            this.activeElement = null;
        } else {
            this.activeElement = element;
        }
    },

    // <-- NOVO: Função que coleta todas as fotos da casa
    getAllImages() {
        let all = [];
        // Coleta de Cômodos
        this.data.rooms.forEach(item => {
            if (item.images) item.images.forEach(img => all.push({ src: img, label: item.name }));
        });
        // Coleta de Portas/Janelas/Passagens
        this.data.doors.forEach(item => {
            if (item.images) item.images.forEach(img => all.push({ src: img, label: item.name }));
        });
        this.data.windows.forEach(item => {
            if (item.images) item.images.forEach(img => all.push({ src: img, label: item.name }));
        });
        this.data.passages.forEach(item => {
            if (item.images) item.images.forEach(img => all.push({ src: img, label: item.name }));
        });
        return all;
    },

    openGlobalLightbox(index) {
        const allItems = this.getAllImages();
        this.currentGalleryImages = allItems; // Agora passa o objeto inteiro {src, label}
        this.lightboxIndex = index;
        this.showLightbox = true;
    },

    // ATUALIZADO: Quando clica num cômodo específico, força o formato de objeto com label
    openGallery(images) { 
        // Se 'images' for um array de strings, converte para objeto usando o nome do cômodo ativo
        if (images.length > 0 && typeof images[0] === 'string') {
            const label = this.activeElement ? this.activeElement.name : 'Imagem';
            this.currentGalleryImages = images.map(img => ({ src: img, label: label }));
        } else {
            this.currentGalleryImages = images;
        }
        this.showGallery = true; 
    },

    openLightbox(index) { this.lightboxIndex = index; this.showLightbox = true; },
    nextImage() { this.lightboxIndex = (this.lightboxIndex < this.currentGalleryImages.length - 1) ? this.lightboxIndex + 1 : 0; },
    prevImage() { this.lightboxIndex = (this.lightboxIndex > 0) ? this.lightboxIndex - 1 : this.currentGalleryImages.length - 1; },
    closeAll() { 
        this.showGallery = false; 
        this.showLightbox = false; 
        this.showInfoModal = false; 
        this.showGlobalGallery = false; 
    }
});