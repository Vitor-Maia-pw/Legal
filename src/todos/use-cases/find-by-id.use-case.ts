import { Injectable, Logger } from "@nestjs/common";
import { FindTodoRepository } from "../repository";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class FindTodoUseCase {
    constructor(
        private readonly findTodoRepository: FindTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute(data: CreateTodoDto) {
        try {
            this.logger.log('Finding toDo...');
            const todo = await this.findTodoRepository.find(data);
            this.logger.log('ToDo found successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to find toDo')
        }
    }
}