export default {
    name: 'ModalGallery',
    props: ['images', 'show'],
    // CORREÇÃO: Declarando os eventos para o Vue não reclamar
    emits: ['close', 'open-lightbox'],
    methods: {
        isVideo(path) { return path && path.toLowerCase().endsWith('.mp4'); }
    },
    template: `
        <Teleport to="body">
            <div v-if="show" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm" @click.self="$emit('close')">
                <div class="bg-slate-800 border border-slate-700 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out]">
                    <div class="p-6 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
                        <div>
                            <small class="text-blue-400 font-mono flex items-center gap-2">
                                <i class="fas fa-folder-open"></i> DATABASE_IMG_STORAGE
                            </small>
                            <h3 class="text-xl font-bold text-white">Galeria Completa</h3>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="badge px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-mono">FILES: {{ images.length }}</span>
                            <button @click="$emit('close')" class="text-slate-400 hover:text-white transition-colors text-2xl">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar bg-slate-900/50">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            <div v-for="(img, idx) in images" :key="idx" 
                                 @click="$emit('open-lightbox', idx)"
                                 class="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-slate-700 hover:border-blue-500 transition-all">
                                <video v-if="isVideo(img)" :src="img" muted class="w-full h-full object-cover"></video>
                                <img v-else :src="img" loading="lazy" class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <i :class="isVideo(img) ? 'fas fa-search-plus' : 'fas fa-search-plus'" class="text-white text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    `
}