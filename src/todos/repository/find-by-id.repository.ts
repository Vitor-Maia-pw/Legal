import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class FindTodoRepository {
  
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string) {
    return await this.prisma.todo.findUnique({
      where: { id }
    });
  }
}
