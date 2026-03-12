import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  desciption?: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsEnum(TodoPriority)
  @IsNotEmpty()
  priority: TodoPriority;
  
  @IsDateString()
  @IsOptional()
  dueAt?: Date;

  @IsDateString()
  completedAt: Date;

  @IsString()
  userId: string;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updateAt?: Date;
}
enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}
