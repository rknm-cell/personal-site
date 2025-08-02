import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { RSSFeedData, RSSFeedItem } from "~/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export async function fetchRSSFeed(url: string): Promise<RSSFeedData | null> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`)
    }
    
    const text = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(text, 'text/xml')
    
    const channel = xmlDoc.querySelector('channel')
    if (!channel) {
      throw new Error('No channel element found in RSS feed')
    }
    
    const title = channel.querySelector('title')?.textContent ?? ''
    const description = channel.querySelector('description')?.textContent ?? ''
    const link = channel.querySelector('link')?.textContent ?? ''
    
    const items: RSSFeedItem[] = []
    const itemElements = channel.querySelectorAll('item')
    
    itemElements.forEach((item) => {
      const itemTitle = item.querySelector('title')?.textContent ?? ''
      const itemLink = item.querySelector('link')?.textContent ?? ''
      const itemDescription = item.querySelector('description')?.textContent ?? ''
      const itemPubDate = item.querySelector('pubDate')?.textContent ?? ''
      const itemGuid = item.querySelector('guid')?.textContent ?? ''
      
      items.push({
        title: itemTitle,
        link: itemLink,
        description: itemDescription,
        pubDate: itemPubDate,
        guid: itemGuid
      })
    })
    
    return {
      title,
      description,
      link,
      items
    }
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return null
  }
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return window.innerWidth <= 768;
}
