import React from 'react';
import './DetailRow.css'

const DetailRow = ({item}) => {
  return (
    <div className="detail-row">
      <p>Выбран пользователь <b>{item.firstName} {item.lastName}</b></p>
        Описание:
        <div className='description'>{item.description}</div>
      <p>Адрес проживания: <b>{item?.address?.streetAddress}</b></p>
      <p>Город: <b>{item?.address?.city}</b></p>
      <p>Провинция/штат: <b>{item?.address?.state}</b></p>
      <p>Индекс: <b>{item?.address?.zip}</b></p>
    </div>
  );
};

export default DetailRow;