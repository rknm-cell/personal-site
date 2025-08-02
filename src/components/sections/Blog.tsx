"use client";

import { Section } from '~/components/ui/Section';
import { Button } from '~/components/ui/Button';
import { AnimatedSection } from '~/components/ui/AnimatedSection';
import { Card } from '~/components/ui/Card';
import { LoadingSpinner } from '~/components/ui/LoadingSpinner';
import { useRSSFeed } from '~/lib/hooks';
import { formatDate } from '~/lib/utils';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

const RSS_FEED_URL = 'https://peter-yelton.vercel.app/rss';

export function Blog() {
  const { data, loading, error } = useRSSFeed(RSS_FEED_URL);

  return (
    <Section id="blog" className="bg-isabelline-500">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timberwolf-100 mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-timberwolf-200 max-w-2xl mx-auto">
            Thoughts on design, development, and the intersection of AI with creative work
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-timberwolf-100 mb-2">
                Unable to Load Blog Posts
              </h3>
              <p className="text-timberwolf-200 mb-6">
                {error}
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://peter-yelton.vercel.app', '_blank')}
              >
                Visit Blog
              </Button>
            </div>
          </div>
        )}

        {data && data.items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.items.slice(0, 6).map((post, index) => (
              <Card key={`${post.title}-${post.pubDate}-${index}`} className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-timberwolf-300 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.pubDate)}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-timberwolf-100 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-timberwolf-200 mb-4 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(post.link, '_blank')}
                      className="w-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {data && data.items.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-timberwolf-100 mb-2">
                No Posts Available
              </h3>
              <p className="text-timberwolf-200 mb-6">
                No blog posts are currently available from the RSS feed.
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://peter-yelton.vercel.app', '_blank')}
              >
                Visit Blog
              </Button>
            </div>
          </div>
        )}

        {data && data.items.length > 6 && (
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => window.open('https://peter-yelton.vercel.app', '_blank')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </div>
        )}
      </AnimatedSection>
    </Section>
  );
} 