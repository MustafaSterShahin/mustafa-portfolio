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
    title: 'Kişisel Portfolyo',
    description: 'Angular ile geliştirdiğim, responsive tasarıma sahip kişisel portfolyo sitem.',
    tech: ['Angular', 'SCSS', 'Responsive Design'],
    github: 'https://github.com/MustafaSterShahin/mustafa-portfolio',
    live: ''
  },
  {
    title: 'CMS Admin Panel (Frontend)',
    description: 'Kapsamlı içerik yönetimi için kullanıcı arayüzü. Yetkilendirme, haber ekleme, listeleme işlemleri. Frontend tarafında geliştirici olarak yer aldım.',
    tech: ['Angular', 'PrimeNG', 'SCSS'],
    github: 'https://github.com/abdullahsari92/cms-app',
    live: ''
  },
  {
    title: 'CMS Public Arayüzü',
    description: 'Kullanıcılara açık olan, haberlerin gösterildiği frontend arayüz. Slider, haber detayları, çoklu dil desteği içeriyor. Frontend geliştirici olarak katkıda bulundum.',
    tech: ['Angular', 'i18n', 'SCSS'],
    github: 'https://github.com/abdullahsari92/cms-public',
    live: ''
  },
  {
    title: 'IME (Front-end)',
    description: 'GitLab üzerinde geliştirdiğim özel bir frontend staj projesi. Kodlar özel olarak tutulmaktadır.',
    tech: ['Angular', 'SCSS'],
    github: '',
    live: ''
  }
];

}
