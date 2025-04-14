import PageHead from '@/components/PageHead';
import { UserDetail } from '@/layers/framework/ui/UserDetail';

export default function CleanArchitecture() {
  return (
    <>
      <PageHead title="Clean Architecture" />
      <main className="mx-auto min-h-screen w-[1200px] max-w-full p-8">
        <h1>Clean Architecture</h1>

        <div>
          <UserDetail />
        </div>
      </main>
    </>
  );
}
