import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => 
  console.log(data);
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