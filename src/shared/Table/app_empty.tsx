import React, { InboxIcon } from '@heroicons/react/24/outline';

type AppEmptyProps = {
  message?: string;
};

const AppEmpty = ({ message }: AppEmptyProps) => {
  return (
    <div className="flex flex-row justify-center items-center p-20 uppercase">
      <div className="flex flex-col gap-4 justify-center items-center">
        <InboxIcon className="w-16" />
        <span>{message}</span>
      </div>
    </div>
  );
};

AppEmpty.defaultProps = {
  message: 'no record',
};

export default AppEmpty;
