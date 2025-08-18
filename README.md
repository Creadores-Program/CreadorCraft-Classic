# CreadorCraft-Classic-Backend

[![CI](https://github.com/Creadores-Program/CreadorCraft-Classic-Backend/actions/workflows/CreadorCraftM.yml/badge.svg)](https://github.com/Creadores-Program/CreadorCraft-Classic-Backend/actions/workflows/CreadorCraftM.yml)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](https://github.com/Creadores-Program/CreadorCraft-Classic-Backend)

## 📝 Descripción del Proyecto

CreadorCraft-Classic-Backend es una plataforma de juego híbrida y multijugador que une diferentes modalidades de juego en un solo ecosistema interconectado. Los jugadores pueden participar en distintas experiencias que se complementan entre sí, donde la progresión en una modalidad puede influir o ser necesaria para el progreso en otra.

Este backend proporciona la base tecnológica para un juego inspirado en Minecraft, Terraria y LepS World, ofreciendo una experiencia única donde los jugadores pueden matar monstruos, enfrentar jefes y participar en múltiples modos de juego interconectados.

## 🏗️ Arquitectura del Sistema

### Comunicación y API

La plataforma funciona a través de una **API RESTful** que permite la comunicación principal entre los diferentes componentes. Para la sincronización en tiempo real y la interacción entre jugadores, se utiliza un protocolo de **WebSockets** que facilita el flujo constante de paquetes de datos (datapackets) en formato JSON.

### Componentes Principales

1. **Ecosistema de Juego Unificado**: El corazón del proyecto donde distintos juegos y modos coexisten
2. **Modos de Juego Independientes**:
   - Modo de aventura con exploración de niveles
   - Modo de tienda/economía con gestión de negocios
   - Modo de creación de niveles para diseño y compartición
3. **Juego Final**: Experiencia climática que requiere sinergia de todos los modos
4. **Gestión de Jugadores**: Autenticación, perfiles y estado de juego
5. **Sistema NPC**: Mecanismo de respaldo cuando no hay jugadores disponibles

## 🛠️ Tecnologías

- **Backend**: Node.js
- **Comunicación en Tiempo Real**: WebSockets con intercambio de datos JSON
- **Testing**: Framework básico de pruebas
- **Frontend**: Tratado como caja negra (sin implementación específica aún)

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión recomendada: 16.x o superior)
- NPM o Yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Creadores-Program/CreadorCraft-Classic-Backend.git

# Navegar al directorio
cd CreadorCraft-Classic-Backend

# Instalar dependencias (si aplica)
npm install

# Ejecutar el proyecto
# (Los comandos específicos dependerán de la configuración final)
```

## 📁 Estructura del Proyecto

```
CreadorCraft-Classic-Backend/
├── .github/                    # Configuraciones de GitHub
│   ├── workflows/             # GitHub Actions
│   ├── ISSUE_TEMPLATE/        # Plantillas para issues
│   └── pull_request_template.md
├── docs/                      # Documentación del proyecto
│   ├── architecture/          # Diagramas y documentación de arquitectura
│   └── c4-diagrams/          # Diagramas C4
├── src/                       # Código fuente
│   ├── js/                    # Archivos JavaScript
│   │   ├── Blocks/           # Bloques del juego
│   │   ├── Entitys/          # Entidades del juego
│   │   ├── Items/            # Items del juego
│   │   ├── Terreno/          # Sistema de terreno y biomas
│   │   └── Utils/            # Utilidades
│   ├── textures/             # Texturas del juego
│   ├── index.html            # Archivo HTML principal
│   ├── main.js               # Archivo JavaScript principal
│   └── manifest.json         # Configuración del juego
├── CONTRIBUTING.md           # Guía de contribución
├── CODE_OF_CONDUCT.md       # Código de conducta
├── SECURITY.md              # Políticas de seguridad
└── LICENSE                  # Licencia GPL v3
```

## 🎮 Características del Juego

- **Multijugador**: Experiencia colaborativa en tiempo real
- **Modos de Juego Interconectados**: Progresión que influye entre diferentes modalidades
- **Sistema de Construcción**: Similar a Minecraft con bloques y estructuras
- **Sistema de Combat**: Enfrentamiento contra monstruos y jefes
- **Economía Integrada**: Sistema de comercio e intercambio
- **Creación de Contenido**: Herramientas para diseño de niveles

## 🔄 Flujo de Desarrollo (GitLab Flow)

Este proyecto utiliza **GitLab Flow** con estructura de ramas:
- **`main`**: Rama de producción para releases estables
- **`develop`**: Rama principal de desarrollo, base para nuevas características

Para más detalles sobre el proceso de contribución, consulta [CONTRIBUTING.md](CONTRIBUTING.md).

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee nuestras [guías de contribución](CONTRIBUTING.md) y el [código de conducta](CODE_OF_CONDUCT.md) antes de empezar.

### Proceso Rápido

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📋 Roadmap

- [ ] Implementación completa del sistema de WebSockets
- [ ] Desarrollo de la API RESTful
- [ ] Sistema de autenticación de jugadores
- [ ] Implementación del sistema NPC
- [ ] Integración con la plataforma CreadorCraft
- [ ] Testing exhaustivo y documentación de API

## 🔒 Seguridad

Para reportar vulnerabilidades de seguridad, por favor revisa nuestra [política de seguridad](SECURITY.md).

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia GPL v3 - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Creadores Program** - [GitHub Organization](https://github.com/Creadores-Program)

Enlace del Proyecto: [https://github.com/Creadores-Program/CreadorCraft-Classic-Backend](https://github.com/Creadores-Program/CreadorCraft-Classic-Backend)

## 🙏 Agradecimientos

- Inspirado en Minecraft, Terraria y LepS World
- Gracias a todos los contribuidores que hacen posible este proyecto
- Comunidad CreadorCraft por el apoyo continuo
