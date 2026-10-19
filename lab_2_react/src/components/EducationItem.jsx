function EducationItem({ degree, year }) {
  return (
    <article className="rounded-md border border-slate-300 border-l-4 border-l-brand p-4 transition hover:scale-[1.01] hover:bg-slate-100">
      <h3 className="font-display text-lg font-bold">{degree}</h3>
      <p className="text-slate-700">
        НУЛП (Національний університет «Львівська політехніка»), {year}
      </p>
    </article>
  );
}

export default EducationItem;
