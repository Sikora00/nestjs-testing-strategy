import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;
  @ManyToOne(() => User)
  assignee: User;
  @ManyToOne(() => User)
  createdBy: User;
  @Column()
  description: string;
  @Column()
  title: string;
}
