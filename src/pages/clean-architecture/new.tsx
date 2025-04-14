import PageHead from '@/components/PageHead';
import { UserForm } from '@/layers/framework/ui/UserForm';

export default function CleanArchitecture() {
  return (
    <>
      <PageHead title="Clean Architecture" />
      <main className="mx-auto min-h-screen w-[1200px] max-w-full p-8">
        <h1>Clean Architecture</h1>

        <div>
          <UserForm />
        </div>
      </main>
    </>
  );
}
