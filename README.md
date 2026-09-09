# Gutterkel — Website Redesign & Development

Rediseño y desarrollo de la presencia web de **Gutterkel**, enfocado en mejorar la experiencia de usuario, la estructura de contenidos, la presentación de servicios y la capacidad del sitio para convertir visitantes en clientes potenciales.

El proyecto parte de un análisis del sitio existente y evoluciona hacia una nueva arquitectura de información, una interfaz más moderna y una estructura preparada para crecimiento futuro.

> **Estado actual:** proyecto en desarrollo activo. Diseño y estructura general definidos, con implementación progresiva de páginas y componentes.

---

## Descripción

El objetivo del proyecto es modernizar el sitio web de Gutterkel mediante una experiencia más clara, profesional y orientada a los usuarios que buscan soluciones relacionadas con sus servicios.

El proceso incluye:

* Auditoría del sitio existente.
* Identificación de problemas de UX y presentación.
* Reestructuración de la arquitectura de información.
* Diseño de nuevas páginas y componentes.
* Desarrollo responsive.
* Optimización de contenido.
* Mejora de navegación.
* Preparación para SEO.
* Iteraciones basadas en retroalimentación del cliente.

El sitio está siendo construido con una arquitectura modular que permite reutilizar componentes y mantener consistencia entre las diferentes páginas.

---

## Objetivos del proyecto

Los principales objetivos son:

* Mejorar la claridad de los servicios ofrecidos.
* Facilitar que los usuarios encuentren la solución adecuada.
* Crear una experiencia responsive consistente.
* Incrementar la confianza mediante una mejor presentación visual.
* Optimizar la jerarquía de contenido.
* Mejorar la navegación entre servicios.
* Crear llamadas a la acción más claras.
* Preparar el sitio para futuras estrategias de SEO y marketing.
* Facilitar el mantenimiento y crecimiento del proyecto.

---

## Tecnologías

* **React**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **React Router**
* **Git**
* **GitHub**

### Desarrollo frontend

La interfaz utiliza:

* Componentes reutilizables.
* CSS modular por sección o componente.
* Flexbox.
* CSS Grid.
* Media queries.
* Diseño responsive.
* Routing basado en páginas.
* Separación entre contenido y componentes visuales.

---

## Arquitectura

El proyecto sigue una arquitectura orientada a componentes reutilizables.

Una estructura general del proyecto puede representarse de la siguiente manera:

```text
gutterkel/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── contact/
│   │   ├── faq/
│   │   └── solutions/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Solutions/
│   │   ├── Contact/
│   │   └── ...
│   │
│   ├── styles/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

La estructura puede evolucionar conforme se incorporen nuevas páginas y funcionalidades.

---

## Arquitectura de información

El rediseño busca separar correctamente el contenido para evitar concentrar demasiada información en una sola página.

La estructura general contempla áreas como:

```text
Home
│
├── Soluciones
│   ├── Solución 1
│   ├── Solución 2
│   ├── Solución 3
│   ├── Solución 4
│   └── Solución 5
│
├── Proyectos
│
├── FAQ
│
└── Contacto
```

Cada solución puede disponer de una página propia para explicar con mayor profundidad:

* El problema que resuelve.
* Características.
* Beneficios.
* Casos de uso.
* Proceso de trabajo.
* Imágenes relacionadas.
* Preguntas frecuentes.
* Call-to-action.

Esto permite mejorar tanto la experiencia del usuario como la indexación del contenido.

---

## Responsive Design

El sitio está diseñado para adaptarse a diferentes tamaños de pantalla.

Se consideran principalmente:

* Desktop.
* Laptop.
* Tablet.
* Mobile.

Entre los aspectos trabajados se encuentran:

* Navegación responsive.
* Adaptación de grids.
* Reordenamiento de secciones.
* Tipografía flexible.
* Espaciados adaptativos.
* Optimización de imágenes.
* Legibilidad.
* Tamaños adecuados para elementos interactivos.

---

## UX/UI

El rediseño considera principios de experiencia de usuario orientados a:

### Jerarquía visual

Los elementos principales utilizan una jerarquía clara para facilitar el escaneo de información.

### Navegación

La arquitectura busca minimizar la cantidad de pasos necesarios para encontrar información sobre cada servicio.

### Conversión

Las llamadas a la acción se distribuyen estratégicamente a lo largo del sitio.

### Consistencia

Los componentes reutilizables mantienen patrones visuales y de interacción consistentes.

### Responsive UX

Las interfaces no dependen únicamente de la versión desktop, sino que se adaptan específicamente a dispositivos de menor tamaño.

---

## SEO

La estructura del proyecto se plantea considerando buenas prácticas básicas de SEO.

Entre ellas:

* HTML semántico.
* Jerarquía correcta de encabezados.
* Páginas específicas por servicio.
* URLs descriptivas.
* Contenido estructurado.
* Optimización de imágenes.
* Meta información.
* Enlaces internos.
* Arquitectura de información clara.

La separación de cada solución en páginas independientes permite trabajar keywords y contenido específico por intención de búsqueda.

---

## Páginas desarrolladas

El proyecto se desarrolla de forma progresiva.

Entre las páginas y secciones trabajadas se encuentran:

### Home

Página principal enfocada en presentar la propuesta de valor de la empresa y dirigir a los usuarios hacia sus servicios principales.

### Soluciones

Página general utilizada como punto de entrada hacia las distintas soluciones ofrecidas.

Las soluciones se están reorganizando para disponer de páginas individuales con información específica.

### FAQ

Sección destinada a resolver preguntas frecuentes de los clientes y reducir fricción antes del contacto.

### Contacto

Página diseñada para facilitar la comunicación con la empresa mediante una estructura clara y directa.

---

## Proceso de desarrollo

El proyecto sigue un proceso iterativo:

```text
Análisis del sitio existente
        ↓
Auditoría UX / SEO
        ↓
Definición de arquitectura
        ↓
Diseño de interfaz
        ↓
Desarrollo frontend
        ↓
Responsive Design
        ↓
Revisión con cliente
        ↓
Feedback
        ↓
Iteraciones
        ↓
Validación
```

Este proceso permite realizar ajustes progresivos sin comprometer la consistencia general del sitio.

---

## Instalación

Clona el repositorio:

```bash
git clone <repository-url>
```

Accede al proyecto:

```bash
cd gutterkel
```

Instala las dependencias:

```bash
npm install
```

---

## Desarrollo

Ejecuta el servidor local:

```bash
npm run dev
```

Vite mostrará la URL correspondiente al entorno de desarrollo.

---

## Build de producción

```bash
npm run build
```

El build optimizado será generado dentro de:

```text
dist/
```

---

## Preview

Para probar localmente el build de producción:

```bash
npm run preview
```

---

## Estado del proyecto

**Auditoría inicial:** completada.

**Arquitectura de información:** definida.

**Diseño general:** definido.

**FAQ:** completado.

**Contacto:** completado.

**Páginas de soluciones:** en desarrollo.

**Responsive Design:** en desarrollo progresivo.

**Integración final y despliegue:** pendiente.

---

## Próximos pasos

* Crear páginas individuales para cada solución.
* Reutilizar componentes comunes entre soluciones.
* Completar contenido específico.
* Refinar responsive design.
* Optimizar imágenes.
* Revisar accesibilidad.
* Validar SEO técnico.
* Ejecutar pruebas cross-browser.
* Validar el sitio completo con el cliente.
* Preparar despliegue a producción.

---

## Autor

**Gonzalo Magaña Segovia**

Full Stack Developer · UX/UI Designer

Proyecto desarrollado para un cliente real como parte de un proceso de rediseño, optimización UX y desarrollo web.
