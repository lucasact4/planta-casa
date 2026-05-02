export default {
    // 'images' pode ser array de strings ['url'] ou objetos [{src, label}]
    props: ['images', 'index'],
    emits: ['close', 'next', 'prev'], // Essencial para evitar o aviso [Vue warn]
    data() {
        return {
            isZoomed: false
        }
    },
    computed: {
        // Normaliza o conteúdo atual para sempre ter .src e .label
        currentMedia() { 
            const item = this.images[this.index];
            if (!item) return { src: '', label: '' };

            if (typeof item === 'string') {
                return { src: item, label: 'Imagem' };
            }
            return item; 
        }
    },
    methods: {
        isVideo(src) { 
            return src && src.toLowerCase().endsWith('.mp4'); 
        },
        toggleZoom() { 
            this.isZoomed = !this.isZoomed; 
        }
    },
    watch: {
        // Reseta o zoom ao navegar entre fotos
        index() { 
            this.isZoomed = false; 
        }
    },
    template: `
        <Teleport to="body">
            <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 select-none backdrop-blur-md" @click.self="$emit('close')">
                
                <div class="absolute top-0 left-0 right-0 p-4 flex justify-between items-start md:items-center bg-gradient-to-b from-black/80 to-transparent z-[110] pointer-events-none">
                    
                    <div class="flex flex-col md:flex-row items-start md:items-center gap-3 pointer-events-auto">
                        <div class="text-white font-mono text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                            {{ index + 1 }} / {{ images.length }}
                        </div>
                        
                        <div v-if="currentMedia.label" class="text-white font-bold text-sm md:text-base tracking-wide bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 flex items-center gap-2 shadow-lg truncate max-w-[200px] sm:max-w-md">
                            <i class="fas fa-map-marker-alt text-blue-400 text-xs"></i> 
                            {{ currentMedia.label }}
                        </div>
                    </div>

                    <div class="flex gap-2 pointer-events-auto">
                        <button @click="toggleZoom" class="text-white/80 hover:text-white hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-black/20" title="Dar Zoom">
                            <i :class="isZoomed ? 'fas fa-search-minus' : 'fas fa-search-plus'"></i>
                        </button>
                        <button @click="$emit('close')" class="text-white/80 hover:text-red-400 hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-black/20 text-xl">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div class="w-full h-full flex items-center justify-center overflow-auto custom-scrollbar" @click.self="$emit('close')">
                    
                    <button v-if="images.length > 1" @click.stop="$emit('prev')" class="fixed left-2 md:left-6 z-[120] text-white/40 hover:text-white bg-black/20 hover:bg-black/60 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl transition-all border border-white/5 backdrop-blur-sm">
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <div class="relative transition-all duration-300 transform flex items-center justify-center"
                         :class="{ 'scale-[2.5] cursor-zoom-out': isZoomed, 'cursor-zoom-in': !isZoomed }"
                         @click="toggleZoom">
                        
                        <video v-if="isVideo(currentMedia.src)" 
                               :src="currentMedia.src" controls autoplay 
                               class="max-w-[95vw] max-h-[85vh] md:max-w-[90vw] rounded shadow-2xl">
                        </video>
                        
                        <img v-else :src="currentMedia.src" 
                             class="max-w-[95vw] max-h-[85vh] md:max-w-[90vw] object-contain rounded-lg shadow-2xl transition-transform"
                             :style="isZoomed ? 'margin: 50% 0' : ''" />
                    </div>

                    <button v-if="images.length > 1" @click.stop="$emit('next')" class="fixed right-2 md:right-6 z-[120] text-white/40 hover:text-white bg-black/20 hover:bg-black/60 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl transition-all border border-white/5 backdrop-blur-sm">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </Teleport>
    `
}