import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
  const {handleRegisterNewUser} = useFirebase();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  const onSubmit = submitData =>
  handleSubmiteRegister(submitData); 

  const handleSubmiteRegister = (data) =>{
    const {email, password, user} = data;
    handleRegisterNewUser(email, password, user, navigate)
  }
  console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("useName", {})} />
      <input type="email" placeholder="Email" {...register("useEmail", {})} />
      <input type="password" placeholder="Password" {...register("userPass", {})} />

      <input type="submit" />
    </form>
        </div>
    );
};

export default Register;