import { Test, TestingModule } from '@nestjs/testing';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';
import { createSpyObj } from 'jest-createspyobj';
import { randomUUID } from 'crypto';

describe('TasksResolver', () => {
  let resolver: TasksResolver;
  let service: jest.Mocked<TasksService>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksResolver,
        { provide: TasksService, useValue: createSpyObj(TasksService) },
      ],
    }).compile();

    resolver = module.get<TasksResolver>(TasksResolver);
    service = module.get(TasksService);
  });

  it('should be defined', async () => {
    const dto = {
      id: randomUUID(),
      description: 'description',
      title: 'title',
      assignee: '12354',
    };

    await resolver.create(dto);

    expect(service.create).toBeCalledWith(dto);
  });
});
