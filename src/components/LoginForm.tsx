import { useState } from 'react';

import { useAuthStore } from '@/stores/auth.store';
import { LoadingSpinner } from './LoadingSpinner';

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [formState, setFormState] = useState<ILoginForm>({
    email: '',
    password: '',
  });

  const { isLoggingIn, onLogin } = useAuthStore();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onLogin(formState);
  };

  return (
    <form
      className="min-w-full p-10 bg-white border rounded-lg shadow-lg"
      onSubmit={handleLogin}
    >
      <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
        Sign In
      </h1>

      <div className="flex flex-col gap-3">
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
      </div>

      <button
        type="submit"
        disabled={isLoggingIn}
        className="w-full px-4 py-3 mt-6 font-sans text-lg font-semibold tracking-wide text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 disabled:opacity-50"
      >
        {isLoggingIn ? <LoadingSpinner size='sm'/> : 'Login'}
      </button>
    </form>
  );
};
