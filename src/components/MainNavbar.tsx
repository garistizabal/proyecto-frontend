import { Link } from 'react-router-dom';
import { SiVaultwarden } from 'react-icons/si';

export const MainNavbar = () => {
  return (
    <div className="flex justify-between px-5 py-3 bg-white border-b shadow sm:px-10">
      <Link to="/" className="flex items-center justify-center gap-2 text-indigo-600">
        <SiVaultwarden className="size-10" />
        <p className="hidden text-2xl font-bold sm:inline-block">Vaultly</p>
      </Link>

      <div className="flex items-center justify-center gap-3">
        <Link
          to="/login"
          className="rounded bg-white border border-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 transition-all"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="transition-all rounded bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
