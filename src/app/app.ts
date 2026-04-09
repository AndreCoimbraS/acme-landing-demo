import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule, InputTextModule, TextareaModule, CardModule],
  templateUrl: './app.component.html'
})
export class App {
  title = 'solare-landing';

  missionCards = [
    {
      title: 'Excelência Musical',
      icon: 'pi-star',
      content: 'Buscamos o patamar mais alto da qualidade sonora para os projetos de nossos clientes. Cada detalhe importa.'
    },
    {
      title: 'Inovação Artística',
      icon: 'pi-bolt',
      content: 'Trazemos uma visão ousada e criativa para cada projeto, combinando práticas modernas para transcender limites.'
    },
    {
      title: 'Comprometimento',
      icon: 'pi-check-circle',
      content: 'Construção baseada na confiança e dedicação. Entregamos exantamente as experiências primordiais que o artista deseja.'
    }
  ];

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
