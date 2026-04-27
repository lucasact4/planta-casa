import { store } from '../store.js';

export default {
    data() {
        return {
            store, 
            zoomLevel: 1,
            isDragging: false,
            startX: 0,
            startY: 0,
            panX: 0,
            panY: 0,
            // Novas variáveis para controle do toque (Mobile)
            initialDistance: null,
            initialZoom: null
        }
    },
    methods: {
        // --- CONTROLES DE MOUSE/DESKTOP ---
        zoomIn() { if (this.zoomLevel < 3) this.zoomLevel += 0.2; },
        zoomOut() { if (this.zoomLevel > 0.4) this.zoomLevel -= 0.2; },
        resetZoom() { this.zoomLevel = 1; this.panX = 0; this.panY = 0; },
        handleWheel(e) { e.deltaY < 0 ? this.zoomIn() : this.zoomOut(); },
        startDrag(e) {
            this.isDragging = true;
            this.startX = e.clientX;
            this.startY = e.clientY;
        },
        onDrag(e) {
            if (!this.isDragging) return;
            e.preventDefault();
            this.panX += (e.clientX - this.startX) / this.zoomLevel;
            this.panY += (e.clientY - this.startY) / this.zoomLevel;
            this.startX = e.clientX;
            this.startY = e.clientY;
        },
        stopDrag() { this.isDragging = false; },

        // --- CONTROLES TOUCH/MOBILE ---
        // Calcula a distância entre dois dedos na tela
        getDistance(touches) {
            const dx = touches[0].clientX - touches[1].clientX;
            const dy = touches[0].clientY - touches[1].clientY;
            return Math.sqrt(dx * dx + dy * dy);
        },
        handleTouchStart(e) {
            if (e.touches.length === 1) {
                // Um dedo: Inicia o Pan (Arrastar)
                this.isDragging = true;
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            } else if (e.touches.length === 2) {
                // Dois dedos: Inicia o Zoom (Pinça)
                this.isDragging = false;
                this.initialDistance = this.getDistance(e.touches);
                this.initialZoom = this.zoomLevel;
            }
        },
        handleTouchMove(e) {
            if (e.touches.length === 1 && this.isDragging) {
                // Arrastando com um dedo
                const dx = e.touches[0].clientX - this.startX;
                const dy = e.touches[0].clientY - this.startY;
                this.panX += dx / this.zoomLevel;
                this.panY += dy / this.zoomLevel;
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            } else if (e.touches.length === 2 && this.initialDistance) {
                // Fazendo pinça com dois dedos
                const currentDistance = this.getDistance(e.touches);
                const scale = currentDistance / this.initialDistance;
                let newZoom = this.initialZoom * scale;
                
                // Limita o zoom entre 0.4x e 3x
                if (newZoom < 0.4) newZoom = 0.4;
                if (newZoom > 3) newZoom = 3;
                
                this.zoomLevel = newZoom;
            }
        },
        handleTouchEnd(e) {
            if (e.touches.length < 2) {
                this.initialDistance = null;
            }
            if (e.touches.length === 1) {
                // Se o usuário soltou um dedo e deixou o outro, retoma o arraste sem pular a tela
                this.isDragging = true;
                this.startX = e.touches[0].clientX;
                this.startY = e.touches[0].clientY;
            } else if (e.touches.length === 0) {
                this.isDragging = false;
            }
        }
    },
    template: `
        <div class="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden relative flex justify-center blueprint-bg h-[55vh] lg:h-auto lg:min-h-[800px]"
             style="touch-action: none;"
             @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag" @wheel.prevent="handleWheel"
             @touchstart="handleTouchStart" @touchmove.prevent="handleTouchMove" @touchend="handleTouchEnd" @touchcancel="handleTouchEnd">
             
            <div class="absolute top-4 right-4 flex flex-col gap-2 bg-white/70 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/50 z-10">
                <button @click="zoomIn" class="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center bg-white hover:bg-slate-50 rounded-xl text-slate-700 font-bold text-xl shadow-sm border border-slate-100 transition-all active:scale-95">+</button>
                <button @click="zoomOut" class="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center bg-white hover:bg-slate-50 rounded-xl text-slate-700 font-bold text-xl shadow-sm border border-slate-100 transition-all active:scale-95">-</button>
                <div class="h-px bg-slate-200/60 w-full my-0.5"></div>
                <button @click="resetZoom" class="w-10 h-10 md:w-9 md:h-9 flex items-center justify-center bg-white hover:bg-slate-50 rounded-xl text-slate-700 shadow-sm border border-slate-100 transition-all active:scale-95">
                    <svg class="w-4 h-4 md:w-4 md:h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
            </div>

            <svg viewBox="-80 -60 980 1680" class="w-full h-full lg:max-h-[850px] drop-shadow-md"
                 :style="{ transform: \`scale(\${zoomLevel}) translate(\${panX}px, \${panY}px)\`, transformOrigin: 'center center', cursor: isDragging ? 'grabbing' : 'grab', transition: isDragging ? 'none' : 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)' }">
                
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs>
                <rect x="0" y="0" width="780" height="1550" fill="#0f172a" rx="4" />

                <g v-for="wall in store.data.walls" :key="wall.id" class="interactive-element wall" :class="{ 'active': store.activeElement && store.activeElement.id === wall.id }" @click.prevent="store.toggleElement(wall)">
                    <rect :x="wall.x" :y="wall.y" :width="wall.w" :height="wall.h" class="wall-rect" />
                </g>

                <g v-for="room in store.data.rooms" :key="room.id">
                    <path v-if="room.path" :d="room.path" :fill="room.color" class="room" :class="{ 'active': store.activeElement && store.activeElement.id === room.id }" @click.prevent="store.toggleElement(room)" />
                    <rect v-else :x="room.x" :y="room.y" :width="room.w" :height="room.h" :fill="room.color" class="room" :class="{ 'active': store.activeElement && store.activeElement.id === room.id }" @click.prevent="store.toggleElement(room)" />
                    
                    <text :x="room.labelX || (room.x + room.w / 2)" :y="(room.labelY || (room.y + room.h / 2)) - 12" text-anchor="middle" alignment-baseline="middle" class="font-bold text-[14px] pointer-events-none fill-slate-800/90 tracking-wide">{{ room.name }}</text>
                    <text :x="room.labelX || (room.x + room.w / 2)" :y="(room.labelY || (room.y + room.h / 2)) + 12" text-anchor="middle" alignment-baseline="middle" class="text-[13px] pointer-events-none fill-slate-700/80 font-mono font-medium bg-white">{{ room.area.toFixed(1) }} m²</text>
                </g>
                
                <rect v-for="(gap, i) in store.data.passages" :key="'gap-'+i" :x="gap.x" :y="gap.y" :width="gap.w" :height="gap.h" fill="#ffffff" class="interactive-element passage" :class="{ 'active': store.activeElement && store.activeElement.id === gap.id }" @click.prevent="store.toggleElement(gap)" />

                <g v-for="(door, i) in store.data.doors" :key="'door-'+i" class="interactive-element" :class="{ 'active': store.activeElement && store.activeElement.id === door.id }" @click.prevent="store.toggleElement(door)">
                    <rect :x="door.gap.x" :y="door.gap.y" :width="door.gap.w" :height="door.gap.h" fill="#ffffff" />
                    <path v-if="door.arc" :d="door.arc" class="door-arc" />
                    <line v-if="door.leaf" :x1="door.leaf.x1" :y1="door.leaf.y1" :x2="door.leaf.x2" :y2="door.leaf.y2" class="door-leaf" />
                </g>

                <g v-for="(win, i) in store.data.windows" :key="'win-'+i" class="interactive-element" :class="{ 'active': store.activeElement && store.activeElement.id === win.id }" @click.prevent="store.toggleElement(win)">
                    <rect :x="win.x" :y="win.y" :width="win.w" :height="win.h" class="window-box" />
                    <line v-if="win.w > win.h" :x1="win.x" :y1="win.y + win.h/2" :x2="win.x + win.w" :y2="win.y + win.h/2" class="window-line" />
                    <line v-else :x1="win.x + win.w/2" :y1="win.y" :x2="win.x + win.w/2" :y2="win.y + win.h" class="window-line" />
                </g>

                <g class="measurements font-mono fill-slate-400 text-[14px]">
                    <text x="390" y="-30" text-anchor="middle" class="font-medium">7.80 m</text>
                    <line x1="0" y1="-15" x2="780" y2="-15" stroke="#cbd5e1" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />
                    <text x="-40" y="775" text-anchor="middle" transform="rotate(-90, -40, 775)" class="font-medium">15.50 m</text>
                    <line x1="-25" y1="0" x2="-25" y2="1550" stroke="#cbd5e1" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />
                </g>
            </svg>
        </div>
    `
}