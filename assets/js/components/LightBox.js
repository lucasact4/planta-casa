export default {
    props: ['images', 'index'],
    data() {
        return {
            isZoomed: false
        }
    },
    computed: {
        currentImage() { return this.images[this.index]; }
    },
    methods: {
        isVideo(path) { return path && path.toLowerCase().endsWith('.mp4'); },
        toggleZoom() { this.isZoomed = !this.isZoomed; }
    },
    watch: {
        // Resetar o zoom sempre que mudar de imagem
        index() { this.isZoomed = false; }
    },
    template: `
        <Teleport to="body">
            <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 select-none" @click.self="$emit('close')">
                
                <div class="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent z-[110]">
                    <div class="text-white font-mono text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        {{ index + 1 }} / {{ images.length }}
                    </div>
                    <div class="flex gap-4">
                        <button @click="toggleZoom" class="text-white/80 hover:text-white text-xl p-2 transition-colors" title="Dar Zoom">
                            <i :class="isZoomed ? 'fas fa-search-minus' : 'fas fa-search-plus'"></i>
                        </button>
                        <button @click="$emit('close')" class="text-white/80 hover:text-white text-2xl p-2 transition-colors">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div class="w-full h-full flex items-center justify-center overflow-auto custom-scrollbar" @click.self="$emit('close')">
                    
                    <button v-if="images.length > 1" @click.stop="$emit('prev')" class="fixed left-4 z-[120] text-white/30 hover:text-white text-4xl p-4 transition-all hover:scale-110">
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <div class="relative transition-all duration-300 transform flex items-center justify-center"
                         :class="{ 'scale-[2.5] cursor-zoom-out': isZoomed, 'cursor-zoom-in': !isZoomed }"
                         @click="toggleZoom">
                        
                        <video v-if="isVideo(currentImage)" 
                               :src="currentImage" controls autoplay 
                               class="max-w-[90vw] max-h-[85vh] rounded shadow-2xl">
                        </video>
                        
                        <img v-else :src="currentImage" 
                             class="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform"
                             :style="isZoomed ? 'margin: 50% 0' : ''" />
                    </div>

                    <button v-if="images.length > 1" @click.stop="$emit('next')" class="fixed right-4 z-[120] text-white/30 hover:text-white text-4xl p-4 transition-all hover:scale-110">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </Teleport>
    `
}