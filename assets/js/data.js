export const planData = {
    rooms: [
        { 
            id: 'entrada', type: 'room', name: 'Entrada', w: 750, h: 117, x: 15, y: 15, color: '#fee28b', area: 8.6, 
            images: [
                'assets/images/entrada.jpg', 
                'assets/images/frente_da_casa_retrato.jpg', 
                'assets/images/frente_da_casa_portão_fechado.jpg', 
                'assets/images/frente_da_casa_portão_aberto.jpg'
            ] 
        },
        { 
            id: 'garagem', type: 'room', name: 'Garagem', w: 360, h: 360, x: 110, y: 147, color: '#f6f6f6', area: 13.0, 
            images: ['assets/images/garagem.jpg'] 
        },
        { 
            id: 'sala', type: 'room', name: 'Sala de estar', w: 280, h: 297, x: 485, y: 147, color: '#fcd8b8', area: 8.3, 
            images: ['assets/images/sala_de_estar.jpg'] 
        },
        { 
            id: 'cozinha', type: 'room', name: 'Cozinha', w: 280, h: 390, x: 485, y: 459, color: '#c6e5ef', area: 10.9, 
            images: ['assets/images/cozinha.jpg'] 
        },
        { 
            id: 'corredor', type: 'room', name: 'Corredor', w: 165, h: 255, x: 485, y: 864, color: '#f6f6f6', area: 4.2, 
            images: ['assets/images/corredor.jpg'] 
        },
        { 
            id: 'banheiro_soc', type: 'room', name: 'Banheiro Social', w: 100, h: 255, x: 665, y: 864, color: '#c4c3e0', area: 2.6, 
            images: ['assets/images/banheiro_social_lado_1.jpg', 'assets/images/banheiro_social_lado_2.jpg'] 
        },
        { 
            id: 'quarto1', type: 'room', name: 'Quarto 1', w: 360, h: 285, x: 110, y: 522, color: '#fad0d0', area: 10.3, 
            images: ['assets/images/quarto_1.jpg'] 
        },
        { 
            id: 'quarto2', type: 'room', name: 'Quarto 2', w: 360, h: 297, x: 110, y: 822, color: '#fad0d0', area: 10.7, 
            images: ['assets/images/quarto_2.jpg'] 
        },
        { 
            id: 'banheiro_q2', type: 'room', name: 'Banheiro (Q2)', w: 100, h: 225, x: 110, y: 1134, color: '#c4c3e0', area: 2.3, 
            images: ['assets/images/banheiro_quarto_2.jpg'] 
        },
        { 
            id: 'banheiro_q3', type: 'room', name: 'Banheiro (Q3)', w: 100, h: 100, x: 665, y: 1307, color: '#c4c3e0', area: 1.0, 
            images: ['assets/images/banheiro_quarto_3.jpg'] 
        },
        { 
            id: 'quarto3', type: 'room', name: 'Quarto 3', color: '#fad0d0', area: 5.0, 
            path: 'M 470 1307 L 650 1307 L 650 1422 L 765 1422 L 765 1535 L 470 1535 Z', 
            labelX: 560, labelY: 1420, 
            images: ['assets/images/quarto_3.jpg'] 
        },
        { 
            id: 'ao_ar_livre', type: 'room', name: 'Quintal', color: '#9dd5ae', area: 27.8, 
            path: 'M 15 147 L 95 147 L 95 1374 L 225 1374 L 225 1134 L 765 1134 L 765 1292 L 455 1292 L 455 1535 L 15 1535 Z', 
            labelX: 180, labelY: 1450, 
            images: [
                'assets/images/quintal.jpg',
                'assets/images/beco_do_quintal.jpg',
                'assets/images/quintal_area_servico_1.jpg',
                'assets/images/quintal_area_servico_2.jpg',
                'assets/images/quintal_beco.jpg',
                'assets/images/quintal_entrada_do_beco.jpg',
                'assets/images/quintal_saida_do_beco.jpg'
            ] 
        }
    ],
    passages: [
        { id: 'p3', type: 'passage', name: 'Vazado / Muro Frontal', size: '2.48m', color: '#cbd5e1', x: 170, y: 132, w: 248, h: 15, images: ['assets/images/portas_janelas/vazado_muro_frontal.jpg'] },
        { id: 'p1', type: 'passage', name: 'Entryway (Sala/Coz)', size: '0.80m', color: '#cbd5e1', x: 485, y: 444, w: 80, h: 15, images: ['assets/images/portas_janelas/entryway_sala_cozinha.jpg', 'assets/images/portas_janelas/janela_abertura_sala_cozinha.jpg'] },
        { id: 'p2', type: 'passage', name: 'Entryway (Coz/Corredor)', size: '0.80m', color: '#cbd5e1', x: 485, y: 849, w: 80, h: 15, images: ['assets/images/portas_janelas/entryway_corredor_cozinha.jpg'] },
        { id: 'p4', type: 'passage', name: 'Entryway (Banheiro Q2)', size: '0.90m', color: '#cbd5e1', x: 115, y: 1119, w: 90, h: 15, images: ['assets/images/portas_janelas/entryway_banheiro_quarto_2.jpg'] },
        { id: 'p5', type: 'passage', name: 'Entryway (Banheiro Q3)', size: '0.68m', color: '#cbd5e1', x: 650, y: 1339, w: 15, h: 68, images: ['assets/images/portas_janelas/entryway_banheiro_quarto_3.jpg'] },
    ],
    doors: [
        { id: 'd1', type: 'door', name: 'Porta de Entrada', size: '0.75m', color: '#94a3b8', gap: { x: 470, y: 217, w: 15, h: 75 }, leaf: { x1: 485, y1: 217, x2: 560, y2: 217 }, arc: 'M 560 217 A 75 75 0 0 1 485 292', images: ['assets/images/portas_janelas/porta_de_entrada.jpg'] },
        { id: 'd2', type: 'door', name: 'Porta (Quarto 1)', size: '0.80m', color: '#94a3b8', gap: { x: 470, y: 725, w: 15, h: 80 }, leaf: { x1: 470, y1: 805, x2: 390, y2: 805 }, arc: 'M 390 805 A 80 80 0 0 1 470 725', images: ['assets/images/portas_janelas/porta_quarto_1.jpg', 'assets/images/portas_janelas/porta_quarto_1_fora.jpg'] },
        { id: 'd3', type: 'door', name: 'Porta (Quarto 2)', size: '0.80m', color: '#94a3b8', gap: { x: 470, y: 865, w: 15, h: 80 }, leaf: { x1: 470, y1: 865, x2: 390, y2: 865 }, arc: 'M 390 865 A 80 80 0 0 0 470 945', images: ['assets/images/portas_janelas/porta_quarto_2.jpg'] },
        { id: 'd4', type: 'door', name: 'Porta (Banheiro Social)', size: '0.70m', color: '#94a3b8', gap: { x: 650, y: 865, w: 15, h: 70 }, leaf: { x1: 665, y1: 866, x2: 735, y2: 866 }, arc: 'M 735 866 A 70 70 0 0 1 665 936', images: ['assets/images/portas_janelas/porta_banheiro_social.jpg'] },
        { 
            id: 'd5', type: 'gate', name: 'Portão Quintal / Corredor', size: '0.80m', color: '#64748b', gap: { x: 485, y: 1119, w: 80, h: 15 }, 
            leaf: { x1: 485, y1: 1119, x2: 485, y2: 1039 }, arc: 'M 485 1039 A 80 80 0 0 1 565 1119', 
            images: ['assets/images/portas_janelas/portao_quintal_corredor.jpg'] 
        },
        { id: 'd6', type: 'door', name: 'Porta (Quarto 3)', size: '0.70m', color: '#94a3b8', gap: { x: 470, y: 1292, w: 70, h: 15 }, leaf: { x1: 470, y1: 1307, x2: 470, y2: 1377 }, arc: 'M 470 1377 A 70 70 0 0 0 540 1307' },
        { id: 'd9', type: 'gate', name: 'Portão Social Frontal', size: '0.88m', color: '#64748b', gap: { x: 15, y: 132, w: 80, h: 15 }, leaf: { x1: 15, y1: 147, x2: 15, y2: 235 }, arc: 'M 15 235 A 90 90 0 0 0 95 147', images: ['assets/images/portas_janelas/portao_social_frontal.jpg'] }
    ],
    windows: [
        { id: 'w1', type: 'gate', name: 'Portão da Garagem', size: '2.65m', color: '#64748b', x: 155, y: 0, w: 265, h: 15, images: ['assets/images/portas_janelas/portao_da_garagem.jpg'] },
        { id: 'w3', type: 'window', name: 'Janela (Sala)', size: '1.00m', color: '#bae6fd', x: 575, y: 132, w: 100, h: 15, images: ['assets/images/portas_janelas/janela_sala_dentro.jpg', 'assets/images/portas_janelas/janela_sala_fora.jpg', 'assets/images/portas_janelas/janela_entrada_rua.jpg'] },
        { id: 'w6', type: 'window', name: 'Janela (Quarto 2)', size: '0.58m', color: '#bae6fd', x: 95, y: 930, w: 15, h: 58, images: ['assets/images/portas_janelas/janela_quarto_2.jpg'] },
        { id: 'w8', type: 'window', name: 'Janela (Banheiro Q2)', size: '0.40m', color: '#bae6fd', x: 140, y: 1359, w: 40, h: 15, images: ['assets/images/portas_janelas/janela_banheiro_2.jpg'] },
        { id: 'w10', type: 'window', name: 'Janela (Quarto 3)', size: '0.80m', color: '#bae6fd', x: 455, y: 1380, w: 15, h: 80, images: ['assets/images/portas_janelas/janela_quarto_3.jpg'] },
        { id: 'w11', type: 'window', name: 'Janela (Banheiro Social)', size: '0.40m', color: '#bae6fd', x: 695, y: 1119, w: 40, h: 15, images: ['assets/images/portas_janelas/janela_banheiro_social.jpg'] },
        { id: 'w12', type: 'window', name: 'Janela (Quarto 1)', size: '1.00m', color: '#bae6fd', x: 240, y: 507, w: 100, h: 15, images: ['assets/images/portas_janelas/janela_quarto_1.jpg'] },
    ],
    walls: [
        // PAREDES EXTERNAS (Muros e Limites)
        { id: 'wall_left', type: 'wall', name: 'Parede Externa Esquerda', size: '15.50m', thickness: '0.15m', color: '#475569', x: 0, y: 0, w: 15, h: 1550 },
        { id: 'wall_right', type: 'wall', name: 'Parede Externa Direita', size: '15.50m', thickness: '0.15m', color: '#475569', x: 765, y: 0, w: 15, h: 1550 },
        { id: 'wall_top', type: 'wall', name: 'Parede Frontal (Muro)', size: '7.50m', thickness: '0.15m', color: '#475569', x: 15, y: 0, w: 750, h: 15 },
        { id: 'wall_bottom', type: 'wall', name: 'Parede do Fundo', size: '7.50m', thickness: '0.15m', color: '#475569', x: 15, y: 1535, w: 750, h: 15 },
        { id: 'wall_front_in', type: 'wall', name: 'Divisória Entrada/Garagem', size: '6.70m', thickness: '0.15m', color: '#475569', x: 95, y: 132, w: 670, h: 15 },
        
        // EIXO CENTRAL (A parede principal que divide a casa ao meio)
        { id: 'wall_center_top', type: 'wall', name: 'Divisória Central Superior', size: '9.87m', thickness: '0.15m', color: '#475569', x: 470, y: 147, w: 15, h: 987 },
        { id: 'wall_center_bottom', type: 'wall', name: 'Divisória Central Inferior', size: '2.43m', thickness: '0.15m', color: '#475569', x: 455, y: 1292, w: 15, h: 243 },
        
        // CORREDOR LATERAL (Parede do "Ao ar livre" lateral esquerdo)
        { id: 'wall_left_inner', type: 'wall', name: 'Parede Corredor Externo', size: '12.27m', thickness: '0.15m', color: '#475569', x: 95, y: 147, w: 15, h: 1227 },
        
        // DIVISÓRIAS INTERNAS - BLOCO ESQUERDO (Quartos)
        { id: 'wall_garagem_q1', type: 'wall', name: 'Parede Garagem / Quarto 1', size: '3.60m', thickness: '0.15m', color: '#475569', x: 110, y: 507, w: 360, h: 15 },
        { id: 'wall_q1_q2', type: 'wall', name: 'Parede Quarto 1 / Quarto 2', size: '3.60m', thickness: '0.15m', color: '#475569', x: 110, y: 807, w: 360, h: 15 },
        { id: 'wall_q2_wc2', type: 'wall', name: 'Parede Quarto 2 / Banheiro Q2', size: '3.60m', thickness: '0.15m', color: '#475569', x: 110, y: 1119, w: 360, h: 15 },
        { id: 'wall_wc2_jardim', type: 'wall', name: 'Parede Banheiro Q2 / Área Livre', size: '2.40m', thickness: '0.15m', color: '#475569', x: 210, y: 1134, w: 15, h: 240 },
        { id: 'wall_wc2_bottom', type: 'wall', name: 'Parede Fundo Banheiro Q2', size: '1.15m', thickness: '0.15m', color: '#475569', x: 110, y: 1359, w: 115, h: 15 },
        
        // DIVISÓRIAS INTERNAS - BLOCO DIREITO (Sala, Coz, Wc)
        { id: 'wall_sala_coz', type: 'wall', name: 'Parede Sala / Cozinha', size: '2.80m', thickness: '0.15m', color: '#475569', x: 485, y: 444, w: 280, h: 15 },
        { id: 'wall_coz_corredor', type: 'wall', name: 'Parede Cozinha / Corredor', size: '2.80m', thickness: '0.15m', color: '#475569', x: 485, y: 849, w: 280, h: 15 },
        { id: 'wall_corredor_wc', type: 'wall', name: 'Parede Corredor / Banheiro Soc.', size: '2.55m', thickness: '0.15m', color: '#475569', x: 650, y: 864, w: 15, h: 255 },
        
        // DIVISÓRIAS INTERNAS - BLOCO FUNDO (Jardim de Inverno e Quarto 3)
        { id: 'wall_corredor_jardim', type: 'wall', name: 'Parede Interna / Jardim', size: '2.80m', thickness: '0.15m', color: '#475569', x: 485, y: 1119, w: 280, h: 15 },
        { id: 'wall_jardim_q3', type: 'wall', name: 'Parede Jardim / Quarto 3', size: '3.10m', thickness: '0.15m', color: '#475569', x: 455, y: 1292, w: 310, h: 15 },
        { id: 'wall_q3_wc3', type: 'wall', name: 'Parede Quarto 3 / Banheiro Q3', size: '1.15m', thickness: '0.15m', color: '#475569', x: 650, y: 1307, w: 15, h: 115 },
        { id: 'wall_wc3_bottom', type: 'wall', name: 'Parede Fundo Banheiro Q3', size: '1.15m', thickness: '0.15m', color: '#475569', x: 650, y: 1407, w: 115, h: 15 }
    ]
};