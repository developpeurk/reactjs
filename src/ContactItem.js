import React from 'react';

function ContactItem({ contact: { name, phone }, deleteContact }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          {' '}
          <span
            onClick={() => deleteContact(name)}
            style={{ cursor: 'pointer' }}
            className="badge badge-danger font-weight-bold p-2"
          >
            &times;
          </span>
        </td>
      </tr>
    </>
  );
}

export default ContactItem;
