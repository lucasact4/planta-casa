import { store } from '../store.js';

export default {
    data() {
        return { store }
    },
    template: `
        <header class="mb-6 md:mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-slate-200/80 pb-6">
            
            <!-- TÍTULO E ÁREA -->
            <div>
                <div class="flex flex-wrap items-center gap-3">
                    <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Planta Interativa do Imóvel</h1>
                    <span class="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full border border-blue-200 shadow-sm whitespace-nowrap">
                        Área: 120,90 m²
                    </span>
                </div>
                <p class="text-sm md:text-base text-slate-500 mt-2 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Renderização SVG | 7.80m x 15.50m
                </p>
            </div>

            <!-- BOTÕES DE AÇÃO -->
            <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <!-- Botão Modal -->
                <button @click="store.showInfoModal = true" class="flex-1 sm:flex-none justify-center bg-slate-800 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-slate-700 hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 font-semibold text-sm">
                    <i class="fas fa-info-circle text-lg"></i>
                    Info. Gerais
                </button>
                
                <!-- OLX -->
                <a href="https://pe.olx.com.br/grande-recife/imoveis/casa-em-abreu-e-lima-3-quartos-1498587168?" target="_blank" class="flex-1 sm:flex-none justify-center bg-[#6e0ad6] text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-[#5b08b3] hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 font-semibold text-sm">
                    <i class="fas fa-shopping-cart text-lg"></i>
                    OLX
                </a>

                <!-- Marketplace -->
                <a href="https://www.facebook.com/marketplace/item/1309814481340316" target="_blank" class="flex-1 sm:flex-none justify-center bg-[#0866FF] text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-[#0654D4] hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 font-semibold text-sm">
                    <i class="fab fa-facebook text-lg"></i>
                    Marketplace
                </a>

                <!-- WhatsApp -->
                <a href="https://api.whatsapp.com/send/?phone=%2B5581985661070&text&type=phone_number&app_absent=0" target="_blank" class="flex-1 sm:flex-none justify-center bg-[#25D366] text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-[#1DA851] hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 font-semibold text-sm">
                    <i class="fab fa-whatsapp text-lg"></i>
                    WhatsApp
                </a>

                <!-- Imprimir Planta -->
                <button @click="printPlan" class="justify-center bg-slate-100 text-slate-700 border border-slate-300 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-200 active:scale-95 transition-all flex items-center gap-2 font-semibold text-sm hidden sm:flex" title="Imprimir Planta">
                    <i class="fas fa-print"></i>
                </button>
            </div>
        </header>
    `,
    methods: { printPlan() { window.print(); } }
}