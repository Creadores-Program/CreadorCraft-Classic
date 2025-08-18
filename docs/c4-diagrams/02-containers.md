# Diagrama C4 - Nivel 2: Contenedores

## CreadorCraft-Classic-Backend - Arquitectura de Contenedores

Este diagrama muestra los principales contenedores (aplicaciones/servicios) que conforman CreadorCraft-Classic-Backend y cómo se comunican entre sí.

```mermaid
C4Container
    title CreadorCraft-Classic-Backend - Contenedores

    Person(jugador, "Jugador", "Usuario que participa en diferentes modos de juego")
    Person(admin, "Administrador", "Usuario administrativo del sistema")

    System_Boundary(ccBackend, "CreadorCraft-Classic-Backend") {
        Container(gameServer, "Servidor de Juego Principal", "Node.js", "Maneja la lógica central del juego, WebSockets, y orquestación general del sistema")
        
        Container(apiGateway, "API Gateway", "Node.js/Express", "Punto de entrada para API REST, manejo de autenticación y enrutamiento de requests")
        
        Container(gameStateManager, "Gestor de Estado del Juego", "Node.js", "Gestiona y sincroniza el estado de mundos, entidades y jugadores en tiempo real")
        
        Container(npcManager, "Gestor de NPCs", "Node.js", "Sistema inteligente que maneja NPCs cuando no hay jugadores disponibles")
        
        Container(economyEngine, "Motor de Economía", "Node.js", "Gestiona el sistema económico, comercio, e intercambios entre jugadores")
        
        ContainerDb(gameDatabase, "Base de Datos del Juego", "JSON Storage", "Almacena mundos, entidades, progreso de jugadores y configuraciones")
        
        Container(realtimeComm, "Comunicacion en Tiempo Real", "WebSocket Server", "Maneja todas las comunicaciones WebSocket y broadcasting de eventos")
    }

    System_Ext(ccPlatform, "Plataforma CreadorCraft", "Sistema de autenticacion externo")
    System_Ext(webClient, "Cliente Web", "Frontend del juego")

    ' Relaciones de usuarios con contenedores
    Rel(jugador, webClient, "Interactua con el juego", "HTTP/WebSocket")
    Rel(admin, apiGateway, "Administra sistema", "HTTPS/REST")
    
    ' Relaciones entre cliente y backend
    Rel(webClient, apiGateway, "Autenticacion, configuracion", "HTTPS/REST")
    Rel(webClient, realtimeComm, "Eventos en tiempo real", "WebSocket/JSON")
    
    ' Relaciones internas
    Rel(apiGateway, gameServer, "Requests autenticados", "HTTP")
    Rel(apiGateway, ccPlatform, "Validacion de usuarios", "HTTPS")
    
    Rel(gameServer, gameStateManager, "Gestion de estado", "Eventos internos")
    Rel(gameServer, npcManager, "Control de NPCs", "Comandos")
    Rel(gameServer, economyEngine, "Operaciones económicas", "API interna")
    Rel(gameServer, realtimeComm, "Broadcasting de eventos", "WebSocket")
    
    Rel(gameStateManager, gameDatabase, "Persistencia de estado", "JSON I/O")
    Rel(npcManager, gameDatabase, "Estado de NPCs", "JSON I/O")
    Rel(economyEngine, gameDatabase, "Datos económicos", "JSON I/O")
    
    Rel(realtimeComm, gameStateManager, "Sincronizacion", "Eventos")

    UpdateRelStyle(jugador, webClient, $textColor="blue", $lineColor="blue")
    UpdateRelStyle(webClient, realtimeComm, $textColor="purple", $lineColor="purple")
    UpdateRelStyle(gameServer, gameStateManager, $textColor="green", $lineColor="green")
```

## Descripción de Contenedores

### 🎮 **Servidor de Juego Principal**
- **Tecnología**: Node.js
- **Responsabilidades**:
  - Orquestación general del ecosistema de juego
  - Lógica de negocio central (reglas de juego, validaciones)
  - Coordinación entre diferentes modos de juego
  - Gestión del ciclo de vida de sesiones de juego
  - Implementación del "juego final" que requiere sinergia de todos los modos

- **APIs Internas**:
  - Control de flujo de juego
  - Validación de acciones de jugadores
  - Coordinación de eventos entre modos

### 🚪 **API Gateway**
- **Tecnología**: Node.js/Express
- **Responsabilidades**:
  - Punto de entrada único para todas las requests HTTP
  - Autenticación y autorización de usuarios
  - Rate limiting y throttling
  - Enrutamiento a servicios internos apropiados
  - Validación de requests y formateo de responses

- **Endpoints Principales**:
  ```
  POST /api/auth/login          - Autenticación
  GET  /api/player/profile      - Perfil de jugador
  GET  /api/worlds              - Lista de mundos
  POST /api/worlds              - Crear mundo
  GET  /api/admin/stats         - Estadísticas del sistema
  ```

### 🔄 **Gestor de Estado del Juego**
- **Tecnología**: Node.js con Event-Driven Architecture
- **Responsabilidades**:
  - Mantenimiento del estado actual de todos los mundos activos
  - Sincronización de cambios entre jugadores
  - Generación de terreno y biomas (clase `Generador`)
  - Gestión de entidades y bloques en tiempo real
  - Persistencia automática del estado

- **Componentes Principales**:
  - `Generador`: Creación y gestión de mundos
  - `Entity`: Sistema base de entidades
  - `Block`: Sistema de bloques del juego
  - `Biome`: Generación de biomas y terreno

### 🤖 **Gestor de NPCs**
- **Tecnología**: Node.js con AI básico
- **Responsabilidades**:
  - Detección de ausencia de jugadores en modos específicos
  - Spawning automático de NPCs apropiados
  - Comportamiento inteligente de NPCs (IA básica)
  - Gestión del ciclo de vida de NPCs
  - Mantenimiento de la economía cuando no hay jugadores

- **Tipos de NPCs**:
  - **Comerciante NPC**: Gestiona tiendas cuando no hay jugador-vendedor
  - **Explorador NPC**: Participa en modo aventura
  - **Constructor NPC**: Ayuda en creación de niveles

### 💰 **Motor de Economía**
- **Tecnología**: Node.js
- **Responsabilidades**:
  - Gestión de inventarios de jugadores
  - Sistema de comercio e intercambios
  - Cálculo de precios dinámicos
  - Transacciones entre jugadores y NPCs
  - Balanceamiento económico del ecosistema

- **Funcionalidades**:
  - Inventario persistente por jugador
  - Mercado entre jugadores
  - Economía inflada/deflacionada automáticamente
  - Items únicos y rareza

### 💾 **Base de Datos del Juego**
- **Tecnología**: JSON File Storage (Local Storage en navegador)
- **Estructura de Datos**:
  ```json
  {
    "worlds": {
      "world-id": {
        "player": { "coords": [0,0], "vida": 100, ... },
        "blocks": { "x,y": "block-type" },
        "entitys": { "x": { "y": { "entity-id": {...} } } },
        "biomes": { ... }
      }
    },
    "players": {
      "player-id": {
        "profile": {...},
        "inventory": {...},
        "progress": {...}
      }
    }
  }
  ```

### ⚡ **Comunicación en Tiempo Real**
- **Tecnología**: WebSocket Server
- **Responsabilidades**:
  - Conexiones WebSocket persistentes con clientes
  - Broadcasting de eventos a múltiples jugadores
  - Manejo de desconexiones y reconexiones
  - Throttling de mensajes para evitar spam
  - Compresión de datos JSON para eficiencia

- **Tipos de Mensajes**:
  ```json
  {
    "type": "player_move",
    "data": { "x": 10, "y": 5, "playerId": "..." }
  }
  {
    "type": "block_placed", 
    "data": { "x": 15, "y": 10, "blockType": "stone" }
  }
  {
    "type": "entity_spawn",
    "data": { "entityId": "...", "type": "zombie", "x": 20, "y": 8 }
  }
  ```

## Flujos de Datos Principales

### 🎯 **Flujo de Autenticación**
1. Cliente → API Gateway (credenciales)
2. API Gateway → Plataforma CreadorCraft (validación)
3. API Gateway → Cliente (token/sesión)
4. Cliente → Comunicación en Tiempo Real (conexión WebSocket autenticada)

### 🌍 **Flujo de Carga de Mundo**
1. Cliente → API Gateway (solicitud de mundo)
2. API Gateway → Servidor de Juego (request mundo)
3. Servidor de Juego → Gestor de Estado (cargar mundo)
4. Gestor de Estado → Base de Datos (leer datos)
5. Gestor de Estado → Cliente (estado inicial via WebSocket)

### ⚡ **Flujo de Acción en Tiempo Real**
1. Cliente → Comunicación TR (acción de jugador)
2. Comunicación TR → Gestor de Estado (validar acción)
3. Gestor de Estado → Base de Datos (persistir cambio)
4. Gestor de Estado → Comunicación TR (broadcast cambio)
5. Comunicación TR → Todos los Clientes (actualización)

### 🤖 **Flujo de Activación de NPC**
1. Gestor de Estado detecta ausencia de jugador en modo X
2. Gestor de Estado → Gestor de NPCs (solicitar NPC)
3. Gestor de NPCs → Base de Datos (crear NPC)
4. Gestor de NPCs → Gestor de Estado (NPC disponible)
5. Gestor de Estado → Comunicación TR (broadcast NPC spawn)

## Escalabilidad y Rendimiento

### 📊 **Métricas Clave**
- **Jugadores concurrentes**: Objetivo 100+ por instancia
- **Latencia WebSocket**: <50ms para acciones críticas
- **Persistencia**: Auto-save cada 10 minutos
- **Memoria**: Estado de mundo mantenido en RAM para velocidad

### 🔄 **Estrategias de Escalabilidad**
- **Horizontal**: Múltiples instancias del servidor de juego
- **Sharding**: Mundos distribuidos entre instancias
- **Caching**: Estado frecuentemente accedido en memoria
- **Load Balancing**: Distribución de carga en API Gateway

---

*Este diagrama muestra cómo la arquitectura de contenedores permite la escalabilidad, mantenibilidad y separación clara de responsabilidades en el ecosistema CreadorCraft-Classic-Backend.*