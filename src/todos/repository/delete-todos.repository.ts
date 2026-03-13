import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class DeleteTodoRepository {
  delete(data: CreateTodoDto) {
      throw new Error("Method not implemented.");
  }
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string) {
    return await this.prisma.todo.delete({ 
        where: { id },
    });
  }
}