import { store } from '../store.js';

export default {
    data() {
        return { 
            store,
            isPanelVisible: true
        }
    },
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
            this.isPanelVisible = entries[0].isIntersecting;
        }, { root: null, threshold: 0.1 });
        if (this.$refs.panelContainer) this.observer.observe(this.$refs.panelContainer);
    },
    beforeUnmount() {
        if (this.observer) this.observer.disconnect();
    },
    methods: {
        scrollToPanel() {
            if (this.$refs.panelContainer) this.$refs.panelContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        getRoomZone(name) {
            const n = name.toLowerCase();
            if (n.includes('banheiro') || n.includes('cozinha')) return { label: 'Área Molhada', class: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' };
            if (n.includes('quarto')) return { label: 'Área Íntima', class: 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300 border-violet-200 dark:border-violet-800' };
            if (n.includes('sala')) return { label: 'Área Social', class: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 border-orange-200 dark:border-orange-800' };
            if (n.includes('quintal') || n.includes('ar livre') || n.includes('garagem')) return { label: 'Área Externa', class: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
            return { label: 'Área de Circulação', class: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600' };
        },
        // NOVA FUNÇÃO: Lida com o clique na capa (1 foto = Lightbox, + de 1 foto = Galeria)
        handleCoverClick() {
            if (!store.activeElement || !store.activeElement.images) return;
            
            const images = store.activeElement.images;
            
            if (images.length === 1) {
                // Se tem apenas 1 foto, cria o array no formato esperado e abre o Lightbox no index 0
                store.currentGalleryImages = [{ src: images[0], label: store.activeElement.name }];
                store.openLightbox(0);
            } else if (images.length > 1) {
                // Se tem mais de uma, abre a Galeria do cômodo
                store.openGallery(images);
            }
        }
    },
    template: `
        <div ref="panelContainer" class="space-y-6 lg:sticky lg:top-8 h-fit pb-10 lg:pb-0 transition-colors duration-300">
            
            <!-- PAINEL DE INFORMAÇÕES REFORMULADO -->
            <div class="bg-white dark:bg-slate-800 p-6 md:p-7 rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-700 min-h-[220px] transition-all overflow-hidden relative">
                
                <h2 class="text-xs font-black text-slate-400 dark:text-slate-500 pb-4 mb-6 flex items-center gap-2 uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-700">
                    <i class="fas fa-layer-group text-blue-500"></i> Ficha Técnica
                </h2>
                
                <div v-if="store.activeElement" class="space-y-5 animate-[fadeIn_0.2s_ease-in]">
                    
                    <!-- FOTO DE CAPA -->
                    <div v-if="store.activeElement.images && store.activeElement.images.length" 
                         @click="handleCoverClick"
                         class="relative group mb-6 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer shadow-md hover:shadow-xl transition-all aspect-video">
                        <img :src="store.activeElement.images[0]" :alt="store.activeElement.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                        
                        <div class="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                            <span v-if="store.activeElement.type === 'room'" :class="getRoomZone(store.activeElement.name).class" class="text-[10px] px-2.5 py-1 rounded-md border font-bold uppercase tracking-wider backdrop-blur-md">
                                {{ getRoomZone(store.activeElement.name).label }}
                            </span>
                            <div v-if="store.activeElement.images.length > 1" class="bg-black/60 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/20 font-bold ml-auto">
                                <i class="fas fa-images"></i> {{ store.activeElement.images.length }}
                            </div>
                        </div>
                        
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all">
                                 <i :class="store.activeElement.images.length === 1 ? 'fas fa-expand-arrows-alt text-white text-xl' : 'fas fa-th text-white text-xl'"></i>
                            </div>
                        </div>
                    </div>

                    <!-- TÍTULO DA SELEÇÃO -->
                    <div class="flex items-center space-x-4 mb-4">
                        <div class="w-1.5 h-10 rounded-full" :style="{ backgroundColor: store.activeElement.color || '#38bdf8' }"></div>
                        <div>
                            <span class="text-2xl font-extrabold text-slate-800 dark:text-white leading-none block">{{ store.activeElement.name }}</span>
                            <span class="text-sm text-slate-500 dark:text-slate-400 font-medium capitalize mt-1 block">
                                {{ store.activeElement.type === 'door' ? 'Porta Interna' : store.activeElement.type === 'window' ? 'Janela/Abertura' : store.activeElement.type === 'gate' ? 'Portão de Acesso' : store.activeElement.type === 'wall' ? 'Estrutura' : 'Ambiente' }}
                            </span>
                        </div>
                    </div>
                    
                    <!-- GRID DE DADOS TÉCNICOS -->
                    <div class="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                        <div class="bg-slate-50/80 dark:bg-slate-700/30 p-4 md:p-5 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
                            <span class="flex items-center gap-1.5 text-[10px] md:text-xs text-slate-400 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">
                                <i class="fas fa-ruler-combined"></i> {{ store.activeElement.type === 'room' ? 'Área Total' : (store.activeElement.type === 'wall' ? 'Comprimento' : 'Medida') }}
                            </span>
                            <span v-if="store.activeElement.type === 'room'" class="font-mono font-black text-2xl md:text-3xl text-slate-800 dark:text-white mt-1">
                                {{ store.activeElement.area.toFixed(2) }}<span class="text-sm font-semibold text-slate-400 ml-1">m²</span>
                            </span>
                            <span v-else class="font-mono font-black text-xl md:text-2xl text-slate-800 dark:text-white mt-1">
                                {{ store.activeElement.size }}
                            </span>
                        </div>

                        <div class="bg-slate-50/80 dark:bg-slate-700/30 p-4 md:p-5 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
                            <span class="flex items-center gap-1.5 text-[10px] md:text-xs text-slate-400 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">
                                <i class="fas fa-vector-square"></i> {{ store.activeElement.type === 'room' ? 'Dimensões (L x C)' : (store.activeElement.type === 'wall' ? 'Espessura' : 'Status') }}
                            </span>
                            <span v-if="store.activeElement.type === 'room'" class="font-mono font-bold text-slate-600 dark:text-slate-300 mt-1 block text-sm md:text-base">
                                {{ store.activeElement.w ? (store.activeElement.w / 100).toFixed(2) + 'm × ' + (store.activeElement.h / 100).toFixed(2) + 'm' : 'Formato Irregular / Beco 80cm Largura' }}
                            </span>
                            <span v-else-if="store.activeElement.type === 'wall'" class="font-mono font-bold text-slate-600 dark:text-slate-300 mt-1 block text-sm md:text-base">
                                {{ store.activeElement.thickness }}
                            </span>
                            <span v-else class="font-mono font-bold text-green-600 dark:text-green-400 mt-1 block text-sm md:text-base flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Mapeado
                            </span>
                        </div>
                    </div>
                </div>
                
                <!-- ESTADO VAZIO -->
                <div v-else class="h-[160px] flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                    <div class="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-4 transition-colors">
                        <i class="fas fa-hand-pointer text-2xl opacity-40"></i>
                    </div>
                    <p class="text-center text-sm font-medium leading-relaxed">Selecione uma área na planta<br>para exibir os detalhes.</p>
                </div>
            </div>

            <!-- QUADRO DE ÁREAS -->
            <div class="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-700 overflow-hidden transition-colors duration-300">
                <div class="px-6 md:px-7 py-5 border-b border-slate-100 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-800/40">
                    <h3 class="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <i class="fas fa-list text-blue-500"></i> Quadro de Áreas
                    </h3>
                </div>
                <div class="max-h-[350px] overflow-y-auto custom-scrollbar p-2">
                    <table class="w-full text-left text-sm text-slate-600 dark:text-slate-300 border-separate border-spacing-y-1">
                        <tbody>
                            <tr v-for="room in store.data.rooms" :key="'tb-'+room.id" 
                                @click="store.toggleElement(room)"
                                class="transition-all duration-200 cursor-pointer rounded-xl group"
                                :class="{'bg-blue-50/80 dark:bg-blue-900/30 shadow-sm': store.activeElement && store.activeElement.id === room.id, 'hover:bg-slate-50 dark:hover:bg-slate-700/30': !(store.activeElement && store.activeElement.id === room.id)}">
                                <td class="px-4 py-3.5 font-medium flex items-center space-x-3 rounded-l-xl">
                                    <div class="w-3 h-3 rounded-sm shadow-inner border border-black/10 transition-transform group-hover:scale-125" :style="{ backgroundColor: room.color }"></div>
                                    <span class="group-hover:text-slate-900 dark:group-hover:text-white transition-colors" :class="{'text-blue-900 dark:text-blue-300 font-bold': store.activeElement && store.activeElement.id === room.id}">{{ room.name }}</span>
                                </td>
                                <td class="px-4 py-3.5 text-right font-mono font-semibold transition-colors rounded-r-xl" :class="{'text-blue-700 dark:text-blue-400': store.activeElement && store.activeElement.id === room.id, 'text-slate-500 dark:text-slate-400': !(store.activeElement && store.activeElement.id === room.id)}">
                                    {{ room.area.toFixed(1) }} m²
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <Teleport to="body">
            <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[40] lg:hidden transition-all duration-500 ease-in-out pointer-events-none"
                 :class="!isPanelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
                <button @click="scrollToPanel" 
                        class="pointer-events-auto bg-blue-600/95 dark:bg-blue-500/95 hover:bg-blue-700 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] flex items-center gap-3 font-semibold text-sm whitespace-nowrap border border-white/10 transition-transform active:scale-95">
                    <span class="animate-bounce mt-1"><i class="fas fa-arrow-down"></i></span>
                    Ver detalhes do cômodo
                </button>
            </div>
        </Teleport>
    `
}