export default {
    props: ['show'],
    emits: ['close'],
    template: `
        <Teleport to="body">
            <div v-if="show" class="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm" @click.self="$emit('close')">
                <div class="bg-slate-50 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.3s_ease-out]">
                    
                    <!-- Header do Modal -->
                    <div class="bg-white px-6 py-5 border-b border-slate-200 flex justify-between items-center shrink-0">
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-800">Casa à Venda - Abreu e Lima</h2>
                            <p class="text-sm text-slate-500 font-medium mt-1">Alto da Bela Vista</p>
                        </div>
                        <button @click="$emit('close')" class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <!-- Corpo do Modal (Scroll) -->
                    <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
                        
                        <!-- Destaque Preço -->
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <span class="block text-green-700 text-sm font-bold uppercase tracking-wider mb-1">Preço Inicial</span>
                                <span class="text-3xl md:text-4xl font-extrabold text-green-800">R$ 160.000,00</span>
                            </div>
                            <div class="text-right text-sm text-emerald-700 font-medium">
                                <p><i class="fas fa-bolt mr-1"></i> Energia econômica</p>
                                <p><i class="fas fa-tint mr-1"></i> Não paga água</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            <!-- Card Localização -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-map-marked-alt text-red-500"></i> Localização
                                </h3>
                                <ul class="space-y-3 text-slate-600 text-sm">
                                    <li><strong class="text-slate-700">CEP:</strong> 53510-480</li>
                                    <li><strong class="text-slate-700">Bairro:</strong> Alto da Bela Vista (CEP indica Centro)</li>
                                    <li><strong class="text-slate-700">Cidade:</strong> Abreu e Lima / PE</li>
                                    <li><i class="fas fa-road text-slate-400 mr-2"></i> Rua asfaltada</li>
                                    <li><i class="fas fa-school text-slate-400 mr-2"></i> Próximo a 3 escolas (ETE, Erem e Municipal)</li>
                                    <li><i class="fas fa-clinic-medical text-slate-400 mr-2"></i> Posto de saúde na mesma rua</li>
                                </ul>
                            </div>

                            <!-- Card Imóvel -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-home text-blue-500"></i> Dados do Imóvel
                                </h3>
                                <div class="grid grid-cols-2 gap-2 text-slate-600 text-sm">
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Sala de estar</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>03 Quartos</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Cozinha</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Banheiro Social</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Wc na Suíte (Q2)</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Wc no Quarto 3</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Corredor interno</p>
                                    <p><i class="fas fa-check text-green-500 mr-2"></i>Garagem coberta</p>
                                </div>
                                <div class="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-sm space-y-2">
                                    <p><i class="fas fa-wind text-teal-500 mr-2"></i>Quintal amplo com becos (ótima ventilação)</p>
                                    <p><i class="fas fa-door-open text-orange-500 mr-2"></i>Entrada com portão de garagem</p>
                                </div>
                            </div>

                            <!-- Card Contato -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-address-card text-purple-500"></i> Contato
                                </h3>
                                <div class="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-xl shrink-0">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-800 text-lg">Edilson Vitor</p>
                                        <p class="text-slate-500 font-mono text-sm">(81) 98566-1070</p>
                                    </div>
                                </div>
                                <p class="text-xs text-slate-400 mt-3">* Anúncio contém 20 fotos detalhando fachada e cômodos.</p>
                            </div>

                            <!-- Card Links Rápidos -->
                            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 class="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                                    <i class="fas fa-link text-indigo-500"></i> Links Rápidos
                                </h3>
                                <div class="space-y-3">
                                    <a href="https://maps.app.goo.gl/x1mKPubBDxvMATHs8" target="_blank" class="block bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 text-slate-600 hover:text-blue-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between group">
                                        <span><i class="fas fa-map mr-2"></i> Ver no Google Maps</span>
                                        <i class="fas fa-external-link-alt opacity-50 group-hover:opacity-100"></i>
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=%2B5581985661070&text&type=phone_number&app_absent=0" target="_blank" class="block bg-slate-50 hover:bg-green-50 border border-slate-100 hover:border-green-200 text-slate-600 hover:text-green-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between group">
                                        <span><i class="fab fa-whatsapp text-lg mr-2"></i> Falar no WhatsApp</span>
                                        <i class="fas fa-external-link-alt opacity-50 group-hover:opacity-100"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    `
}