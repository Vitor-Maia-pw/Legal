import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly findTodoByIdRepository: FindTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute(id: string) {
        try {
            this.logger.log('deleting toDo...');
            const todo = await this.findTodoByIdRepository.execute(id);

            if (!todo) {
                throw new NotFoundException('ToDo not found');
            }

            await this.deleteTodoRepository.execute(id)
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to delete toDo')
        }
    }
}
