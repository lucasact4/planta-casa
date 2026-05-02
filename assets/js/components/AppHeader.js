import { store } from '../store.js';

export default {
    data() {
        return { store }
    },
    template: `
        <header class="mb-6 md:mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 border-b border-slate-200/80 dark:border-slate-700/80 pb-6 transition-colors duration-300">
            
            <div class="w-full lg:w-auto">
                <div class="flex flex-wrap items-center gap-2 md:gap-3">
                    <h1 class="text-xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Planta da Casa</h1>
                    <span class="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-800 shadow-sm whitespace-nowrap">
                        120,90 m²
                    </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Alto da Bela Vista, Abreu e Lima | 7.80m x 15.50m
                </p>
            </div>

            <!-- BOTÕES: Grid de 3 colunas no celular (forma 2 linhas perfeitas), Flex no PC -->
            <div class="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2 w-full lg:w-auto">
                
                <!-- Botão Galeria -->
                <button @click="store.showGlobalGallery = true" class="group relative justify-center bg-blue-600 dark:bg-blue-600 text-white px-3 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 font-bold text-[11px] sm:text-sm">
                    <i class="fas fa-images text-sm"></i> Galeria
                    <!-- Tooltip -->
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50 hidden sm:block">
                        Ver todas as fotos do imóvel
                    </span>
                </button>

                <!-- Botão Info -->
                <button @click="store.showInfoModal = true" class="group relative justify-center bg-slate-800 dark:bg-slate-700 text-white px-3 py-2.5 rounded-lg shadow-sm hover:bg-slate-700 dark:hover:bg-slate-600 hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 font-semibold text-[11px] sm:text-sm">
                    <i class="fas fa-info-circle text-sm"></i> Info. Gerais
                    <!-- Tooltip -->
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50 hidden sm:block">
                        Visualizar informações gerais
                    </span>
                </button>
                
                <!-- Botão Tema (Adicionado texto "Tema" para igualar o tamanho) -->
                <button @click="store.toggleTheme()" class="group relative justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 border border-slate-300 dark:border-slate-600 px-3 py-2.5 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 font-semibold text-[11px] sm:text-sm">
                    <i :class="store.isDarkMode ? 'fas fa-sun text-sm' : 'fas fa-moon text-sm'"></i> Tema
                    <!-- Tooltip -->
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50 hidden sm:block">
                        Alternar modo Claro / Escuro
                    </span>
                </button>

                <!-- Botão OLX -->
                <a href="https://pe.olx.com.br/grande-recife/imoveis/casa-em-abreu-e-lima-3-quartos-1498587168?" target="_blank" class="group relative justify-center bg-[#6e0ad6] text-white px-3 py-2.5 rounded-lg shadow-sm hover:bg-[#5b08b3] hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 font-semibold text-[11px] sm:text-sm">
                    <i class="fas fa-shopping-cart text-sm"></i> OLX
                    <!-- Tooltip (Cor da OLX) -->
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#6e0ad6] text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50 hidden sm:block">
                        Abrir anúncio na OLX
                    </span>
                </a>

                <!-- Botão Face -->
                <a href="https://www.facebook.com/marketplace/item/1309814481340316" target="_blank" class="group relative justify-center bg-[#0866FF] text-white px-3 py-2.5 rounded-lg shadow-sm hover:bg-[#0654D4] hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 font-semibold text-[11px] sm:text-sm">
                    <i class="fab fa-facebook text-sm"></i> Facebook
                    <!-- Tooltip (Cor do Facebook) -->
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0866FF] text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50 hidden sm:block">
                        Ver no Marketplace
                    </span>
                </a>

                <!-- Botão Zap -->
                <a href="https://api.whatsapp.com/send/?phone=%2B5581985661070&text&type=phone_number&app_absent=0" target="_blank" class="group relative justify-center bg-[#25D366] text-white px-3 py-2.5 rounded-lg shadow-sm hover:bg-[#1DA851] hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 font-semibold text-[11px] sm:text-sm">
                    <i class="fab fa-whatsapp text-sm"></i> Whatsapp
                    <!-- Tooltip (Cor do WhatsApp) -->
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50 hidden sm:block">
                        Abrir Direto no WhatsApp
                    </span>
                </a>

            </div>
        </header>
    `
}