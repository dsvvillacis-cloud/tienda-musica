import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('instrumentos')
export class Instrumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string; // Aquí irá "Guitarra", "Batería", etc.

  @Column()
  marca: string;

  @Column()
  tipo: string; // Cuerda, Percusión, etc.

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'integer' })
  stock: number;
}