export default {
    props: ['show', 'images'],
    emits: ['close', 'open-lightbox'],
    methods: {
        // CORREÇÃO: Agora verifica se é objeto ou string antes de tratar o caminho
        isVideo(image) {
            const path = typeof image === 'string' ? image : image.src;
            return path && path.toLowerCase().endsWith('.mp4');
        },
        // CORREÇÃO: Pega o link correto para a miniatura
        getImageSrc(image) {
            return typeof image === 'string' ? image : image.src;
        }
    },
    template: `
        <Teleport to="body">
            <div v-if="show" class="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm" @click.self="$emit('close')">
                <div class="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.3s_ease-out]">
                    
                    <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0">
                        <h3 class="text-xl font-bold text-slate-800 dark:text-white">Galeria do Cômodo</h3>
                        <button @click="$emit('close')" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div v-for="(image, idx) in images" :key="idx" 
                                 @click="$emit('open-lightbox', idx)"
                                 class="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                
                                <video v-if="isVideo(image)" :src="getImageSrc(image)" class="w-full h-full object-cover"></video>
                                <img v-else :src="getImageSrc(image)" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                                
                                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <i class="fas fa-expand text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    `
}