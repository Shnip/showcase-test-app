import React from 'react';
import { Link } from 'react-router-dom';

export interface ICourse {
  courseId: string,
  extId: string,
  courseHash: string,
  title: string,
  grade: string,
  genre: string,
  subject: string,
  itunes_id: string,
  progress: number,
  description: string,
  status: string,
  price: number,
  shopUrl: string | null,
  google_id: string,
  winstore_id: number | null,
  isNew: boolean,
  priceBonus: number
}

interface IProps {
  courses: ICourse[] | null,
  currency: string
}

export default function (props: IProps) {
  const { courses, currency } = props;

  const parseClasses = (classes: string): string => {
    if (!classes.trim()) return ''

    const arr = classes.split(';');

    if (arr.length === 1) {
      return `${arr[0]} класс`
    }

    return `${arr[0]} - ${arr[arr.length - 1]} классы`
  }

  return (
    <ul className="list course__list">
    { 
      courses && courses.map((course: ICourse) => {
        return (
          <li className="course__list-item" key={course.courseId}>
            <div className="course__logo">
              <img
                src={`https://www.imumk.ru/svc/coursecover/${course.courseId}`}
                alt="course-logo"
                className="course__img"
              />
            </div>
            <div className="course__info">
              <p className="course__title">{course.title}</p>
              <p className="course__grade">{parseClasses(course.grade)}</p>
              <p className="course__genre">{course.genre}</p>
              <p className="course__meta link">Подробнее</p>
              <p className="course__controls">
                <Link to="#" className="btn btn--pure-primary">
                  {
                    currency === 'ruble' ?
                      `${course.price} руб.`
                      :
                      `${course.priceBonus} бонусов`}
                </Link>
              </p>
            </div>
          </li>
        )
      })
    }
    </ul>
  )
}