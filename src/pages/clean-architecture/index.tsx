import PageHead from '@/components/PageHead';
import { UserList } from '@/layers/framework/ui/UserList';

export default function CleanArchitecture() {
  return (
    <>
      <PageHead title="Clean Architecture" />
      <main className="mx-auto min-h-screen w-[1200px] max-w-full p-8">
        <h1>Clean Architecture</h1>

        <div>
          <UserList />
        </div>
      </main>
    </>
  );
}
