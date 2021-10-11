import React from 'react';
import './Table.css';

const Table = ({data, onSort, sortOrder, sortField, onRowSelect, selectedRow}) => {
  return (
    <table className="table vm-table">
      <thead>
      <tr>
        <th
          onClick={() => onSort('id')}
          className={`${sortField === 'id' ? 'sorting' : ''} ${sortOrder}`}
        >
          ID
        </th>
        <th
          onClick={() => onSort('firstName')}
          className={`${sortField === 'firstName' ? 'sorting' : ''} ${sortOrder}`}
        >
          First Name
        </th>
        <th
          onClick={() => onSort('lastName')}
          className={`${sortField === 'lastName' ? 'sorting' : ''} ${sortOrder}`}
        >
          Last Name
        </th>
        <th
          onClick={() => onSort('email')}
          className={`${sortField === 'email' ? 'sorting' : ''} ${sortOrder}`}
        >
          Email
        </th>
        <th
          onClick={() => onSort('phone')}
          className={`${sortField === 'phone' ? 'sorting' : ''} ${sortOrder}`}
        >
          Phone
        </th>
      </tr>
      </thead>

      <tbody>
      {data?.map(item => (
        <tr
          key={`${item.id}-${item.phone}`}
          onClick={() => onRowSelect(item)}
          className={`${(item?.id + item?.phone) === (selectedRow?.id + selectedRow?.phone) ? 'selected' : ''}`}
        >
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;