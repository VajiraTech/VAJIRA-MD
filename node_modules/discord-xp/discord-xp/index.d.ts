// Type definitions for discord-xp v1.1.8
// Project: https://github.com/MrAugu/discord-xp
// Definitions by: Nico Finkernagel <https://github.com/gruselhaus/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Client } from "discord.js";

type User = {
  userID: string;
  guildID: string;
  xp: number;
  level: number;
  lastUpdated: Date;
  cleanXp: number;
  cleanNextLevelXp: number;
};

type LeaderboardUser = {
  guildID: string;
  userID: string;
  xp: number;
  level: number;
  position: number;
  username: String | null;
  discriminator: String | null;
};

declare module "discord-xp" {
  export default class DiscordXp {
    static async setURL(dbURL: string): Promise<typeof import("mongoose")>;
    static async createUser(userId: string, guildId: string): Promise<User>;
    static async deleteUser(userId: string, guildId: string): Promise<User>;
    static async appendXp(userId: string, guildId: string, xp: number): Promise<boolean>;
    static async appendLevel(userId: string, guildId: string, levels: number): Promise<User>;
    static async setXp(userId: string, guildId: string, xp: number): Promise<User>;
    static async setLevel(userId: string, guildId: string, level: number): Promise<User>;
    static async fetch(userId: string, guildId: string, fetchPosition = false): Promise<User>;
    static async subtractXp(userId: string, guildId: string, xp: number): Promise<User>;
    static async subtractLevel(userId: string, guildId: string, level: number): Promise<User>;
    static async fetchLeaderboard(guildId: String, limit: number): Promise<User[] | []>;
    static async computeLeaderboard(client: Client, leaderboard: User[], fetchUsers = false): Promise<LeaderboardUser[] | []>;
    static xpFor(targetLevel: number): number;
  }
}
