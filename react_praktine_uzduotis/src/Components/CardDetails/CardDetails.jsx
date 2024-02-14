import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import './CardDetails.css';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { updateData } from '../services/update';

function CardDetails({ setUpdate }) {
  const [donor, setDonor] = useState({});
  const [edit, setEdit] = useState(false);
  const { firstName, lastName, age, gender, bloodGroup } = donor;
  const { id } = useParams();

  const { setValue, reset, handleSubmit } = useForm();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/donors/${id}`);
      setDonor(data);
    })();
  }, [id]);

  useEffect(() => {
    if (donor) {
      setValue('firstName', donor.firstName);
      setValue('lastName', donor.lastName);
      setValue('age', donor.age);
      setValue('gender', donor.gender);
      setValue('bloodGroup', donor.bloodGroup);
    }
  }, [donor, setValue]);

  const formSubmitHandler = async (data) => {
    try {
      await updateData(donor.id, { ...data, age: parseInt(data.age) });
      setUpdate((update) => update + 1);
      reset();
      setEdit(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='card-details'>
      <h1>{`More information about donor ${firstName}`}</h1>
      <div className='detailed-card'>
        <Link to='/donors-list' className='arrow-link'>
          <FontAwesomeIcon icon={faCircleLeft} className='left-arrow' />
          <span className='arrow-text'>Go back</span>
        </Link>
        {edit ? (
          <div className='edit-column'>
            <input
              type='text'
              value={donor.firstName}
              onChange={(e) => setDonor({ ...donor, firstName: e.target.value })}
            />
            <input
              type='text'
              value={donor.lastName}
              onChange={(e) => setDonor({ ...donor, lastName: e.target.value })}
            />
            <input
              type='number'
              value={donor.age}
              onChange={(e) => setDonor({ ...donor, age: e.target.value })}
            />
            <select
              value={donor.gender}
              onChange={(e) => setDonor({ ...donor, gender: e.target.value })}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <select
              value={donor.bloodGroup}
              onChange={(e) => setDonor({ ...donor, bloodGroup: e.target.value })}
            >
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>0</option>
            </select>
          </div>
        ) : (
          <>
            <h3>First name: {firstName}</h3>
            <h4>Last name: {lastName}</h4>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Blood group: {bloodGroup}</p>
          </>
        )}

        {!edit ? (
          <button onClick={() => setEdit((edit) => !edit)}>Edit</button>
        ) : (
          <button onClick={handleSubmit(formSubmitHandler)}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default CardDetails;
