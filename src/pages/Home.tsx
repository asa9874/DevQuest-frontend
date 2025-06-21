import Card from "../components/base/Card";

function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen ">
      <Card className="flex flex-col items-center justify-center h-[200px] w-[800px] mt-10">
        <h1 className="text-3xl font-bold mb-4">
          뭔가 있으면 좋을거같아서 넣은 상단 사각형
        </h1>
      </Card>
      <Card className="flex items-center gap-10 justify-center h-[400px] min-w-[1000px] mt-10 w-[80%]">
        {[...Array(5)].map((_, index) => (
                <Card key={index} className="w-60 h-full flex flex-col justify-between">
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
      </Card>
    </div>
  );
}
export default Home;
