import { useForm } from 'react-hook-form';
import './RegistrationPage.css';
import { postData } from '../../Components/services/post';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function RegistrationPage({ setUpdate }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      bloodGroup: '',
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      postData({
        ...data,
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        age: parseInt(data.age),
      });
      setUpdate((update) => update + 1);
      reset();
      navigate('/donors-list');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='registration-page'>
      <h1>Become a donor</h1>
      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <label htmlFor='firstName'>Your first name</label>
        <input
          type='text'
          id='firstName'
          placeholder='Enter your name'
          {...register('firstName', {
            required: 'First name is required',
            validate: (value) => value.trim() !== '' || 'Name cannot be empty',
          })}
        />
        {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
        <label htmlFor='lastName'>Your last name</label>
        <input
          type='text'
          id='lastName'
          placeholder='Enter last name'
          {...register('lastName', {
            required: 'Last name is required',
            validate: (value) => value.trim() !== '' || 'Last name cannot be empty',
          })}
        />
        {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
        <label htmlFor='age'>Your age</label>
        <input
          type='number'
          id='age'
          placeholder='Enter Your age'
          min={1}
          max={75}
          {...register('age', {
            required: 'Age is required',
            validate: (value) => (value >= 18 && value <= 75) || 'Age must be between 18 and 75',
          })}
        />
        {errors.age && <p className='error'>{errors.age.message}</p>}
        <label htmlFor='gender'>Gender</label>
        <select
          id='gender'
          {...register('gender', {
            required: 'Gender is required',
          })}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        {errors.gender && <p className='error'>{errors.gender.message}</p>}
        <label>Your blood group</label>
        <select
          id='bloodGroup'
          {...register('bloodGroup', { required: 'Blood group is required' })}
        >
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='AB'>AB</option>
          <option value='0'>0</option>
        </select>
        {errors.bloodGroup && <p className='error'>{errors.bloodGroup.message}</p>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
