import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { CreateTodoRepository } from "../repository";

@Injectable()
export class CreateTodoUseCase {
    constructor(
        private readonly createTodoRepository: CreateTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute(data: CreateTodoDto) {
        try {
            this.logger.log('Creating toDo...');
            const todo = await this.createTodoRepository.create(data);
            this.logger.log('ToDo created successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to create toDo')
        }
    }
}
