import { Component, signal, computed } from '@angular/core';

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  activeFilter = signal<string>('*');

  projects = signal<Project[]>([
    {
      id: 1,
      name: 'circuit-ai',
      category: 'ai',
      description: 'Generador de circuitos con IA (Gemini) para PIC16F877A y ESP32. Backend FastAPI + React.',
      image: 'assets/img/portfolio/portfolio-1.jpg',
      url: 'https://github.com/ANTONIO30-09/circuit-ai'
    },
    {
      id: 2,
      name: 'EVENTFLOW-AI',
      category: 'app',
      description: 'App Flutter con Firebase para gestión de eventos (escáner QR de inventario).',
      image: 'assets/img/portfolio/portfolio-2.jpg',
      url: 'https://github.com/ANTONIO30-09/EVENTFLOW-AI'
    },
    {
      id: 3,
      name: 'spotify-mp3-dl',
      category: 'tools',
      description: 'Herramienta CLI para descargar playlists de Spotify a MP3 sin Premium.',
      image: 'assets/img/portfolio/portfolio-3.jpg',
      url: 'https://github.com/ANTONIO30-09/spotify-mp3-dl'
    },
    {
      id: 4,
      name: 'tiempoapp',
      category: 'web',
      description: 'Plataforma web de banco de tiempo (React + Node/Express + PostgreSQL).',
      image: 'assets/img/portfolio/portfolio-4.jpg',
      url: 'https://github.com/ANTONIO30-09/tiempoapp'
    }
  ]);

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === '*'
      ? this.projects()
      : this.projects().filter(p => p.category === filter);
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
