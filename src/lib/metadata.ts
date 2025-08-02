import type { Metadata } from 'next'

export function generateMetadata(
  title: string,
  description: string,
  path = '' // Fixed: removed type annotation
): Metadata {
  const url = `https://peteryelton.dev${path}`
  
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