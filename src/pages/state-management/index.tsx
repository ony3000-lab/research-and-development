import type { ComponentProps } from 'react';
import { useCallback } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker/locale/en';
import type { ClientUser, ServerUser } from '@/types/models';
import PageHead from '@/components/PageHead';

function StyledButton({ children, onClick }: ComponentProps<'button'>) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg bg-blue-400 py-1.5 px-3 text-gray-200 hover:bg-blue-600 active:bg-blue-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function StateManagement() {
  const selectUserHandler = useCallback(async () => {
    try {
      const response = await axios.get<ServerUser[]>('http://localhost:3500/users');
      const users: ClientUser[] = response.data.map((serverUser) => ({
        ...serverUser,
        createdAt: new Date(serverUser.createdAt),
        updatedAt: new Date(serverUser.updatedAt),
      }));

      console.log(users);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const insertUserHandler = useCallback(async () => {
    try {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const data = {
        avatarUrl: faker.internet.avatar(),
        name: `${firstName} ${lastName}`,
        email: faker.internet.exampleEmail(firstName, lastName),
        company: faker.company.name(),
      };
      const response = await axios.post<ServerUser>('http://localhost:3500/users', data);
      const user: ClientUser = {
        ...response.data,
        createdAt: new Date(response.data.createdAt),
        updatedAt: new Date(response.data.updatedAt),
      };

      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <PageHead title="State Management" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>State Management</h1>

        <ul>
          <li>
            <h2>React State Management</h2>

            <ul>
              <li>
                <h3>참고 문서</h3>

                <ul>
                  <li>
                    <a
                      href="https://tech.osci.kr/2023/03/20/state/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      State, 슬기롭게 관리 하기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tech.osci.kr/2022/07/13/react-query/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React-Query 도입을 위한 고민 (feat. Recoil)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <div className="space-y-2">
          <div>
            <StyledButton onClick={() => selectUserHandler()}>user 목록 조회</StyledButton>
          </div>
          <div>
            <StyledButton onClick={() => insertUserHandler()}>user 생성</StyledButton>
          </div>
        </div>
      </main>
    </>
  );
}
