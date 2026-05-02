export default {
    props: ['show'],
    emits: ['close'],
    template: `
        <Teleport to="body">
            <div v-if="show" class="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm" @click.self="$emit('close')">
                <div class="bg-slate-50 dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.3s_ease-out] border dark:border-slate-700">
                    
                    <!-- Header do Modal -->
                    <div class="bg-white dark:bg-slate-800 px-6 py-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center shrink-0">
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-800 dark:text-white">Casa à Venda - Abreu e Lima</h2>
                            <p class="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Alto da Bela Vista</p>
                        </div>
                        <button @click="$emit('close')" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <!-- Corpo do Modal (Scroll) -->
                    <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
                        
                        <!-- Destaque Preço e Benefícios -->
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50 rounded-2xl p-6 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <span class="block text-green-700 dark:text-green-400 text-sm font-bold uppercase tracking-wider mb-1">Valor inicial (Negociável)</span>
                                <span class="text-3xl md:text-4xl font-extrabold text-green-800 dark:text-green-300">R$ 160.000,00</span>
                            </div>
                            <div class="text-center sm:text-right text-sm text-emerald-700 dark:text-emerald-400 font-medium space-y-1">
                                <p><i class="fas fa-bolt mr-1"></i> Energia econômica</p>
                                <p><i class="fas fa-tint mr-1"></i> Isenção de taxa de água</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <!-- Card Localização -->
                            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-map-marked-alt text-red-500"></i> Localização Estratégica
                                </h3>
                                <ul class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                                    <li><strong class="text-slate-700 dark:text-slate-200">CEP:</strong> 53510-480</li>
                                    <li><strong class="text-slate-700 dark:text-slate-200">Bairro:</strong> Alto da Bela Vista (Centro)</li>
                                    <li><strong class="text-slate-700 dark:text-slate-200">Cidade:</strong> Abreu e Lima / PE</li>
                                    <li><i class="fas fa-road text-slate-400 mr-2"></i> Rua pavimentada (asfalto)</li>
                                    <li><i class="fas fa-school text-slate-400 mr-2"></i> Próximo à ETE, EREM e Escolinha Municipal</li>
                                    <li><i class="fas fa-clinic-medical text-slate-400 mr-2"></i> Unidade de saúde na mesma rua</li>
                                </ul>
                            </div>

                            <!-- Card Detalhes do Imóvel -->
                            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-home text-blue-500"></i> Estrutura do Imóvel
                                </h3>
                                <div class="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300 text-sm">
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Sala ampla</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>03 Dormitórios</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Cozinha</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Banheiro Social</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Suíte (Quarto 2)</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Wc Quarto 3</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Garagem coberta</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Quintal/Becos</p>
                                </div>
                                <div class="mt-4 p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                                    <i class="fas fa-info-circle text-blue-500 mr-1"></i>
                                    <strong>Nota:</strong> As dimensões apresentadas na planta são aproximadas e baseadas em medições manuais, podendo haver pequenas variações em relação à área real.
                                </div>
                            </div>

                            <!-- Card Contato -->
                            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-address-card text-purple-500"></i> Informações de Contato
                                </h3>
                                <div class="flex items-center gap-4 bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl border border-slate-100 dark:border-slate-600">
                                    <div class="w-12 h-12 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-300 text-xl shrink-0">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 dark:text-white text-lg">Edilson Vitor</p>
                                        <p class="text-slate-500 dark:text-slate-300 font-mono text-sm">(81) 98566-1070</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Card Links -->
                            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-external-link-alt text-indigo-500"></i> Acesso Rápido
                                </h3>
                                <div class="grid grid-cols-1 gap-3">
                                    <a href="https://maps.app.goo.gl/x1mKPubBDxvMATHs8" target="_blank" class="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-slate-600 p-3 rounded-xl border border-slate-100 dark:border-slate-600 transition-colors text-sm font-semibold text-slate-700 dark:text-slate-200 group">
                                        <span><i class="fas fa-map-marker-alt mr-2 text-red-500"></i> Ver localização no Maps</span>
                                        <i class="fas fa-chevron-right opacity-30 group-hover:opacity-100 transition-opacity"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Footer do Modal com Alerta Final -->
                        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
                            <p class="text-[11px] text-slate-400 dark:text-slate-500 italic">
                                * Este anúncio contém 20 fotos reais que detalham todos os cômodos e a conservação do imóvel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    `
}