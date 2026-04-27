import { store } from '../store.js';

export default {
    data() {
        return { store }
    },
    template: `
        <div class="space-y-6 lg:sticky lg:top-8 h-fit pb-10 lg:pb-0">
            
            <div class="bg-white p-6 md:p-7 rounded-3xl shadow-sm border border-slate-200/60 min-h-[220px] transition-all overflow-hidden">
                <h2 class="text-base font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6 flex items-center gap-2 uppercase tracking-wide">
                    <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Informações Técnicas
                </h2>
                
                <div v-if="store.activeElement" class="space-y-5 animate-[fadeIn_0.2s_ease-in]">
                    
                    <div v-if="store.activeElement.images && store.activeElement.images.length" 
                         @click="store.openGallery(store.activeElement.images)"
                         class="relative group mb-6 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 cursor-pointer shadow-md hover:shadow-xl transition-all">
                        
                        <img :src="store.activeElement.images[0]" 
                             :alt="store.activeElement.name"
                             class="w-full h-auto max-h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                             loading="lazy" />
                        
                        <div v-if="store.activeElement.images.length > 1" 
                             class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 font-bold uppercase tracking-widest shadow-lg">
                            <i class="fas fa-images"></i>
                            {{ store.activeElement.images.length }} FOTOS
                        </div>
                        
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                                 <i class="fas fa-expand-arrows-alt text-white text-xl"></i>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 rounded-xl shadow-inner border border-slate-200/60 flex items-center justify-center text-slate-700 shrink-0" :style="{ backgroundColor: store.activeElement.color }">
                            <svg v-if="store.activeElement.type === 'room'" class="w-7 h-7 text-slate-800/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            <svg v-else-if="store.activeElement.type === 'door' || store.activeElement.type === 'gate'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                            <svg v-else-if="store.activeElement.type === 'window'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <svg v-else-if="store.activeElement.type === 'wall'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <span class="text-xl md:text-2xl font-extrabold text-slate-800 leading-tight">{{ store.activeElement.name }}</span>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                        <div class="bg-slate-50/80 p-4 md:p-5 rounded-2xl border border-slate-100">
                            <span class="block text-[11px] md:text-xs text-slate-400 uppercase font-bold tracking-wider mb-1.5">{{ store.activeElement.type === 'room' ? 'Área Útil' : (store.activeElement.type === 'wall' ? 'Comprimento' : 'Tamanho') }}</span>
                            <span v-if="store.activeElement.type === 'room'" class="font-mono font-bold text-xl md:text-2xl text-blue-600">{{ store.activeElement.area.toFixed(2) }} <span class="text-sm font-semibold text-blue-400">m²</span></span>
                            <span v-else class="font-mono font-bold text-xl md:text-2xl text-blue-600">{{ store.activeElement.size }}</span>
                        </div>
                        <div class="bg-slate-50/80 p-4 md:p-5 rounded-2xl border border-slate-100">
                            <span class="block text-[11px] md:text-xs text-slate-400 uppercase font-bold tracking-wider mb-1.5">{{ store.activeElement.type === 'room' ? 'Formato' : (store.activeElement.type === 'wall' ? 'Espessura' : 'Categoria') }}</span>
                            <span v-if="store.activeElement.type === 'room'" class="font-mono font-semibold text-slate-700 mt-1 block text-sm md:text-base">
                                {{ store.activeElement.w ? (store.activeElement.w / 100).toFixed(2) + ' × ' + (store.activeElement.h / 100).toFixed(2) : 'Polígono' }}
                            </span>
                            <span v-else-if="store.activeElement.type === 'wall'" class="font-mono font-semibold text-slate-700 mt-1 block text-sm md:text-base">
                                {{ store.activeElement.thickness }}
                            </span>
                            <span v-else class="font-mono font-semibold text-slate-700 mt-1 block text-sm md:text-base capitalize">
                                {{ store.activeElement.type === 'door' ? 'Porta Interna' : store.activeElement.type === 'window' ? 'Janela' : store.activeElement.type === 'gate' ? 'Acesso' : 'Passagem' }}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div v-else class="h-[140px] flex flex-col items-center justify-center text-slate-400">
                    <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                    </div>
                    <p class="text-center text-sm font-medium leading-relaxed">Clique em um cômodo para<br>visualizar fotos e detalhes.</p>
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden">
                <div class="px-6 md:px-7 py-5 border-b border-slate-100 bg-slate-50/40">
                    <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wide">Quadro de Áreas</h3>
                </div>
                <div class="max-h-[350px] overflow-y-auto custom-scrollbar p-2">
                    <table class="w-full text-left text-sm text-slate-600 border-separate border-spacing-y-1">
                        <tbody>
                            <tr v-for="room in store.data.rooms" :key="'tb-'+room.id" 
                                @click="store.toggleElement(room)"
                                class="transition-all duration-200 cursor-pointer rounded-xl group"
                                :class="{'bg-blue-50/80 shadow-sm': store.activeElement && store.activeElement.id === room.id, 'hover:bg-slate-50': !(store.activeElement && store.activeElement.id === room.id)}">
                                <td class="px-4 py-3.5 font-medium flex items-center space-x-3 rounded-l-xl">
                                    <div class="w-4 h-4 rounded-full shadow-inner border border-black/10 transition-transform group-hover:scale-110" :style="{ backgroundColor: room.color }"></div>
                                    <span class="group-hover:text-slate-900 transition-colors" :class="{'text-blue-900 font-bold': store.activeElement && store.activeElement.id === room.id}">{{ room.name }}</span>
                                </td>
                                <td class="px-4 py-3.5 text-right font-mono font-semibold transition-colors rounded-r-xl" :class="{'text-blue-700': store.activeElement && store.activeElement.id === room.id, 'text-slate-500': !(store.activeElement && store.activeElement.id === room.id)}">
                                    {{ room.area.toFixed(1) }} m²
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
}