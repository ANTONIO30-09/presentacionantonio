import { Component, signal } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills = signal<Skill[]>([
    { name: 'Python', level: 90 },
    { name: 'TypeScript / JavaScript', level: 85 },
    { name: 'React / FastAPI', level: 80 },
    { name: 'SQL / PostgreSQL / MySQL', level: 80 },
    { name: 'PyTorch / TensorFlow', level: 70 },
    { name: 'Linux / Docker / Git', level: 75 }
  ]);
}
