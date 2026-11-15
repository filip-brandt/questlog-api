import type { GameStatus } from '../types';

export type FilterValue = GameStatus | 'all';

interface StatusFilterProps {
  selectedStatus: FilterValue;
  onSelectStatus: (status: FilterValue) => void;
}

const FILTER_OPTIONS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Playing', value: 'playing' },
  { label: 'Want to play', value: 'want' },
  { label: 'Dropped', value: 'dropped' },
];

export default function StatusFilter({ selectedStatus, onSelectStatus }: StatusFilterProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-4 p-6 bg-[#171a21]">
      {FILTER_OPTIONS.map((option) => (
        <button
          type="button"
          key={option.value}
          onClick={() => onSelectStatus(option.value)}
          aria-pressed={selectedStatus === option.value}
          className={`font-bold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_#d946ef,0_0_30px_#d946ef] cursor-pointer transition ${
            selectedStatus === option.value
              ? 'bg-[#d946ef] text-white'
              : 'bg-[#22d3ee] text-black'
          }`}
        >
          {option.label}
        </button>
      ))}
    </nav>
  );
}