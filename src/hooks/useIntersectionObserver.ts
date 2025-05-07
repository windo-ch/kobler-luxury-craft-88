
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends Element>(
  options: UseIntersectionObserverOptions = {},
): [RefObject<T>, boolean] => {
  const { root = null, rootMargin = '0px', threshold = 0, triggerOnce = false } = options;
  
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If triggered once and is intersecting, disconnect the observer
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isIntersecting];
};

// For convenience - this exports the hook as a named function
export const useInView = useIntersectionObserver;
