import { useState } from 'react';
import { MdAddPhotoAlternate, MdSportsMotorsports } from 'react-icons/md';
import { FaMotorcycle } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { adddMotorcycle } from '../../redux/reducers/motorcycleSlice';
import Alerts from './subcomponents/pop/Alert';
import Created from './subcomponents/pop/Created';
import './AddMotorcycle.css';

export default function AddMotorcycle() {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch('');
  const { returnedMessage } = useSelector((state) => state.motorcycle);

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(
      adddMotorcycle({
        name,
        model,
        photo,
        description,
      }),
    );
  };

  return (
    <div className="add-motorcycle-bg">
      <div className="add-motorcycle-container">
        <h3 className="form-title2">Add New Motorcycle</h3>
        <form className="form-2" onSubmit={handleSubmission}>
          <div
            className="wrap-input1002 validate-input2"
            data-validate="Enter username"
          >
            <input
              type="text"
              placeholder="Photo"
              name="photo"
              onChange={(e) => setPhoto(e.target.value)}
              value={photo}
              className="input1002"
            />

            <span className="focus-input1002" data-placeholder="&#xf207;">
              <MdAddPhotoAlternate className="input-icon2" />
            </span>
          </div>
          <div
            className="wrap-input1002 validate-input2"
            data-validate="Enter email"
          >
            <input
              name="name"
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input1002"
            />
            <span className="focus-input1002" data-placeholder="&#xf207;">
              <MdSportsMotorsports className="input-icon2" />
            </span>
          </div>

          {/* <div
            className="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <span className="focus-input100" data-placeholder="&#xf207;">
              <RiLockPasswordFill className="input-icon" />
            </span>
          </div> */}

          <div
            className="wrap-input1002 validate-input2"
            data-validate="Enter email"
          >
            <input
              type="text"
              placeholder="Model"
              name="model"
              onChange={(e) => setModel(e.target.value)}
              value={model}
              className="input1002"
            />
            <span className="focus-input1002" data-placeholder="&#xf207;">
              <FaMotorcycle className="input-icon2" />
            </span>
          </div>

          <textarea
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="custom-textarea"
          />

          <div className="d3button-container">
            <span className="span-3dbutton">
              <button type="submit" className="motor-form-btn">
                {/* {returnedMessage === 'pending' ? 'Sending...' : 'Submit'} */}
              </button>
            </span>
            {returnedMessage === 'created' && <Created />}
            {returnedMessage === 'Unprocessable Entity' && <Alerts />}
          </div>
        </form>
      </div>
    </div>
  );
}
