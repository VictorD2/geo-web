import React, { ReactNode } from 'react';
import AppEmpty from '@shared/Table/app_empty';
import AppLoading from '@shared/Table/app_loading';

// Types
type AppTableProps = {
  columns: ReactNode;
  rows: ReactNode[];
  count: number;
  // selectable?: boolean;
  loading: boolean;
  heightLoading?: string;
  emptyMessage?: string;
};

// eslint-disable-next-line max-len, object-curly-newline
const AppTable = ({ columns, rows, count, emptyMessage, loading, heightLoading }: AppTableProps) => {
  return (
    <div className="w-24 min-w-full relative">
      <div
        className={`scrollbar-thin ${heightLoading} scrollbar-thumb-secondary scrollbar-track-gray-100 overflow-x-scroll relative`}
      >
        <table className="rounded-b-md min-w-full relative divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 left-0 z-50">{columns}</thead>
          <tbody className="bg-white divide-y divide-gray-200 tablaDatos">{count > 0 && rows}</tbody>
        </table>
        {count === 0 && loading && <AppEmpty message={emptyMessage} />}
      </div>
      {!loading && <AppLoading height={heightLoading} />}
    </div>
  );
};

AppTable.defaultProps = {
  emptyMessage: 'no records',
  heightLoading: 'h-[calc(80vh)]',
};

export default AppTable;
