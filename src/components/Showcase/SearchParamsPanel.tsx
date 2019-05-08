import React from 'react';
import { classes, genres, subjects } from './constants';
import { TonChange, THandleSearch } from './Showcase';
import searchIcon from './search-icon.svg';
import ReactSVG from 'react-svg';

interface IProps {
  handleSearch: THandleSearch,
  onChange: TonChange,
  subject: string,
  genre: string,
  grade: string,
  currency: string,
  search: string,
}

const SearchParamsPanel = (props: IProps) => {
  const {
    handleSearch,
    onChange,
    subject,
    genre,
    grade,
    currency,
    search
  } = props;
  
  return (
    <div className="showcase__search-params">
      <div className="showcase__param">
        <select
          name="subject"
          id="subject"
          className="input"
          onChange={onChange}
          value={subject}
        >
          <option value="">Все предметы</option>
          {
            subjects.map(subject => {
              return (
                <option value={subject} key={subject}>{subject}</option>
              )
            })
          }
        </select>
      </div>
      <div className="showcase__param">
        <select
          name="genre"
          id="genre"
          className="input"
          onChange={onChange}
          value={genre}
        >
          <option value="" >Все жанры</option>
          {
            genres.map(genre => {
              return (
                <option value={genre} key={genre}>{genre}</option>
              )
            })
          }
        </select>
      </div>
      <div className="showcase__param">
        <select
          name="grade"
          id="grade"
          className="input"
          onChange={onChange}
          value={grade}
        >
          <option value="">Все классы</option>
          {classes.map(item => {
            return (
              <option value={item} key={item}>{item}</option>
            )
          })}
        </select>
      </div>
      <div className="showcase__param">
        <select
          name="currency"
          id="currency"
          className="input"
          onChange={onChange}
          value={currency}
        >
          <option value="ruble">Рубли</option>
          <option value="bonus">Бонусы</option>
        </select>
      </div>
      <div className="showcase__param">
        <input
          type="text"
          name="search"
          className="input"
          placeholder="Поиск"
          onChange={onChange}
          value={search}
        />
        <button className="showcase__search" onClick={handleSearch}>
          <ReactSVG src={searchIcon} />
        </button>
      </div>
    </div>
  )
}

export default SearchParamsPanel;