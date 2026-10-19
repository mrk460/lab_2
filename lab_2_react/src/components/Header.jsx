function Header() {
  return (
    <header className="flex flex-col gap-2 rounded-md border-l-8 border-signal bg-ink p-8 text-white shadow-lg sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <h1 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
        Савчак Маркіян Адріанович
      </h1>
      <p className="text-lg tracking-wider text-slate-300">
        Middle cyber analyst of data
      </p>
    </header>
  );
}

export default Header;
