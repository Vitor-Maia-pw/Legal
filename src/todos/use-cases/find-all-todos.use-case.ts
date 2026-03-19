import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { FindAllTodoRepository } from "../repository";

@Injectable()
export class FindAllTodoUseCase {
    constructor(
        private readonly findAllTodoRepository: FindAllTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute(data: CreateTodoDto) {
        try {
            this.logger.log('Finding toDo...');
            const todo = await this.findAllTodoRepository.findMany(data);
            this.logger.log('ToDo found successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to find toDo')
        }
    }
}