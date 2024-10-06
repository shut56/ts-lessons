import { FC, memo, PropsWithChildren } from 'react';

type DateViewerProps = {
  description?: string;
};

const DateViewerBase: FC<PropsWithChildren<DateViewerProps>> = ({
  description,
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '8px',
        margin: '8px',
      }}
    >
      <div>{new Date().toISOString().slice(0, 10)}</div>
      <div>{description}</div>
      <div>{children}</div>
    </div>
  );
};

export const DateViewer = memo(DateViewerBase);
