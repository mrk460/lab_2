import EducationItem from './EducationItem';

const items = [
  { degree: 'Магістр кібербезпеки', year: '2023' },
  { degree: 'Бакалавр кібербезпеки', year: '2021' },
];

function Education() {
  return (
    <section className="rounded-md border border-slate-300 bg-white p-6 shadow-md sm:px-7">
      <h2 className="mb-4 border-b-2 border-slate-300 pb-2 font-display text-xl font-bold">
        Освіта
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <EducationItem key={item.degree} degree={item.degree} year={item.year} />
        ))}
      </div>
    </section>
  );
}

export default Education;
