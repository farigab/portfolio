import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type LanguageCode = 'en' | 'pt-BR';

export interface ProjectLink {
  label: string;
  url: string;
  icon: string;
  primary?: boolean;
}

export interface PortfolioProject {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'maintenance' | 'archived';
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  project?: string;
  bullets: string[];
}

interface PortfolioCopy {
  language: { english: string; portuguese: string };
  nav: { home: string; about: string; projects: string; experience: string };
  labels: { active: string; maintenance: string; archived: string; open: string };
  home: {
    titlePrefix: string;
    name: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    githubCta: string;
    linkedinCta: string;
    stackTitle: string;
    stackSubtitle: string;
    highlights: Array<{ title: string; description: string }>;
    technologies: Array<{ name: string; category: string; img: string; color: string }>;
  };
  about: { title: string; subtitle: string; paragraphs: string[] };
  projects: { title: string; subtitle: string; emptyTitle: string; emptyDescription: string; items: PortfolioProject[] };
  experience: { title: string; subtitle: string; items: ExperienceItem[] };
  footer: { rights: string };
}

const STORAGE_KEY = 'portfolio-language';

const copy: Record<LanguageCode, PortfolioCopy> = {
  en: {
    language: { english: 'English', portuguese: 'Portuguese' },
    nav: { home: 'Home', about: 'About', projects: 'Projects', experience: 'Experience' },
    labels: { active: 'Active', maintenance: 'Maintenance', archived: 'Archived', open: 'Open' },
    home: {
      titlePrefix: "Hi, I'm",
      name: 'Gabriel B. Farias',
      subtitle: 'Software Developer | Java | Angular | JavaScript | SQL',
      description:
        'Full-stack developer building enterprise systems, cloud applications, and developer tools with Java, Spring and Angular.',
      primaryCta: 'View Projects',
      githubCta: 'GitHub',
      linkedinCta: 'LinkedIn',
      stackTitle: 'Core Stack',
      stackSubtitle: 'Technologies I use in production systems and personal products',
      technologies: [
        { name: 'Angular', category: 'Frontend', img: 'icons/angular.png', color: '#DD0031' },
        { name: 'Java', category: 'Backend', img: 'icons/java.png', color: '#007396' },
        { name: 'Spring Framework', category: 'Backend', img: 'icons/spring.png', color: '#6DB33F' },
        { name: 'Oracle', category: 'Database', img: 'icons/oracle.png', color: '#F80000' },
        { name: 'PostgreSQL', category: 'Database', img: 'icons/postgreSQL.png', color: '#336791' }
      ],
      highlights: [
        { title: '5+ Years Experience', description: 'Hands-on delivery in backend and full-stack enterprise systems.' },
        {
          title: 'Architecture & CI/CD',
          description: 'Refactoring, testing practices, Jenkins, GitHub Actions and cloud integration.'
        },
        {
          title: 'Developer Products',
          description: 'Git tooling and AI-assisted products built beyond day-to-day delivery.'
        }
      ]
    },
    about: {
      title: 'About',
      subtitle: 'Software Developer - Full Stack (Java & Angular)',
      paragraphs: [
        'Software Developer with strong experience in backend and full-stack enterprise systems, specialized in Java, Spring and Angular.',
        'I work on critical systems, architectural refactoring, legacy modernization and continuous product evolution, with a focus on scalability, maintainability and reliability.',
        'My background includes Java 8/21, Spring MVC/Boot, Angular 18+, SQL, JPA, AWS services, Jenkins, GitHub Actions, automated testing and agile delivery.'
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: 'Products and tools built around developer workflow, AI and full-stack architecture',
      emptyTitle: 'Projects coming soon',
      emptyDescription: 'Projects will appear here once they are added.',
      items: [
        {
          id: 'repoflow',
          name: 'RepoFlow',
          type: 'VS Code Extension',
          status: 'active',
          description:
            'A Visual Studio Code extension with an interactive Git graph, native diff integration, worktree manager, stash, blame, branch actions and pull request workflows.',
          tags: ['TypeScript', 'VS Code Extension', 'Git Tools', 'Worktrees'],
          links: [
            {
              label: 'Marketplace',
              url: 'https://marketplace.visualstudio.com/items?itemName=farigab.repoflow',
              icon: 'pi pi-external-link',
              primary: true
            },
            { label: 'GitHub', url: 'https://github.com/farigab/repoFlow', icon: 'pi pi-github' }
          ]
        },
        {
          id: 'bragdev',
          name: 'BragDev',
          type: 'AI Product',
          status: 'active',
          description:
            'An AI-powered achievement tracker with an Angular frontend and Go API that imports GitHub activity and generates structured professional reports.',
          tags: ['Go', 'Angular', 'PostgreSQL', 'GitHub OAuth', 'AI'],
          links: [
            { label: 'Live', url: 'https://bragdoc.farigab.com/', icon: 'pi pi-external-link', primary: true },
            { label: 'Frontend', url: 'https://github.com/farigab/bragdev-angular', icon: 'pi pi-github' },
            { label: 'API', url: 'https://github.com/farigab/bragdev-go', icon: 'pi pi-github' }
          ]
        },
        {
          id: 'repoflow-desktop',
          name: 'RepoFlow Desktop',
          type: 'Desktop App',
          status: 'active',
          description:
            'A standalone desktop version of RepoFlow that adapts the Git graph and repository workflows to an Electron app with local Git integration.',
          tags: ['Electron', 'React', 'TypeScript', 'Git', 'Desktop'],
          links: [
            { label: 'GitHub', url: 'https://github.com/farigab/repoflow-app', icon: 'pi pi-github', primary: true }
          ]
        },
        {
          id: 'fintrack',
          name: 'FinTrack',
          type: 'Finance App',
          status: 'active',
          description:
            'A full-stack personal finance app with Google OAuth, income and expense tracking, monthly reports, notifications, internationalization and AI-generated financial analysis.',
          tags: ['React', 'TypeScript', 'Go', 'SQLite', 'AI'],
          links: [
            { label: 'Live', url: 'https://fintrack.farigab.com/', icon: 'pi pi-external-link', primary: true },
            { label: 'Frontend', url: 'https://github.com/farigab/fintrack-web', icon: 'pi pi-github'},
            { label: 'API', url: 'https://github.com/farigab/fintrack-api', icon: 'pi pi-github' }
          ]
        }
      ]
    },
    experience: {
      title: 'Experience',
      subtitle: 'Enterprise software delivery across Java, Angular, architecture and cloud integration',
      items: [
        {
          id: 'radix-mid',
          company: 'Radix',
          role: 'Mid-Level Software Developer',
          period: 'Jul 2025 - Present',
          location: 'Brazil',
          project: 'Petrobras Project - Sondopolis Cloud (Full Stack)',
          bullets: [
            'Led the refactoring of the system into a new architecture, improving scalability and long-term maintainability.',
            'Delivered critical features for a cloud-based Petrobras project with focus on performance and reliability.',
            'Defined coding standards, testing practices and architectural guidelines while mentoring junior developers.',
            'Automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment errors.',
            'Contributed to technical decisions involving Java 21, Spring Boot, Angular 18 and AWS services.'
          ]
        },
        {
          id: 'radix-junior-2024',
          company: 'Radix',
          role: 'Junior Software Developer',
          period: 'May 2024 - Jul 2025',
          location: 'Brazil',
          bullets: [
            'Refactored legacy modules into clean architecture, reducing technical debt.',
            'Developed and maintained systems for contracts, equipment and operational KPI monitoring.',
            'Implemented backend and frontend unit tests to increase system stability.',
            'Delivered end-to-end features in Scrum and SAFe environments using Java, Spring, Angular, SQL and JPA.'
          ]
        },
        {
          id: 'radix-junior-2021',
          company: 'Radix',
          role: 'Junior Software Developer',
          period: 'Dec 2021 - Apr 2024',
          location: 'Rio de Janeiro, Brazil',
          bullets: [
            'Built systems to control and enforce industrial contracts.',
            'Maintained and enhanced legacy applications used by international clients.',
            'Developed new modules using Java, Spring MVC and JDBC.',
            'Worked closely with business stakeholders to translate requirements into technical solutions.'
          ]
        },
        {
          id: 'radix-intern',
          company: 'Radix',
          role: 'Software Developer Intern',
          period: 'Nov 2020 - Dec 2021',
          location: 'Rio de Janeiro, Brazil',
          bullets: [
            'Developed new modules and maintained legacy systems for drill contracts, equipment maintenance and performance indicators.',
            'Supported corrective and evolutionary maintenance of Java applications.',
            'Built a foundation in best practices, version control and agile methodologies.'
          ]
        }
      ]
    },
    footer: { rights: 'All rights reserved.' }
  },
  'pt-BR': {
    language: { english: 'Inglês', portuguese: 'Português' },
    nav: { home: 'Início', about: 'Sobre', projects: 'Projetos', experience: 'Experiência' },
    labels: { active: 'Ativo', maintenance: 'Manutenção', archived: 'Arquivado', open: 'Abrir' },
    home: {
      titlePrefix: 'Olá, eu sou',
      name: 'Gabriel B. Farias',
      subtitle: 'Software Developer | Java | Angular | JavaScript | SQL',
      description:
        'Desenvolvedor full-stack criando sistemas enterprise, aplicações cloud e ferramentas para desenvolvedores com Java, Spring e Angular.',
      primaryCta: 'Ver Projetos',
      githubCta: 'GitHub',
      linkedinCta: 'LinkedIn',
      stackTitle: 'Stack Principal',
      stackSubtitle: 'Tecnologias que uso em sistemas de produção e produtos próprios',
      technologies: [
        { name: 'Angular', category: 'Frontend', img: 'icons/angular.png', color: '#DD0031' },
        { name: 'Java', category: 'Backend', img: 'icons/java.png', color: '#007396' },
        { name: 'Spring Framework', category: 'Backend', img: 'icons/spring.png', color: '#6DB33F' },
        { name: 'Oracle', category: 'Banco', img: 'icons/oracle.png', color: '#F80000' },
        { name: 'PostgreSQL', category: 'Banco', img: 'icons/postgreSQL.png', color: '#336791' }
      ],
      highlights: [
        { title: '5+ Anos de Experiência', description: 'Entrega prática em sistemas enterprise backend e full-stack.' },
        { title: 'Arquitetura & CI/CD', description: 'Refatoração, testes, Jenkins, GitHub Actions e integração cloud.' },
        {
          title: 'Produtos para Devs',
          description: 'Ferramentas Git e produtos com IA construídos além da rotina de projeto.'
        }
      ]
    },
    about: {
      title: 'Sobre',
      subtitle: 'Software Developer - Full Stack (Java & Angular)',
      paragraphs: [
        'Software Developer com forte experiência em sistemas enterprise backend e full-stack, especializado em Java, Spring e Angular.',
        'Atuo em sistemas críticos, refatoração arquitetural, modernização de legado e evolução contínua de produtos, com foco em escalabilidade, manutenibilidade e confiabilidade.',
        'Minha experiência inclui Java 8/21, Spring MVC/Boot, Angular 18+, SQL, JPA, serviços AWS, Jenkins, GitHub Actions, testes automatizados e entrega ágil.'
      ]
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Produtos e ferramentas focados em fluxo de desenvolvimento, IA e arquitetura full-stack',
      emptyTitle: 'Nenhum projeto ainda',
      emptyDescription: 'Os projetos aparecerão aqui quando forem adicionados.',
      items: [
        {
          id: 'repoflow',
          name: 'RepoFlow',
          type: 'Extensão VS Code',
          status: 'active',
          description:
            'Extensão para Visual Studio Code com grafo Git interativo, diff nativo, gerenciamento de worktrees, stash, blame, ações de branch e fluxos de pull request.',
          tags: ['TypeScript', 'VS Code Extension', 'Git Tools', 'Worktrees'],
          links: [
            {
              label: 'Marketplace',
              url: 'https://marketplace.visualstudio.com/items?itemName=farigab.repoflow',
              icon: 'pi pi-external-link',
              primary: true
            },
            { label: 'GitHub', url: 'https://github.com/farigab/repoFlow', icon: 'pi pi-github' }
          ]
        },
        {
          id: 'bragdev',
          name: 'BragDev',
          type: 'Produto com IA',
          status: 'active',
          description:
            'Ferramenta com IA, frontend Angular e API em Go que importa atividade do GitHub para gerar relatórios profissionais estruturados.',
          tags: ['Go', 'Angular', 'PostgreSQL', 'GitHub OAuth', 'IA'],
          links: [
            { label: 'Live', url: 'https://bragdoc.farigab.com/', icon: 'pi pi-external-link', primary: true },
            { label: 'Frontend', url: 'https://github.com/farigab/bragdev-angular', icon: 'pi pi-github' },
            { label: 'API', url: 'https://github.com/farigab/bragdev-go', icon: 'pi pi-github' }
          ]
        },
        {
          id: 'repoflow-desktop',
          name: 'RepoFlow Desktop',
          type: 'App Desktop',
          status: 'active',
          description:
            'Versão desktop standalone do RepoFlow que adapta o grafo Git e fluxos de repositório para um app Electron com integração Git local.',
          tags: ['Electron', 'React', 'TypeScript', 'Git', 'Desktop'],
          links: [
            { label: 'GitHub', url: 'https://github.com/farigab/repoflow-app', icon: 'pi pi-github', primary: true }
          ]
        },
        {
          id: 'fintrack',
          name: 'FinTrack',
          type: 'App Financeiro',
          status: 'active',
          description:
            'Aplicação full-stack de finanças pessoais com Google OAuth, controle de receitas e despesas, relatórios mensais, notificações, internacionalização e análise financeira gerada por IA.',
          tags: ['React', 'TypeScript', 'Go', 'Google OAuth', 'SQLite', 'IA'],
          links: [
            { label: 'Frontend', url: 'https://github.com/farigab/fintrack-web', icon: 'pi pi-github', primary: true },
            { label: 'API', url: 'https://github.com/farigab/fintrack-api', icon: 'pi pi-github' }
          ]
        }
      ]
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Entrega de software enterprise com Java, Angular, arquitetura e integração cloud',
      items: [
        {
          id: 'radix-mid',
          company: 'Radix',
          role: 'Desenvolvedor de Software Pleno',
          period: 'Jul 2025 - Presente',
          location: 'Brasil',
          project: 'Projeto Petrobras - Sondopolis Cloud (Full Stack)',
          bullets: [
            'Liderei a refatoração do sistema para uma nova arquitetura, melhorando escalabilidade e manutenibilidade de longo prazo.',
            'Entreguei funcionalidades críticas para um projeto cloud da Petrobras com foco em performance e confiabilidade.',
            'Defini padrões de código, práticas de teste e diretrizes arquiteturais, orientando desenvolvedores juniores.',
            'Automatizei pipelines de CI/CD usando Jenkins e GitHub Actions, reduzindo erros de implantação.',
            'Contribuí em decisões técnicas envolvendo Java 21, Spring Boot, Angular 18 e serviços AWS.'
          ]
        },
        {
          id: 'radix-junior-2024',
          company: 'Radix',
          role: 'Desenvolvedor de Software Júnior',
          period: 'Mai 2024 - Jul 2025',
          location: 'Brasil',
          bullets: [
            'Refatorei módulos legados para clean architecture, reduzindo dívida técnica.',
            'Desenvolvi e mantive sistemas para monitoramento de contratos, equipamentos e KPIs operacionais.',
            'Implementei testes unitários no backend e frontend para aumentar a estabilidade do sistema.',
            'Entreguei funcionalidades ponta a ponta em ambientes Scrum e SAFe usando Java, Spring, Angular, SQL e JPA.'
          ]
        },
        {
          id: 'radix-junior-2021',
          company: 'Radix',
          role: 'Desenvolvedor de Software Júnior',
          period: 'Dez 2021 - Abr 2024',
          location: 'Rio de Janeiro, Brasil',
          bullets: [
            'Construí sistemas para controle e fiscalização de contratos industriais.',
            'Mantive e evoluí aplicações legadas usadas por clientes internacionais.',
            'Desenvolvi novos módulos usando Java, Spring MVC e JDBC.',
            'Colaborei com áreas de negócio para traduzir requisitos em soluções técnicas.'
          ]
        },
        {
          id: 'radix-intern',
          company: 'Radix',
          role: 'Estagiário em Desenvolvimento de Software',
          period: 'Nov 2020 - Dez 2021',
          location: 'Rio de Janeiro, Brasil',
          bullets: [
            'Desenvolvi novos módulos e mantive sistemas legados para contratos de sondas, manutenção de equipamentos e indicadores de performance.',
            'Apoiei manutenções corretivas e evolutivas em aplicações Java.',
            'Construí base sólida em boas práticas, controle de versão e metodologias ágeis.'
          ]
        }
      ]
    },
    footer: { rights: 'Todos os direitos reservados.' }
  }
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly language = signal<LanguageCode>(this.getInitialLanguage());

  readonly currentLanguage = this.language.asReadonly();
  readonly copy = computed(() => copy[this.language()]);
  readonly languages: LanguageCode[] = ['en', 'pt-BR'];

  setLanguage(language: LanguageCode): void {
    this.language.set(language);

    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }

  private getInitialLanguage(): LanguageCode {
    if (!this.isBrowser) {
      return 'en';
    }

    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === 'en' || savedLanguage === 'pt-BR') {
      document.documentElement.lang = savedLanguage;
      return savedLanguage;
    }

    document.documentElement.lang = 'en';
    return 'en';
  }
}
