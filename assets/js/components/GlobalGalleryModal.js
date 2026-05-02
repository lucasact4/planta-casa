import { store } from '../store.js';

export default {
    props: ['show'],
    emits: ['close'],
    data() {
        return { store }
    },
    computed: {
        allImages() {
            return store.getAllImages();
        }
    },
    template: `
        <Teleport to="body">
            <div v-if="show" class="fixed inset-0 z-[85] flex items-center justify-center p-4 sm:p-6 bg-slate-900/90 backdrop-blur-sm" @click.self="$emit('close')">
                
                <div class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.3s_ease-out]">
                    
                    <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 shrink-0">
                        <div>
                            <h3 class="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-3">
                                <i class="fas fa-images text-blue-500"></i> Galeria Completa
                            </h3>
                            <p class="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                                {{ allImages.length }} fotos disponíveis
                            </p>
                        </div>
                        <button @click="$emit('close')" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <div class="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-100/50 dark:bg-slate-900/50">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                            
                            <div v-for="(item, idx) in allImages" :key="idx" 
                                 @click="store.openGlobalLightbox(idx)"
                                 class="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-700 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all">
                                
                                <img :src="item.src" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                                
                                <!-- Gradiente preto para leitura do texto -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                
                                <div class="absolute bottom-0 left-0 right-0 p-3">
                                    <p class="text-white text-xs font-bold truncate drop-shadow-md">
                                        {{ item.label }}
                                    </p>
                                </div>

                                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                                     <i class="fas fa-expand-arrows-alt text-white"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    `
}