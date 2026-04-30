export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl?: string; //? Demo url if needed
  sourceUrl?: string; //? Only for public code
  featured?: boolean; //? 2 columns true | false
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Variant V / Personal-Agent",
    description: "Sistema integrado con IA que involucra reconocimiento de voz y procesamiento en segundo plano. Arquitectura orientada a la eficiencia y baja latencia.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Código y terminal",
    technologies: ["TypeScript", "Node.js", "AI", "Arch Linux"],
    sourceUrl: "https://github.com/tu-usuario/variant-v",
    featured: true 
  },
  {
    id: "project-2",
    title: "SeyiWB Portfolio",
    description: "Desarrollo de un portafolio digital personal integrando un sistema de API de usuarios personalizado para la gestión de contenido.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Interfaz de diseño web",
    technologies: ["Astro", "React", "Tailwind CSS"],
    demoUrl: "https://seyiwb.com",
    sourceUrl: "https://github.com/tu-usuario/seyiwb",
    featured: false
  },
  {
    id: "project-3",
    title: "ODS 4 Data Analysis",
    description: "Sistema en Python para procesar datos educativos mediante la API de Open Library, generando visualizaciones estadísticas en SQLite.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Gráficos de datos y análisis",
    technologies: ["Python", "SQLite", "Data VIZ", "REST API"],
    sourceUrl: "https://github.com/tu-usuario/ods4-analysis",
    featured: false
  }
];