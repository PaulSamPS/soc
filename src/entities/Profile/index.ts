export { IProfile, ProfileSchema } from './model/types/profile';

export { profileReducer, profileActions } from './model/slice/profile.slice';

export { fetchProfileData } from './model/services/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
