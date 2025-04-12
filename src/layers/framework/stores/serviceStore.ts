import { create } from 'zustand';
import { MediaService } from '../../application/use-cases/MediaService';
import { UserService } from '../../application/use-cases/UserService';
import { UserUpdateFlowService } from '../../application/use-cases/UserUpdateFlowService';
import { mediaApi } from '../../adapter/api/mediaApi';
import { userApi } from '../../adapter/api/userApi';

const mediaService = new MediaService(mediaApi);
const userService = new UserService(userApi);
const flowService = new UserUpdateFlowService(mediaService, userService);

export const useServiceStore = create(() => ({ mediaService, userService, flowService }));
