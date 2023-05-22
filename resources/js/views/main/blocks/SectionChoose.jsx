export default function SectionChoose() {
  return (
    <>
      <div className="flex justify-evenly my-40">
        <a href="#course-list">
          <div className="h-48 w-48 bg-gray-600 text-center align-middle">
            <strong className="">Курсы</strong>
          </div>
        </a>
        <a href="/about">
          <div className="h-48 w-48 bg-white rounded-full text-center">
            <strong className="absolute left-auto">Я режиссёр</strong>
            <div className="h-16 w-16 bg-slate-600 rounded-full"></div>
          </div>
        </a>
      </div>
    </>
  );
}
