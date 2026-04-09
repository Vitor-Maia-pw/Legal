import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class FindAllTodoRepository {
  findMany(data: CreateTodoDto) {
      throw new Error("Method not implemented.");
  }
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.todo.findMany();
  }
}
