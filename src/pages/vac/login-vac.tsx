import type { FormEventHandler } from 'react';
import type { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import PageHead from '@/components/PageHead';

type Inputs = {
  email: string;
  password: string;
};

type LoginFormViewProps = {
  formProps: {
    email: UseFormRegisterReturn<'email'>;
    password: UseFormRegisterReturn<'password'>;
  };
  errors: FieldErrors<Inputs>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

function LoginFormView({ formProps, errors, onSubmit }: LoginFormViewProps) {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="space-y-6"
        onSubmit={onSubmit}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            이메일
          </label>
          <div className="mt-2">
            <input
              {...formProps.email}
              type="email"
              id="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          {errors.email && (
            <div className="block text-sm/6 font-medium text-red-500">
              <span>{errors.email.message}</span>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            비밀번호
          </label>
          <div className="mt-2">
            <input
              {...formProps.password}
              type="password"
              id="password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          {errors.password && (
            <div className="block text-sm/6 font-medium text-red-500">
              <span>{errors.password.message}</span>
            </div>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const vacProps: LoginFormViewProps = {
    formProps: {
      email: register('email', { required: '이메일은 필수 항목입니다.' }),
      password: register('password', { required: '비밀번호는 필수 항목입니다.' }),
    },
    errors,
    onSubmit: handleSubmit((data) => {
      console.log(data);
    }),
  };

  return <LoginFormView {...vacProps} />;
}

export default function VACPatternLogin() {
  return (
    <>
      <PageHead title="Login Form (VAC Pattern)" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Login Form (VAC Pattern)</h1>

        <LoginForm />
      </main>
    </>
  );
}
