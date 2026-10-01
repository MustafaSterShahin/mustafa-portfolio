import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  category?: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectList: Project[] = [
    {
      title: 'Personal Portfolio',
      category: 'Portfolio & Web',
      description: 'A responsive personal portfolio website built with Angular 18, SSR (Server-Side Rendering), and SCSS. Designed with a focus on clean UI/UX, responsive layouts, interactive animations, and modern frontend architecture.',
      tech: ['Angular 18', 'TypeScript', 'SCSS', 'SSR', 'Responsive UI'],
      github: 'https://github.com/MustafaSterShahin/mustafa-portfolio',
      live: 'https://mustafa-portfolio-liard.vercel.app/',
      featured: true
    },
    {
      title: 'Blaze Outdoor',
      category: 'E-Commerce Platform',
      description: 'A modern e-commerce web platform for outdoor performance gear and trail running footwear built with React and TypeScript. Features high-performance product browsing, responsive layouts, and interactive UI components.',
      tech: ['React', 'TypeScript', 'Vite', 'CSS3', 'Responsive UI'],
      live: 'https://blaze-deneme.vercel.app',
      featured: true
    },
    {
      title: 'CMS Admin Panel (Frontend)',
      category: 'Web Application',
      description: 'A frontend interface for a content management system (CMS) built with Angular and PrimeNG. Includes authentication flows, news management features, and dynamic content handling for administrative users.',
      tech: ['Angular', 'PrimeNG', 'SCSS'],
      github: 'https://github.com/abdullahsari92/cms-app'
    },
    {
      title: 'CMS Public Interface',
      category: 'Web Application',
      description: 'Public-facing frontend application developed with Angular. Displays news content with dynamic components such as sliders, detailed pages, and multi-language support using i18n.',
      tech: ['Angular', 'i18n', 'SCSS'],
      github: 'https://github.com/abdullahsari92/cms-public'
    },
    {
      title: 'IME (Frontend)',
      category: 'Enterprise Internship',
      description: 'A frontend project developed during my internship, focused on building responsive UI components and implementing modern frontend practices. The project is maintained privately on GitLab.',
      tech: ['Angular', 'SCSS', 'GitLab']
    }
  ];

}