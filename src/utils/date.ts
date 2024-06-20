import { format } from 'date-fns';
import { fr } from 'date-fns/locale'
import { CourseProps } from '../components/ui/navbar/body/courses/course';
import { Course } from '../common/models/course';

export function date_to_string(date: string): string {
    return format(new Date(date), "eee d MMM", { locale: fr }).replace(
        /(^\w{1})|(\s+\w{1})/g,
        (letter) => letter.toUpperCase()
      );
}

export function date_to_api(date: string): string {
    return format(date, 'ddMMyyyy')
}

export function date_to_hhhmm(date: string | number): string {
    return format(new Date(date), 'H\'h\'mm')
}

export function isOver (course: CourseProps | Course): boolean {
    return new Date() > new Date(course.heureDepart)
}