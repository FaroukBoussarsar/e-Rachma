'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const Tabs = ({
  children,
  defaultValue,
}: {
  children: (props: { activeTab: string; setActiveTab: (value: string) => void }) => React.ReactNode;
  defaultValue: string;
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return <div>{children({ activeTab, setActiveTab })}</div>;
};

const TabsList = ({
  children,
  className,
  activeTab,
  setActiveTab,
}: {
  children: React.ReactNode;
  className?: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => (
  <div
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
  >
    {React.Children.map(children, (child) =>
      React.isValidElement<{ activeTab: string; setActiveTab: (value: string) => void }>(child)
        ? React.cloneElement(child, { activeTab, setActiveTab })
        : child
    )}
  </div>
);

const TabsTrigger = ({
  value,
  children,
  className,
  activeTab,
  setActiveTab,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => (
  <button
    onClick={() => setActiveTab(value)}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      activeTab === value
        ? 'bg-background text-foreground shadow-sm'
        : 'data-[state=inactive]:text-muted-foreground',
      className
    )}
  >
    {children}
  </button>
);

const TabsContent = ({
  value,
  children,
  className,
  activeTab,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  activeTab: string;
}) => {
  if (activeTab !== value) return null;

  return (
    <div
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
