import React from 'react';
import Loader from '../Loader/Loader';
import CourseList, { ICourse } from './CourseList';
import SearchParamsPanel from './SearchParamsPanel';
import axios from 'axios';

export type TonChange = (event: React.FormEvent<HTMLSelectElement> | React.FormEvent<HTMLInputElement>) => void

export type THandleSearch = (e: React.MouseEvent) => void

interface IState {
  subject: string,
  genre: string,
  grade: string,
  currency: string,
  search: string,
  searchParam: string,
  courses: ICourse[] | null,
  isLoading: boolean
}

class Showcase extends React.Component {
  state: IState = {
    subject: '',
    genre: '',
    grade: '',
    search: '',
    searchParam: '',
    currency: 'ruble',
    courses: null,
    isLoading: false
  }

  componentDidMount () {
    const { courses } = this.state;
    if (!courses) {
      this.setState({ isLoading: true })
      axios
        .post('http://krapipl.imumk.ru:8082/api/mobilev1/update', {'data': ''})
        .then(res => {
          this.setState({ isLoading: false, courses: res.data.items })
        })
        .catch(e => {
          console.log('Error', e)
          this.setState({ isLoading: false })
        })
    }
  }

  handleSearch: THandleSearch = (e) => {
    const { search } = this.state;

    this.setState({ searchParam: search })
  }

  onChange: TonChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  }

  filterCourses (): ICourse[] {
    const { subject, genre, grade, searchParam, courses } = this.state;
    if (!courses) return []

    if (!subject && !genre && !grade && !searchParam.trim()) {
      return courses
    }

    const filtered = courses.filter(course => {
      return (
        course.subject.indexOf(subject) !== -1 && 
        course.genre.indexOf(genre) !== -1 && 
        course.grade.indexOf(grade) !== -1 && 
        course.title.indexOf(searchParam) !== -1
      )
    })

    return filtered
  }

  render () {
    const { currency, subject, genre, grade, search } = this.state;

    const preLoad = (): boolean => {
      const { courses, isLoading } = this.state;

      if (!courses || isLoading) {
        return true
      }

      return false
    }

    const filtered = this.filterCourses()

    return (
      preLoad() ? 
        <Loader />
      : 
        < div className='showcase' >
          <h1 className='title showcase__title'>Витрина</h1>
          
          <SearchParamsPanel
            currency={currency}
            subject={subject}
            genre={genre}
            grade={grade}
            search={search}
            onChange={this.onChange}
            handleSearch={this.handleSearch}
          />

          <CourseList courses={filtered} currency={currency} />
        </div >
    )
  }
}

export default Showcase