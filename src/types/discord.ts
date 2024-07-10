export type UserNameErrorType = 'Valid' | 'Invalid' | 'Duplicate' | 'Available';

export interface DiscordFormValues {
  discordUsername: string;
  discordNickname: string;
  code: string;
}
