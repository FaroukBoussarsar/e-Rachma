'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

// Helper function to get initials from a name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  fallbackName?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, fallbackName, children, ...props }, ref) => {
    const [showFallback, setShowFallback] = React.useState(false);
    
    const handleStatusChange = React.useCallback((status: 'loading' | 'loaded' | 'error') => {
      setShowFallback(status === 'error');
    }, []);

    // Clone children to pass the status change handler
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === AvatarImage) {
        return React.cloneElement(child as React.ReactElement<any>, {
          onLoadingStatusChange: handleStatusChange
        });
      }
      return child;
    });

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
          className
        )}
        {...props}
      >
        {childrenWithProps}
        {(showFallback || !React.Children.toArray(children).some(child => 
          React.isValidElement(child) && child.type === AvatarImage
        )) && fallbackName && (
          <AvatarFallback>
            {getInitials(fallbackName)}
          </AvatarFallback>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & { onLoadingStatusChange?: (status: 'loading' | 'loaded' | 'error') => void }
>(({ className, alt = "", onLoadingStatusChange, ...props }, ref) => {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  React.useEffect(() => {
    if (onLoadingStatusChange) onLoadingStatusChange(status);
  }, [onLoadingStatusChange, status]);

  return (
    <img
      ref={ref}
      className={cn('aspect-square h-full w-full object-cover', className)}
      alt={alt}
      onLoad={() => setStatus('loaded')}
      onError={() => setStatus('error')}
      {...props}
    />
  );
});
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute inset-0 flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-medium',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
