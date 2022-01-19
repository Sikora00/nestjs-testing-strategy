import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { TasksService } from './tasks.service';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TasksService', () => {
  let service: TasksService;
  let repo: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<TasksService>(TasksService);
    repo = module.get(getRepositoryToken(Task));
  });

  it('should be defined', async () => {
    const id = randomUUID();

    await service.create({
      id,
      description: 'description',
      title: 'title',
      assignee: '12354',
    });

    // one way
    expect(await service.findOne(id)).toMatchObject(
      expect.objectContaining({
        id,
        description: 'description',
        title: 'title',
        assignee: { id: '12354' },
      }),
    );

    // or
    expect(await repo.findOne(id, { relations: ['assignee'] })).toMatchObject(
      expect.objectContaining({
        id,
        description: 'description',
        title: 'title',
        assignee: { id: '12354' },
      }),
    );
  });
});
