import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegister } from '@/hooks/useRegister';
import { LoadingSpinner } from './LoadingSpinner';

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export const RegisterForm = () => {
  const [formState, setFormState] = useState<IRegisterForm>({
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  });
  const navigate = useNavigate();

  const { isRegistering, onRegister } = useRegister();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onRegister(formState);

    navigate('/login');
  };

  return (
    <form
      className="min-w-full p-10 bg-white border rounded-lg shadow-lg"
      onSubmit={handleRegister}
    >
      <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
        Sign Up
      </h1>

      <div className="flex flex-col gap-3">
        <div className="space-y-3">
          <label className="block font-semibold text-gray-800 text-md" htmlFor="username">
            Username
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={formState.username}
            onChange={(e) => setFormState({ ...formState, username: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <label className="block font-semibold text-gray-800 text-md" htmlFor="email">
            Email
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="@email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
        </div>

        <div className="space-y-3">
          <label className="block font-semibold text-gray-800 text-md" htmlFor="password">
            Password
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={formState.password}
            onChange={(e) => setFormState({ ...formState, password: e.target.value })}
          />
        </div>

        <label htmlFor="isAdmin" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={(e) => setFormState({ ...formState, isAdmin: e.target.checked })}
              checked={formState.isAdmin}
              className="border-gray-300 rounded size-4"
              id="isAdmin"
            />
          </div>

          <p className="block font-semibold text-gray-800 text-md">Admin</p>
        </label>
      </div>

      <button
        type="submit"
        disabled={isRegistering}
        className="w-full px-4 py-3 mt-6 font-sans text-lg font-semibold tracking-wide text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 disabled:opacity-50"
      >
        {isRegistering ? <LoadingSpinner size="sm" /> : 'Register'}
      </button>
    </form>
  );
};
