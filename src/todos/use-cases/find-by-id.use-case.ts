import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { FindTodoRepository } from "../repository";

@Injectable()
export class FindTodoUseCase {
    constructor(
        private readonly findTodoRepository: FindTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute(id: string) {
        try {
            this.logger.log('Finding toDo...');
            const todo = await this.findTodoRepository.execute(id);
            this.logger.log('ToDo found successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to find toDo')
        }
    }
}