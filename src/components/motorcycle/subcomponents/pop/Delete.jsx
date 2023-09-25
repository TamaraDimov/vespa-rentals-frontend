
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMotorcycle } from '../../../../redux/reducers/motorcycleSlice';



export default function PopDelete({id}) {
  
  return (
    <div>
      <h1>Do you want to delete ?</h1>
      <button type="button">Cancel</button>
      <button type="button">Delete</button>
    </div>
  );
}
