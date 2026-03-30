import '../../global.css';
import './Error.css';

import React from 'react';

const Error = () => {
  const errorMessages = [
    { message: 'errore 404', className: 'error-forwards', key: 'e1' },
    { message: 'Manda socorro!!', className: 'error-backwards', key: 'e2' },
  ];

  return (
    <div className="error-container">
      {Array.from({ length: 3 }, (_, i) =>
        errorMessages.map((item) => (
          <div key={`${item.key}-${i}`}>
            <h1 className={item.className}>{item.message}</h1>
            <hr />
          </div>
        )),
      )}
    </div>
  );
};

export default Error;
