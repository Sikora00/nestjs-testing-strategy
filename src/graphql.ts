
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTaskInput {
    id: string;
    assignee: string;
    title: string;
    description: string;
}

export class UpdateTaskInput {
    id: number;
}

export class Task {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract tasks(): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

export abstract class IMutation {
    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Task | Promise<Task>;

    abstract removeTask(id: number): Nullable<Task> | Promise<Nullable<Task>>;
}

type Nullable<T> = T | null;
