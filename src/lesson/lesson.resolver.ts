import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson(): LessonType {
    return {
      id: 'asdh%ashd',
      name: 'Physics Class',
      startDate: new Date().toUTCString(),
      endDate: new Date().toISOString(),
    };
  }
}
