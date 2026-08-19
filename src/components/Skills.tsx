import { skills } from '../data/site'

export function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[var(--border)]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-h)] mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)] mb-3">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-[var(--text-h)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
