import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: CreateTodoDto) {
    return await this.prisma.todo.find({ id });
  }
}
