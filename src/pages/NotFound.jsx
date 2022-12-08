import React from 'react';

const NotFound = () => {
    return (
      <div className="error">
        <h1>
          Ничего не найдено <span>😕</span>
        </h1>
        <h1>
          Перейдите на главную
          <Link to="/">
            <span className="error_pages">страницу</span>
          </Link>
        </h1>
      </div>
    );
};

export default NotFound;