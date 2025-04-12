import { useState } from 'react';
import { useUsersQuery } from '../stores/userStore';

export function UserList() {
  const [keyword, setKeyword] = useState('');
  const { isLoading, data: users } = useUsersQuery({ search: keyword });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
