export default {
    template: `
        <header class="mb-6 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/80 pb-5">
            <div>
                <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Planta Interativa do Imóvel</h1>
                <p class="text-sm md:text-base text-slate-500 mt-1.5 font-medium flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Renderização SVG | 7.80m x 15.50m
                </p>
            </div>
            <button @click="printPlan" class="w-full sm:w-auto justify-center bg-slate-900 text-white px-6 py-3 rounded-xl shadow-md hover:bg-slate-800 hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 font-semibold">
                <svg class="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                Imprimir Planta
            </button>
        </header>
    `,
    methods: { printPlan() { window.print(); } }
}