import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        margin: '8px',
        padding: '8px',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: 'lightblue',
        color: 'blue',
      }}
    >
      {children ?? (
        <span style={{ color: 'gray', opacity: 0.3 }}>No content</span>
      )}
    </div>
  );
};
