import { avatarColors } from "@/constants/avatarColors";

export const getRandomAvatarColor = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
};
