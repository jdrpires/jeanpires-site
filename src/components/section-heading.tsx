type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
