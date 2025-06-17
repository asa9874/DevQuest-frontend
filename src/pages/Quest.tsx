import Card from "../components/base/Card";
import Sidebar from "../components/base/Sidebar";

function Quest() {
    return (
        <Sidebar className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {[...Array(50)].map((_, index) => (
                <Card key={index} className="w-60 h-80 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-sky-400 text-center">퀘스트 이름</h3>
                        <p className="text-sm text-slate-300 mt-2 text-center">
                            대충 설명 점점점
                        </p>
                    </div>
                    <button className="mt-4 w-full bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold py-2 rounded-lg ">
                        퀘스트 시작
                    </button>
                </Card>
            ))}
        </Sidebar>
    );
}
export default Quest;