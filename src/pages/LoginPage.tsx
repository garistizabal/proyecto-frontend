import { LoginForm } from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full px-5 py-4 lg:w-2/5 md:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
