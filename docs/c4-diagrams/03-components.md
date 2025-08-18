# Diagrama C4 - Nivel 3: Componentes

## CreadorCraft-Classic-Backend - Componentes del Servidor de Juego

Este diagrama muestra los componentes principales dentro del contenedor "Servidor de Juego Principal" y sus interacciones internas.

```mermaid
C4Component
    title Servidor de Juego Principal - Componentes Internos

    Container(apiGateway, "API Gateway", "Node.js/Express", "Punto de entrada para requests autenticados")
    Container(realtimeComm, "Comunicacion TR", "WebSocket", "Manejo de eventos en tiempo real")
    ContainerDb(gameDatabase, "Base de Datos", "JSON Storage", "Persistencia de datos del juego")

    Container_Boundary(gameServer, "Servidor de Juego Principal") {
        Component(gameOrchestrator, "Orquestador del Juego", "Node.js Controller", "Coordina todos los modos de juego y el ecosistema general")
        
        Component(worldManager, "Gestor de Mundos", "Generador Class", "Crea, carga y gestiona mundos de juego usando la clase Generador")
        
        Component(entitySystem, "Sistema de Entidades", "Entity/Player Classes", "Gestiona todas las entidades del juego incluyendo jugadores y NPCs")
        
        Component(blockSystem, "Sistema de Bloques", "Block Classes", "Maneja la colocación, destrucción y tipos de bloques")
        
        Component(biomeGenerator, "Generador de Biomas", "Biome Classes", "Genera diferentes biomas y características del terreno")
        
        Component(gameModeManager, "Gestor de Modos", "Node.js Service", "Coordina los diferentes modos de juego y sus interacciones")
        
        Component(eventDispatcher, "Despachador de Eventos", "EventEmitter", "Distribuye eventos entre componentes internos")
        
        Component(saveManager, "Gestor de Guardado", "Node.js Service", "Maneja la persistencia automatica y manual del estado")
        
        Component(validationEngine, "Motor de Validacion", "Node.js Validator", "Valida todas las acciones de jugadores y cambios de estado")
    }

    ' Relaciones externas
    Rel(apiGateway, gameOrchestrator, "Requests de configuracion", "HTTP/JSON")
    Rel(realtimeComm, gameOrchestrator, "Eventos de jugadores", "Events/JSON")
    Rel(saveManager, gameDatabase, "Persistir datos", "JSON I/O")

    ' Relaciones internas
    Rel(gameOrchestrator, gameModeManager, "Coordinar modos", "Comandos internos")
    Rel(gameOrchestrator, worldManager, "Gestion de mundos", "API interna")
    Rel(gameOrchestrator, eventDispatcher, "Distribuir eventos", "Events")
    
    Rel(worldManager, entitySystem, "Spawning de entidades", "Factory calls")
    Rel(worldManager, blockSystem, "Generacion de bloques", "Builder pattern")
    Rel(worldManager, biomeGenerator, "Generar biomas", "Strategy pattern")
    Rel(worldManager, saveManager, "Solicitar guardado", "Commands")
    
    Rel(entitySystem, blockSystem, "Interaccion entidad-bloque", "Collision detection")
    Rel(entitySystem, validationEngine, "Validar movimientos", "Validation calls")
    Rel(entitySystem, eventDispatcher, "Eventos de entidad", "Event emission")
    
    Rel(blockSystem, eventDispatcher, "Eventos de bloque", "Event emission")
    Rel(gameModeManager, entitySystem, "Control de entidades por modo", "Mode-specific logic")
    
    Rel(validationEngine, eventDispatcher, "Errores de validacion", "Error events")
    Rel(eventDispatcher, realtimeComm, "Broadcasting", "WebSocket events")
    
    UpdateRelStyle(gameOrchestrator, worldManager, $textColor="blue", $lineColor="blue")
    UpdateRelStyle(worldManager, entitySystem, $textColor="green", $lineColor="green")
    UpdateRelStyle(entitySystem, blockSystem, $textColor="purple", $lineColor="purple")
```

## Descripción de Componentes

### 🎮 **Orquestador del Juego**
- **Responsabilidad**: Punto central de control y coordinación
- **Funciones Principales**:
  - Inicialización y configuración del servidor
  - Coordinación entre todos los subsistemas
  - Manejo de conexiones y desconexiones de jugadores
  - Implementación de la lógica del "juego final"
  - Balanceamiento de carga entre modos de juego

```javascript
class GameOrchestrator {
    constructor() {
        this.gameModes = new Map();
        this.activeWorlds = new Map();
        this.playerSessions = new Map();
    }
    
    async startGameSession(playerId, worldId) {
        // Coordina el inicio de sesión entre todos los subsistemas
    }
    
    async handleFinalGameMode(participants) {
        // Implementa la lógica del juego final que requiere sinergia
    }
}
```

### 🌍 **Gestor de Mundos**
- **Basado en**: Clase `Generador` existente
- **Responsabilidades**:
  - Creación de nuevos mundos (`genNewWorld`)
  - Carga de mundos existentes (`genWorld`)
  - Actualización continua del estado del mundo
  - Gestión de la pantalla visible (`updateScreen`)
  - Guardado automático cada 10 minutos

```javascript
// Basado en la clase Generador existente
class Generador {
    constructor(worldJson, id) {
        this.world = worldJson;
        this.player = new Player(/* ... */);
        this.id = id;
        setInterval(this.save.bind(this), 600000); // Auto-save cada 10 min
    }
    
    static genNewWorld(id, name) { /* Implementación existente */ }
    static genWorld(id) { /* Implementación existente */ }
    updateScreen() { /* Implementación existente */ }
}
```

### 👥 **Sistema de Entidades**
- **Basado en**: Clases `Entity` y `Player` existentes
- **Responsabilidades**:
  - Gestión del ciclo de vida de todas las entidades
  - Sistema de colisiones y física básica
  - Implementación de IA para NPCs
  - Manejo de inventarios y estados de jugador

```javascript
// Basado en la clase Entity existente
class Entity {
    constructor(x, y, world, vid) {
        this.vid = vid;
        this.x = x;
        this.y = y;
        this.world = world;
        this.uniqueId = -1;
    }
    
    moveIF() { /* Movimiento */ }
    damage(vidD) { /* Sistema de daño */ }
    hit(entity) { /* Combate */ }
    initIA() { /* Inteligencia artificial básica */ }
}

// Entidades específicas existentes
class Player extends Entity { /* ... */ }
class Zombie extends Entity { /* ... */ }
class Tryhardero extends Entity { /* ... */ }
```

### 🧱 **Sistema de Bloques**
- **Basado en**: Clases de bloques existentes
- **Responsabilidades**:
  - Registro y gestión de tipos de bloques
  - Sistema de crafting y recetas
  - Física de bloques (gravedad, estabilidad)
  - Interacciones especiales (mesas de craft, etc.)

```javascript
// Tipos de bloques existentes
class Block { /* Clase base */ }
class BlockTierra extends Block { /* ... */ }
class BlockPiedra extends Block { /* ... */ }
class BlockMesaDeCraft extends Block { /* ... */ }
class BlockHierro extends Block { /* ... */ }
// ... y muchos más tipos
```

### 🏔️ **Generador de Biomas**
- **Basado en**: Clases `Biome` y `SubBiome` existentes
- **Responsabilidades**:
  - Generación procedimental de terreno
  - Distribución de recursos por bioma
  - Spawning de entidades específicas por bioma
  - Efectos ambientales (clima, temperatura)

```javascript
// Basado en clases existentes
class Biome {
    static biomesIds = ["nevado", "normal", "desierto", "oceano", "FortalezaFin"];
    
    constructor(xMin, xMax, world, subBiome) {
        this.subBiome = Biome.getSubBiomeById(this.subBiomeId);
    }
    
    generateTerrain() { /* Generación de terreno */ }
    static getBiomeById(id, xMin, xMax, world, subBiome) { /* Factory */ }
}

class SubBiomeUni {
    static subBiomesIds = ["montaña", "normal", "cuevas", "arbol"];
}
```

### 🎯 **Gestor de Modos de Juego**
- **Responsabilidades**:
  - Coordinación de los diferentes modos:
    - **Modo Aventura**: Exploración y progresión
    - **Modo Economía**: Tiendas y comercio
    - **Modo Creación**: Diseño de niveles
    - **Juego Final**: Sinergia de todos los modos
  - Transiciones suaves entre modos
  - Manejo de progresión compartida

```javascript
class GameModeManager {
    constructor() {
        this.modes = {
            adventure: new AdventureMode(),
            economy: new EconomyMode(),
            creation: new CreationMode(),
            finalGame: new FinalGameMode()
        };
    }
    
    async switchMode(playerId, newMode) {
        // Transición entre modos manteniendo progreso
    }
    
    checkFinalGameRequirements(playerId) {
        // Verifica si cumple requisitos para juego final
    }
}
```

### ⚡ **Despachador de Eventos**
- **Basado en**: EventEmitter de Node.js
- **Responsabilidades**:
  - Hub central para comunicación entre componentes
  - Desacoplamiento de componentes mediante eventos
  - Logging y auditoría de eventos críticos
  - Broadcasting eficiente a clientes

```javascript
class EventDispatcher extends EventEmitter {
    constructor() {
        super();
        this.eventHistory = [];
        this.setupCoreListeners();
    }
    
    emitGameEvent(eventType, data, broadcast = true) {
        this.eventHistory.push({ eventType, data, timestamp: Date.now() });
        this.emit(eventType, data);
        
        if (broadcast) {
            this.broadcastToClients(eventType, data);
        }
    }
}
```

### 💾 **Gestor de Guardado**
- **Responsabilidades**:
  - Auto-save cada 10 minutos (como en implementación actual)
  - Save en eventos críticos (desconexión, cambios importantes)
  - Compresión y optimización de datos JSON
  - Sistema de backup y recuperación

```javascript
class SaveManager {
    constructor() {
        this.saveQueue = new Map();
        this.lastSave = new Map();
        this.setupAutoSave();
    }
    
    setupAutoSave() {
        setInterval(() => {
            this.saveAllWorlds();
        }, 600000); // 10 minutos como en implementación actual
    }
    
    async saveWorld(worldId, worldData) {
        GameProps.getStorage().set(worldId, JSON.stringify(worldData));
    }
}
```

### ✅ **Motor de Validación**
- **Responsabilidades**:
  - Validación de movimientos de jugador
  - Anti-cheat básico (velocidad, teleportación)
  - Validación de acciones de construcción
  - Verificación de inventario y recursos

```javascript
class ValidationEngine {
    validatePlayerMovement(playerId, from, to) {
        const maxSpeed = 5; // bloques por segundo
        const distance = this.calculateDistance(from, to);
        const timeDiff = Date.now() - this.lastPlayerUpdate[playerId];
        
        return distance / (timeDiff / 1000) <= maxSpeed;
    }
    
    validateBlockPlacement(playerId, blockType, position) {
        // Verificar que el jugador tiene el bloque en inventario
        // Verificar que la posición es válida
        // Verificar que no está muy lejos del jugador
    }
}
```

## Flujos de Componentes Clave

### 🎮 **Flujo de Inicio de Mundo**
1. **API Gateway** → **Orquestador** (solicitud de mundo)
2. **Orquestador** → **Gestor de Mundos** (cargar/crear mundo)
3. **Gestor de Mundos** → **Generador de Biomas** (generar terreno)
4. **Gestor de Mundos** → **Sistema de Bloques** (poblar mundo)
5. **Gestor de Mundos** → **Sistema de Entidades** (spawn inicial)
6. **Orquestador** → **Despachador de Eventos** (mundo listo)

### ⚡ **Flujo de Acción de Jugador**
1. **Comunicación TR** → **Orquestador** (acción recibida)
2. **Orquestador** → **Motor de Validación** (validar acción)
3. **Motor de Validación** → **Sistema apropiado** (procesar acción)
4. **Sistema** → **Despachador de Eventos** (emit cambio)
5. **Despachador** → **Gestor de Guardado** (marcar para save)
6. **Despachador** → **Comunicación TR** (broadcast a clientes)

### 💾 **Flujo de Guardado Automático**
1. **Gestor de Guardado** (timer cada 10 min)
2. **Gestor de Guardado** → **Gestor de Mundos** (obtener estado)
3. **Gestor de Mundos** → **Sistema de Entidades** (serializar entidades)
4. **Gestor de Mundos** → **Sistema de Bloques** (serializar bloques)
5. **Gestor de Guardado** → **Base de Datos** (persistir JSON)

## Patrones de Diseño Utilizados

### 🏭 **Factory Pattern**
- **Generador de Biomas**: `getBiomeById()`, `getSubBiomeById()`
- **Sistema de Entidades**: `convertEntityById()`
- **Sistema de Bloques**: `convertBlockById()`

### 🎯 **Strategy Pattern**
- **Generador de Biomas**: Diferentes estrategias por tipo de bioma
- **Sistema de IA**: Diferentes comportamientos por tipo de entidad

### 📡 **Observer Pattern**
- **Despachador de Eventos**: EventEmitter para comunicación desacoplada
- **Sistema de Guardado**: Observa eventos críticos para triggers

### 🏗️ **Builder Pattern**
- **Generación de Mundos**: Construcción paso a paso de mundos complejos
- **Sistema de Crafting**: Construcción de items complejos

---

*Este diagrama de componentes muestra cómo la arquitectura interna del servidor de juego mantiene separación de responsabilidades mientras permite interacciones eficientes para crear el ecosistema de juego unificado.*