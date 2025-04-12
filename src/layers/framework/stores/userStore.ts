import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useServiceStore } from './serviceStore';

export const useUsersQuery = (params?: { search?: string }) => {
  const { userService } = useServiceStore();
  return useQuery({
    queryKey: ['users', params],
    queryFn: () => userService.getUsers(params),
    onError: () => {
      console.error('사용자 목록을 불러오는데 실패했습니다.');
    },
  });
};

export const useUserQuery = (id: number) => {
  const { userService } = useServiceStore();
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userService.getUser(id),
    onError: () => {
      console.error('사용자 정보를 불러오는데 실패했습니다.');
    },
  });
};

export const useCreateUser = () => {
  const { userService } = useServiceStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userService.createUser.bind(userService),
    onSuccess: () => {
      console.log('사용자가 성공적으로 생성되었습니다.');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error: Error) => {
      console.error(error.message || '사용자 생성에 실패했습니다.');
    },
  });
};

export const useUpdateUser = () => {
  const { flowService } = useServiceStore();
  const queryClient = useQueryClient();
  return useMutation({
    // @ts-expect-error
    mutationFn: flowService.updateUserWithImage.bind(flowService),
    onSuccess: (_, updatedUser) => {
      console.log('사용자 정보가 업데이트되었습니다.');
      queryClient.invalidateQueries(['users']);
      queryClient.invalidateQueries([
        'user',
        // @ts-expect-error
        updatedUser.id,
      ]);
    },
    onError: () => {
      console.error('사용자 정보 업데이트에 실패했습니다.');
    },
  });
};
