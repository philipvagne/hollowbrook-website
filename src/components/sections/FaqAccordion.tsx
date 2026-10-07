import { useId, useRef, useState, type KeyboardEvent } from "react";

type FaqItem = {
  answer: string;
  question: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1;
    const targets: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const target = targets[event.key];
    if (target === undefined) return;
    event.preventDefault();
    triggers.current[target]?.focus();
  }

  return (
    <div className="border-t border-utility-neutral">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-utility-neutral">
            <h2>
              <button
                ref={(node) => {
                  triggers.current[index] = node;
                }}
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold leading-snug tracking-[-0.015em] transition-colors duration-300 hover:text-olive/70 focus-visible:outline-offset-[-2px] sm:py-7 sm:text-xl"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[40rem] pb-7 pr-10 leading-7 text-olive/78">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
