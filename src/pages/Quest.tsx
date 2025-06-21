import { useEffect, useState } from "react";
import Card from "../components/base/Card";
import Sidebar from "../components/base/Sidebar";
import { SearchQuests, getQuestChallengesByMemberId } from "../apis/quest";
import { useNavigate } from "react-router-dom";
import type { QuestWithLikeResponse } from "../types/QuestWithLikeResponse";
import type { Page } from "../types/Page";
import type { QuestChallengeResponse } from "../types/QuestChallengeResponse";
import Button from "../components/base/Button";
import { useAuthStore } from "../store/useAuthStore";

function Quest() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quests, setQuests] = useState<QuestWithLikeResponse[]>([]);
  const [challengeQuests, setChallengeQuests] = useState<
    QuestChallengeResponse[] | null
  >(null);
  const { id } = useAuthStore();

  useEffect(() => {
    const fetchQuestList = async () => {
      setLoading(true);
      try {
        const response: Page<QuestWithLikeResponse> = await SearchQuests();
        setQuests(response.content);
      } catch (err: any) {
        setError(err.message);
        console.error("퀘스트 목록 가져오기 실패:", err);
      }
      setLoading(false);
    };
    fetchQuestList();
  }, []);

  // 진행중인 퀘스트 가져오기
  const handleShowInProgress = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getQuestChallengesByMemberId(
        Number(id),
        "IN_PROGRESS"
      );
      setChallengeQuests(data);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  // 완료된 퀘스트 가져오기
  const handleShowCompleted = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getQuestChallengesByMemberId(Number(id), "COMPLETED");
      setChallengeQuests(data);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  // 전체 퀘스트로 돌아가기
  const handleShowAll = () => {
    setChallengeQuests(null);
    setError("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar>
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="진행중인 퀘스트"
          onClick={handleShowInProgress}
        />
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="전체 퀘스트"
          onClick={handleShowAll}
        />
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="완료한 퀘스트"
          onClick={handleShowCompleted}
        />
      </Sidebar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
        {loading && <div>로딩 중...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {challengeQuests
          ? challengeQuests.map((quest) => (
              <Card
                key={quest.id}
                className="w-full h-80 flex flex-col justify-between bg-gradient-to-br from-slate-800 to-slate-700 shadow-xl border border-sky-700 hover:scale-105 transition-transform duration-200"
              >
                <div className="flex-1 flex flex-col justify-center items-center p-4">
                  <h3 className="text-xl font-bold text-sky-400 text-center mb-2 drop-shadow">
                    {quest.questTitle}
                  </h3>
                  <p className="text-base text-slate-200 mb-2 text-center line-clamp-2">
                    {quest.questDescription}
                  </p>
                  <div className="flex flex-col gap-1 mt-2 text-xs text-slate-400">
                    <span>
                      시작:{" "}
                      <span className="text-sky-300">
                        {quest.startedAt
                          ? new Date(quest.startedAt).toLocaleString()
                          : "-"}
                      </span>
                    </span>
                    <span>
                      종료:{" "}
                      <span className="text-sky-300">
                        {quest.endAt ? new Date(quest.endAt).toLocaleString() : "-"}
                      </span>
                    </span>
                  </div>
                </div>
              </Card>
            ))
          : quests.map((quest) => (
              <Card
                key={quest.id}
                className="w-full h-80 flex flex-col justify-between bg-gradient-to-br from-slate-800 to-slate-700 shadow-xl border border-sky-700 hover:scale-105 transition-transform duration-200"
              >
                <div className="flex-1 flex flex-col justify-center items-center p-4">
                  <h3 className="text-xl font-bold text-sky-400 text-center mb-2 drop-shadow">
                    {quest.title}
                  </h3>
                  <p className="text-base text-slate-200 mb-2 text-center line-clamp-2">
                    {quest.description}
                  </p>
                </div>
                <div className="p-2">
                  <button className="w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-2 rounded-lg shadow-md transition-colors duration-150">
                    퀘스트 시작
                  </button>
                </div>
              </Card>
            ))}
      </div>
    </div>
  );
}
export default Quest;
