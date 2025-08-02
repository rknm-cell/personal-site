import { useState, useEffect } from 'react';
import { isMobileDevice } from './utils';
import { fetchRSSFeed } from './utils'
import type { RSSFeedData } from '~/types'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (isMobileDevice()) return;

    const observerOptions = {
      rootMargin: '-10% 0px -50% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      let maxIntersectionRatio = 0;
      let mostVisibleSection = '';

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectionRatio = entry.intersectionRatio;
          if (intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = intersectionRatio;
            mostVisibleSection = entry.target.getAttribute('id') ?? '';
          }
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(isMobileDevice());
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export function useRSSFeed(url: string) {
  const [data, setData] = useState<RSSFeedData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadRSSFeed() {
      try {
        setLoading(true)
        setError(null)
        const feedData = await fetchRSSFeed(url)
        setData(feedData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load RSS feed')
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      void loadRSSFeed()
    }
  }, [url])

  return { data, loading, error }
} 