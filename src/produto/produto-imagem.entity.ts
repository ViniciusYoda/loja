/* eslint-disable prettier/prettier */
import { Column, Entity } from 'typeorm';

@Entity('produto_caracteristicas')
export class ProdutoImagem {
    @Column({ name: 'url', length: 100, nullable: false })
    url: string;
    @Column({ name: 'descricao', length: 100, nullable: false })
    descricao: string;
  }