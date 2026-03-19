import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoRepository, UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class DeleteTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly findTodoByIdRepository: FindTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute(id: string, data: UpdateTodoDto) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.findTodoByIdRepository.execute(id);

            if (!todo) {
                throw new NotFoundException('ToDo not found');
            }

            await this.updateTodoRepository.execute(id, data)
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo')
        }
    }
}