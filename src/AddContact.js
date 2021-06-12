import React from 'react';
import { addContacts } from './redux/actions/contact-actions';
import { connect, useDispatch } from 'react-redux';
function AddContact({ history }) {
  const dispatch = useDispatch();
  const [contact, setContact] = React.useState({
    name: '',
    phone: '',
  });

  function submitForm(event) {
    event.preventDefault();
    dispatch(addContacts(contact));
    setContact({ name: '', phone: '' });
    history.push('/');
  }

  return (
    <div className="col-md-12">
      <div className="my-5 mx-auto">
        <form
          method="post"
          onSubmit={(event) => {
            submitForm(event);
          }}
        >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="name"
              value={contact.name}
              onChange={(event) =>
                setContact({ ...contact, name: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="phone"
              value={contact.phone}
              onChange={(event) =>
                setContact({
                  ...contact,
                  phone: event.target.value,
                })
              }
            />
            <div className="form-group">
              <input
                type="submit"
                value="Validate"
                className="btn btn-danger"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
