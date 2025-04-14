import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCreateUser } from '../stores/userStore';

const userSchema = z.object({
  name: z.string().min(1, '이름은 필수입니다'),
  email: z.string().email('유효한 이메일을 입력하세요'),
});

type FormData = z.infer<typeof userSchema>;

export function UserForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });

  const { isLoading, mutate: createUser } = useCreateUser();

  const onSubmit = (data: FormData) => {
    createUser(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-2 space-y-2"
    >
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>이름</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>이메일</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
      >
        사용자 추가
      </button>
    </form>
  );
}
