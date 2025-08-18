# Guía de Contribución - CreadorCraft-Classic-Backend

¡Gracias por tu interés en contribuir a CreadorCraft-Classic-Backend! Esta guía te ayudará a comenzar y seguir las mejores prácticas del proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Flujo de Desarrollo (GitLab Flow)](#flujo-de-desarrollo-gitlab-flow)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Solicitar Features](#solicitar-features)
- [Criterios INVEST para User Stories](#criterios-invest-para-user-stories)

## 📜 Código de Conducta

Este proyecto adhiere a nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

## 🤝 ¿Cómo Puedo Contribuir?

### Tipos de Contribuciones Bienvenidas

- 🐛 **Corrección de Bugs**: Identificar y corregir errores
- ✨ **Nuevas Características**: Implementar funcionalidades nuevas
- 📚 **Documentación**: Mejorar o añadir documentación
- 🧪 **Testing**: Escribir o mejorar pruebas
- 🎨 **UI/UX**: Mejorar la interfaz de usuario
- ⚡ **Rendimiento**: Optimizaciones de performance
- 🔧 **Refactoring**: Mejorar la estructura del código

### Antes de Empezar

1. **Revisa los issues existentes** para evitar duplicados
2. **Comenta en el issue** que planeas trabajar para evitar conflictos
3. **Fork el repositorio** y configura tu entorno de desarrollo
4. **Lee esta guía completa** antes de hacer cambios

## 🔄 Flujo de Desarrollo (GitLab Flow)

Este proyecto utiliza **GitLab Flow** con la rama principal `develop` para desarrollo:

### Estructura de Ramas

- **`main`**: Rama de producción para releases estables
- **`develop`**: Rama principal de desarrollo, base para nuevas características
- **`feature/nombre-feature`**: Ramas para nuevas características (desde `develop`)
- **`fix/nombre-bug`**: Ramas para correcciones de bugs (desde `develop`)
- **`docs/descripcion`**: Ramas para cambios de documentación (desde `develop`)

### Proceso de Desarrollo

```bash
# 1. Clonar y configurar
git clone https://github.com/tu-usuario/CreadorCraft-Classic-Backend.git
cd CreadorCraft-Classic-Backend
git remote add upstream https://github.com/Creadores-Program/CreadorCraft-Classic-Backend.git

# 2. Crear rama para tu trabajo
git checkout develop
git pull upstream develop
git checkout -b feature/mi-nueva-caracteristica

# 3. Hacer cambios y commits
git add .
git commit -m "feat: añadir nueva característica X"

# 4. Mantener actualizada tu rama
git fetch upstream
git rebase upstream/develop

# 5. Push y crear Pull Request
git push origin feature/mi-nueva-caracteristica
```

## 💻 Estándares de Código

### JavaScript

- Usar **ES6+** cuando sea posible
- **Nombres descriptivos** para variables y funciones
- **Comentarios** para lógica compleja
- **Modularización** apropiada
- **Manejo de errores** consistente

### Ejemplo de Código Bien Formateado

```javascript
/**
 * Genera un nuevo mundo de juego con configuración inicial
 * @param {string} id - Identificador único del mundo
 * @param {string} name - Nombre descriptivo del mundo
 * @returns {Generador} Instancia del generador de mundo
 */
class Generador {
    static genNewWorld(id, name) {
        const worldCache = {
            player: {
                coords: [0.0, 0.0],
                vida: Player.vidaDef,
                food: Player.foodDef
            },
            entitys: {},
            blocks: {},
            spawnPos: [0.0, 0.0]
        };
        
        // Guardar configuración del mundo
        const dataG = JSON.parse(GameProps.getStorage().get("data"));
        dataG.worlds.push({ id, name });
        
        GameProps.getStorage().set("data", JSON.stringify(dataG));
        GameProps.getStorage().set(id, JSON.stringify(worldCache));
        
        return new Generador(worldCache, id);
    }
}
```

### Convenciones de Nombres

- **Clases**: PascalCase (`Player`, `Generador`)
- **Funciones/Variables**: camelCase (`genNewWorld`, `worldCache`)
- **Constantes**: UPPER_SNAKE_CASE (`PLAYER_VID_DEF`)
- **Archivos**: PascalCase para clases (`Player.js`, `Generador.js`)

## 🔍 Proceso de Pull Request

### Antes de Crear el PR

- [ ] ✅ Los tests pasan localmente
- [ ] 📝 Actualizar documentación si es necesario
- [ ] 🧪 Añadir tests para funcionalidad nueva
- [ ] 📋 Seguir el template de PR
- [ ] 🔄 Rebase con la rama develop más reciente

### Template de Pull Request

Al crear tu PR, incluye:

```markdown
## 📝 Descripción
Breve descripción de los cambios realizados.

## 🔧 Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Documentación

## 🧪 Testing
Describe las pruebas que realizaste:
- [ ] Tests unitarios
- [ ] Tests de integración
- [ ] Tests manuales

## 📋 Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He revisado mi propio código
- [ ] He añadido tests que demuestran que el fix es efectivo
- [ ] He actualizado la documentación
```

### Revisión de Código

El equipo de mantenedores revisará tu PR considerando:

- **Calidad del código**: Legibilidad, mantenibilidad
- **Funcionalidad**: ¿Resuelve el problema correctamente?
- **Tests**: ¿Están cubiertos los casos edge?
- **Documentación**: ¿Es clara y completa?
- **Impacto**: ¿Afecta otras partes del sistema?

## 🐛 Reportar Bugs

### Antes de Reportar

1. **Busca en issues existentes** si ya fue reportado
2. **Reproduce el bug** en la versión más reciente
3. **Recopila información** del entorno y pasos

### Template de Bug Report

Usa nuestro [template de bug report](.github/ISSUE_TEMPLATE/reporte_bug.yml) que incluye:

- **Descripción del bug**
- **Pasos para reproducir**
- **Comportamiento esperado**
- **Comportamiento actual**
- **Capturas de pantalla** (si aplica)
- **Información del entorno**

## ✨ Solicitar Features

### Proceso para Nuevas Características

1. **Crear un issue** usando el [template de feature request](.github/ISSUE_TEMPLATE/solicitar_funcionalidad.yml)
2. **Describir el problema** que resuelve
3. **Proponer la solución** con detalles técnicos
4. **Esperar feedback** del equipo de mantenedores
5. **Implementar** una vez aprobado

## 🎯 Criterios INVEST para User Stories

Al crear User Stories, asegúrate de que cumplan con INVEST:

### **I - Independent (Independiente)**
- La historia puede desarrollarse por separado
- No depende de otras historias para ser completada
- Puede priorizarse independientemente

### **N - Negotiable (Negociable)**
- Los detalles pueden discutirse y refinarse
- No es un contrato fijo, sino una conversación
- Permite flexibilidad en la implementación

### **V - Valuable (Valiosa)**
- Aporta valor real al usuario final
- Resuelve un problema o necesidad específica
- Justifica el esfuerzo de desarrollo

### **E - Estimable (Estimable)**
- El equipo puede estimar el esfuerzo requerido
- Los requisitos están suficientemente claros
- La complejidad es comprensible

### **S - Small (Pequeña)**
- Se puede completar en un sprint
- No es demasiado grande para manejar
- Permite feedback rápido

### **T - Testable (Probable)**
- Tiene criterios de aceptación claros
- Se puede verificar objetivamente
- Los tests pueden automatizarse

### Template para User Stories

```markdown
## Historia de Usuario [US-XXX]
**Como** [tipo de usuario]
**Quiero** [funcionalidad]
**Para que** [beneficio/valor]

### 🎯 Criterios de Aceptación
- [ ] Criterio 1 específico y medible
- [ ] Criterio 2 específico y medible
- [ ] Criterio 3 específico y medible

### 📝 Notas y Consideraciones
- Detalle técnico importante
- Dependencias o restricciones
- Referencias a mockups o diseños

### ✅ INVEST Checklist
- [ ] **Independent**: ¿Es independiente de otras historias?
- [ ] **Negotiable**: ¿Los detalles pueden refinarse?
- [ ] **Valuable**: ¿Aporta valor claro al usuario?
- [ ] **Estimable**: ¿El equipo puede estimar el esfuerzo?
- [ ] **Small**: ¿Se puede completar en un sprint?
- [ ] **Testable**: ¿Tiene criterios de aceptación claros?
```

## 🔧 Configuración del Entorno de Desarrollo

### Herramientas Recomendadas

- **Editor**: VSCode con extensiones JavaScript/Node.js
- **Control de Versiones**: Git
- **Testing**: Framework básico (especificar cuando esté definido)

### Scripts Útiles

```bash
# Ejecutar el proyecto localmente
npm start  # (cuando esté configurado)

# Ejecutar tests
npm test   # (cuando esté configurado)

# Linting y formato
npm run lint   # (cuando esté configurado)
```

## 🚀 Deploy y CI/CD

El proyecto utiliza GitHub Actions para:

- ✅ **Verificación de código** en cada PR
- 🏗️ **Build automático** con CreadorCraft-Maker
- 📦 **Generación de artefactos** para releases
- 🧪 **Ejecución de tests** (cuando estén configurados)

## ❓ ¿Necesitas Ayuda?

- 🐛 **Bugs**: Crea un issue con el template de bug report
- ❓ **Preguntas**: Abre una discussion en GitHub
- 💡 **Ideas**: Usa el template de feature request
- 🔒 **Seguridad**: Sigue nuestro [proceso de seguridad](SECURITY.md)

## 🏆 Reconocimientos

Todos los contribuidores serán reconocidos en nuestro README y releases. ¡Tu trabajo es valioso!

---

**¡Gracias por contribuir a CreadorCraft-Classic-Backend!** 🎮✨

Juntos estamos construyendo una plataforma de juego increíble para la comunidad CreadorCraft.