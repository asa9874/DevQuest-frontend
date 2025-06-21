import { useEffect, useState } from "react";
import Card from "../components/base/Card";
import Sidebar from "../components/base/Sidebar";
import { SearchQuests } from "../apis/quest";
import { useNavigate } from "react-router-dom";
import type { QuestWithLikeResponse } from "../types/QuestWithLikeResponse";
import type { Page } from "../types/Page";
import Button from "../components/base/Button";

function Quest() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quests, setQuests] = useState<QuestWithLikeResponse[]>([]);

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

  

  return (
    <div className="flex h-screen">
      <Sidebar>
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="진행중인 퀘스트"
        />
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="완료된 퀘스트"
        />
        <Button
          className="w-full h-16"
          color="bg-slate-600 hover:bg-slate-500"
          label="새 퀘스트"
        />
      </Sidebar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
        {loading && <div>로딩 중...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {quests.map((quest) => (
          <Card
            key={quest.id}
            className="w-full h-80 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-sky-400 text-center">
                {quest.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 text-center">
                {quest.description}
              </p>
            </div>
            <button className="mt-4 w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-2 rounded-lg ">
              퀘스트 시작
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Quest;
