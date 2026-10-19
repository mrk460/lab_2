const duties = [
  'моніторинг подій безпеки та виявлення підозрілої активності;',
  'аналіз і розслідування інцидентів інформаційної безпеки, реагування на них;',
  'пошук і оцінка вразливостей у системах та мережах, підготовка рекомендацій щодо їх усунення;',
  'аналіз журналів подій (логів) і виявлення потенційних загроз;',
  'підготовка звітів щодо стану безпеки та участь у покращенні процесів захисту даних.',
];

function Experience() {
  return (
    <section className="rounded-md border border-slate-300 bg-white p-6 shadow-md sm:px-7">
      <h2 className="mb-4 border-b-2 border-slate-300 pb-2 font-display text-xl font-bold">
        Досвід роботи
      </h2>
      <article className="rounded-md border border-slate-300 border-l-4 border-l-brand p-4 transition hover:scale-[1.01] hover:bg-slate-100">
        <h3 className="font-display text-lg font-bold">Security Analyst — Lifecell</h3>
        <p className="mb-2 text-sm text-slate-500">2023 — дотепер</p>
        <p className="mb-2 max-w-prose text-slate-700">
          Забезпечую інформаційну безпеку інфраструктури та сервісів компанії. Основні обов'язки:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-slate-700">
          {duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Experience;
