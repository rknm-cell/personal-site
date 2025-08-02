import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

export function generateMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `https://your-domain.com${path}` // Replace with your domain
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
} 