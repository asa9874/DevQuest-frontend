import type { QuestWithLikeResponse } from "../types/QuestWithLikeResponse";
import type { Page } from "../types/Page";
import apiClient from "./apiClient";
import type { QuestChallengeResponse } from "../types/QuestChallengeResponse";

export type QuestSearchParams = {
  title?: string;
  creatorName?: string;
  page?: number;
  size?: number;
};

export async function SearchQuests(params?: QuestSearchParams): Promise<Page<QuestWithLikeResponse>> {
    try {
        const { page = 0, size = 10, ...rest } = params || {};
        const response = await apiClient.get(`/quests/search`, {
            params: { page, size, ...rest }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getQuestChallengesByMemberId(
  memberId: number,
  status: string = "IN_PROGRESS",
  title?: string,
  page: number = 0,
  size: number = 10
): Promise<QuestChallengeResponse[]> {
  try {
    const response = await apiClient.get(
      `/quests/challenges/member/${memberId}`,
      {
        params: { status, title, page, size },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

