import { gql } from "../../__generated__";

export const GET_ALL_BLOGS = gql(`
    query getAllBlogs {
        posts {
            id
            slug
            title
            excerpt
            coverImage {
                altText
                url
            }
        }
    }      
`)

export const GET_ALL_BLOGS_NEWEST = gql(`
  query GetNewtPosts {
    posts(orderBy: createdAt_ASC) {
      id
      slug
      excerpt
      title
      coverImage {
        altText
        url
      }
    }
  }
`)

export const GET_ALL_BLOGS_OLDEST = gql(`
  query GetOldestPosts {
    posts(orderBy: createdAt_DESC) {
      id
      slug
      excerpt
      title
      coverImage {
        altText
        url
      }
    }
  }
`)

export const GET_ALL_BLOGS_NAME_NEWEST = gql(`
  query GetNewNamePosts {
    posts(orderBy: title_ASC) {
      id
      slug
      excerpt
      title
      coverImage {
        altText
        url
      }
    }
  }
`)

export const GET_ALL_BLOGS_NAME_OLDEST = gql(`
  query GetOldestNamePosts {
    posts(orderBy: title_DESC) {
      id
      slug
      excerpt
      title
      coverImage {
        altText
        url
      }
    }
  }
`)


