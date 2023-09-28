import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddMotorcycle } from '../../redux/reducers/motorcycleSlice';
import Alerts from './subcomponents/pop/Alert';
import Created from './subcomponents/pop/Created';

export default function AddMotorcycle() {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch('');
  const { returnedMessage } = useSelector((state) => state.motorcycle);

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(adddMotorcycle({
      name, model, photo, description,
    }));
  };

  return (
    <div>
      <h1>Add new motorcycle</h1>
      <div>
        <form onSubmit={handleSubmission}>
          <input
            type="text"
            placeholder="Photo"
            name="photo"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />

          <input
            name="name"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="text"
            placeholder="Model"
            name="model"
            onChange={(e) => setModel(e.target.value)}
            values={model}
          />

          <textarea
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <button type="submit">{returnedMessage === 'pending' ? 'Sending...' : 'submit'}</button>
          {returnedMessage === 'created' && <Created /> }
          {returnedMessage === 'Unprocessable Entity' && <Alerts />}
        </form>
      </div>
    </div>
  );
}
