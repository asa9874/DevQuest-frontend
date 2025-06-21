export type QuestStatus = "READY" | "IN_PROGRESS" | "COMPLETED" | string;

export interface QuestChallengeResponse {
  id: number;
  questId: number;
  questTitle: string;
  questDescription: string;
  status: QuestStatus;
  questCreaterName: string;
  questCreaterId: number;
  memberName: string | null;
  memberId: number | null;
  startedAt: string;
  endAt: string;
}
