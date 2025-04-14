import { useState } from 'react';
import Link from 'next/link';
import { useUsersQuery } from '../stores/userStore';

export function UserList() {
  const [keyword, setKeyword] = useState('');
  const { isLoading, data: users } = useUsersQuery({ search: keyword });

  return (
    <div className="my-2 space-y-2">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="[&_td]:p-1">
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/clean-architecture/${user.id}`}>상세</Link>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
