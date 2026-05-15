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
    id: 'project-1',
    title: 'PulseBoard Web|API',
    description: 'Dashboard analítico e-commerce de baja latencia. Integra un motor de agregación de datos en PostgreSQL con una interfaz reactiva, transmitiendo KPIs de negocio en tiempo real vía WebSockets y garantizando alta disponibilidad.',
    image: '/img/PulseBoard-background.png',
    imageAlt: 'Imagen del proyecto PulseBoard',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind', 'Axios', 'Recharts', 'Node.js', 'Express', 'PostgreSQL', 'WebSocket', 'Helmet'],
    sourceUrl: 'https://github.com/seyi-gh/PulseBoard',
    demoUrl: 'https://pulse-board-pi.vercel.app/',
    featured: false
  },
  {
    id: 'project-2',
    title: 'DocuSense Web|API',
    description: 'Apl,icacion inteligente de alto rendimiento contruida con React 19 y Next.js. Implementa Server-Sent-Events (SSE) con gestor de archivos , autenticación JWT segura y diseñado con enfoque en la gestion de estado reactiva, con Tailwind CSS.',
    image: '/img/DocuSense-background.png',
    imageAlt: 'Imagen del proyecto DocuSense',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Streaming', 'Vercel', 'FastAPI', 'Python', 'PostgreSQL', 'JWT', 'AI API'],
    sourceUrl: 'https://github.com/seyi-gh/Docusense-web',
    demoUrl: 'https://docusense-web.vercel.app/',
    featured: false
  },
  {
    id: "project-3",
    title: 'LoanFlow Web|API',
    description: 'Plataforma de gestión de créditos con control de acceso basado en roles (RBAC). Frontend desarrollado en Next.js y TypeScript para el procesamiento de solicitudes financieras. Integra flujos completos de evaluacion, gestion de documentos y autenticacion.',
    image: '/img/LoanFlow-background.png',
    imageAlt: 'Imagen del prooyecto LoanFlow',
    technologies: ['Vercel', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Axios', 'ESLint', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'AI API'],
    sourceUrl: 'https://github.com/seyi-gh/LoanFlow-Frontend',
    demoUrl: 'https://loanflowfront.vercel.app/',
    featured: false
  }
];