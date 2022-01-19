import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepo: Repository<Task>,
  ) {}

  async create(createTaskInput: CreateTaskInput) {
    const task = Object.assign(new Task(), createTaskInput);
    await this.tasksRepo.insert(task);
  }

  findAll() {
    return this.tasksRepo.find();
  }

  findOne(id: string) {
    return this.tasksRepo.findOne(id, { relations: ['assignee'] });
  }

  update(id: string, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
