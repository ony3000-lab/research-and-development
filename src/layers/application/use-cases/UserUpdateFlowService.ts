import type { UserDetail } from '../../domain/User';
import { MediaService } from './MediaService';
import { UserService } from './UserService';

export class UserUpdateFlowService {
  constructor(private mediaService: MediaService, private userService: UserService) {}

  async updateUserWithImage(userDetail: UserDetail, file?: File) {
    let profileImageUrl: string | undefined;
    if (file) {
      profileImageUrl = await this.mediaService.uploadFile(file);
    }
    return this.userService.updateUser({
      ...userDetail,
      profileImageUrl,
    });
  }
}
