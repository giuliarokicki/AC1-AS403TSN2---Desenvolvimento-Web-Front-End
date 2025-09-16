import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  titulo: string;
  autor: string;
  data: string;
  conteudo: string;
  curtidas: number;
  comentarios: string[];
}

@Component({
  selector: 'app-ac1',
  imports: [CommonModule],
  templateUrl: './ac1.html',
  styleUrl: './ac1.css'
})

export class ac1 {
  posts: Post[] = [
    {
      titulo: 'Brigadeiro de Leite em Pó',
      autor: 'Giulia',
      data: '14 de Agosto de 2025',
      conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iste! Consequatur accusamus eos assumenda. Sequi ullam dolores architecto aut nam dignissimos beatae ea blanditiis! Doloribus quo molestias quae itaque ipsum!Debitis magni explicabo quo id illo, itaque, atque minima porro recusandae quis dolore velit voluptates assumenda possimus impedit cumque exercitationem culpa inventore ratione eum suscipit asperiores! Cumque mollitia optio accusantium!",
      curtidas: 0,
      comentarios: []
    },
    {
      titulo: 'Bolo de Paçoca',
      autor: 'Ana',
      data: '22 de Fevereiro de 2025',
      conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iste! Consequatur accusamus eos assumenda. Sequi ullam dolores architecto aut nam dignissimos beatae ea blanditiis! Doloribus quo molestias quae itaque ipsum!Debitis magni explicabo quo id illo, itaque, atque minima porro recusandae quis dolore velit voluptates assumenda possimus impedit cumque exercitationem culpa inventore ratione eum suscipit asperiores! Cumque mollitia optio accusantium!",
      curtidas: 0,
      comentarios: []
    },
    {
      titulo: 'Panetone de Chocolate',
      autor: 'Ana Giulia',
      data: '23 de Dezembro de 2024',
      conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iste! Consequatur accusamus eos assumenda. Sequi ullam dolores architecto aut nam dignissimos beatae ea blanditiis! Doloribus quo molestias quae itaque ipsum!Debitis magni explicabo quo id illo, itaque, atque minima porro recusandae quis dolore velit voluptates assumenda possimus impedit cumque exercitationem culpa inventore ratione eum suscipit asperiores! Cumque mollitia optio accusantium!",
      curtidas: 0,
      comentarios: []
    }
  ];

  curtir(post: Post) {
    post.curtidas++;
  }

  adicionarComentario(post: Post, comentario: string) {
    if (comentario.trim()) {
      post.comentarios.push(comentario);
    }
  }
}