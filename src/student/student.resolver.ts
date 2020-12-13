import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType)
  getStudentById(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudentsById(id);
  }

  @Query(() => [StudentType])
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
