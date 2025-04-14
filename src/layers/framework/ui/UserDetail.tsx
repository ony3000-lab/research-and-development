import { useRouter } from 'next/router';
import { useUserQuery } from '../stores/userStore';

export function UserDetail() {
  const router = useRouter();
  const userId = Number(router.query.id);
  const { isLoading, data: userDetail } = useUserQuery(userId);

  if (isLoading) return <p>Loading...</p>;
  if (!userDetail) return <p>사용자를 찾을 수 없습니다.</p>;

  return (
    <div className="my-2 space-y-2">
      <h2>사용자 상세 정보</h2>
      <p>이름: {userDetail.name}</p>
      <p>이메일: {userDetail.email}</p>
      {userDetail.contact && <p>연락처: {userDetail.contact}</p>}
      {userDetail.createdAt && <p>생성 시각: {new Date(userDetail.createdAt).toLocaleString()}</p>}
      {userDetail.profileImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={userDetail.profileImageUrl}
          alt={`${userDetail.name} avatar`}
        />
      )}
    </div>
  );
}
