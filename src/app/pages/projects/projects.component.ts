import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectList = [
    {
      title: 'Personal Portfolio',
      description: "A responsive personal portfolio website built with Angular to showcase my frontend projects and development experience. Designed with a focus on clean UI, accessibility, and modern responsive design principles.",
      tech: ['Angular', 'SCSS', 'Responsive UI'],
      github: 'https://github.com/MustafaSterShahin/mustafa-portfolio',
      live: ''
    },
    {
      title: 'CMS Admin Panel (Frontend)',
      description: "A frontend interface for a content management system (CMS) built with Angular and PrimeNG. Includes authentication flows, news management features, and dynamic content handling for administrative users.",
      tech: ['Angular', 'PrimeNG', 'SCSS'],
      github: 'https://github.com/abdullahsari92/cms-app',
      live: ''
    },
    {
      title: 'CMS Public Interface',
      description: "Public-facing frontend application developed with Angular. Displays news content with dynamic components such as sliders, detailed pages, and multi-language support using i18n.",
      tech: ['Angular', 'i18n', 'SCSS'],
      github: 'https://github.com/abdullahsari92/cms-public',
      live: ''
    },
    {
      title: 'IME (Frontend)',
      description: "A frontend project developed during my internship, focused on building responsive UI components and implementing modern frontend practices. The project is maintained privately on GitLab.",
      tech: ['Angular', 'SCSS'],
      github: '',
      live: ''
    },
    {
      title: 'Bikini One E-Commerce UI',
      description: "A modern e-commerce frontend interface built with React and TypeScript. Includes product listing pages, product detail pages (PDP), and responsive UI components designed for an online shopping experience." ,     
      tech: ['React', 'TypeScript', 'CSS'],
      live: 'https://bikini-one.vercel.app/'
    },
    {
      title: 'Blaze UI Demo Project',
      description: "A UI demo project focused on modern frontend development techniques, responsive layouts, and reusable component design using React and TypeScript.",      
      tech: ['React', 'TypeScript', 'CSS'],
      live: 'https://blaze-deneme.vercel.app'
    }
  ];

}