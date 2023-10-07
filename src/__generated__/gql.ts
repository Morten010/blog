/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        query getHero {\n            posts(orderBy: createdAt_DESC, first: 1) {\n            id\n            title\n            slug\n            coverImage {\n                altText\n                url\n            }\n            }\n        }      \n    ": types.GetHeroDocument,
    "\n    query getAllBlogs {\n        posts {\n            id\n            slug\n            title\n            excerpt\n            coverImage {\n                altText\n                url\n            }\n        }\n    }      \n": types.GetAllBlogsDocument,
    "\n  query GetNewtPosts {\n    posts(orderBy: createdAt_ASC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n": types.GetNewtPostsDocument,
    "\n  query GetOldestPosts {\n    posts(orderBy: createdAt_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n": types.GetOldestPostsDocument,
    "\n  query GetNewNamePosts {\n    posts(orderBy: title_ASC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n": types.GetNewNamePostsDocument,
    "\n  query GetOldestNamePosts {\n    posts(orderBy: title_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n": types.GetOldestNamePostsDocument,
    "\n        query getTeam {\n            authors {\n            id\n            name\n            stage\n            title\n            picture {\n                altText\n                url\n            }\n            }\n        }           \n    ": types.GetTeamDocument,
    "\n        query getAuthor($id: ID!) {\n            author(where: {id: $id}) {\n                id\n                name\n                title\n                picture {\n                    altText\n                    url\n                }\n                posts {\n                    excerpt\n                    id\n                    slug\n                    title\n                    coverImage {\n                    altText\n                    url\n                    }\n                }\n            }\n        }      \n    ": types.GetAuthorDocument,
    "\n        query getPosts($slug: String!) {\n            post(where: {slug: $slug}) {\n            content {\n                markdown\n            }\n            author {\n                id\n                name\n            }\n            date\n            excerpt\n            publishedAt\n            stage\n            title\n                coverImage {\n                    altText\n                    url\n                }\n            }\n        }\n    ": types.GetPostsDocument,
    "\n  query GetNewestPosts {\n    posts(first: 3, orderBy: createdAt_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n": types.GetNewestPostsDocument,
    "\n        query getPages($slug: String!) {\n            page(where: {slug: $slug}) {\n                slug\n                subtitle\n                title\n                updatedAt\n                publishedAt\n                id\n                content {\n                    markdown\n                }\n            }\n        }\n    ": types.GetPagesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query getHero {\n            posts(orderBy: createdAt_DESC, first: 1) {\n            id\n            title\n            slug\n            coverImage {\n                altText\n                url\n            }\n            }\n        }      \n    "): (typeof documents)["\n        query getHero {\n            posts(orderBy: createdAt_DESC, first: 1) {\n            id\n            title\n            slug\n            coverImage {\n                altText\n                url\n            }\n            }\n        }      \n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query getAllBlogs {\n        posts {\n            id\n            slug\n            title\n            excerpt\n            coverImage {\n                altText\n                url\n            }\n        }\n    }      \n"): (typeof documents)["\n    query getAllBlogs {\n        posts {\n            id\n            slug\n            title\n            excerpt\n            coverImage {\n                altText\n                url\n            }\n        }\n    }      \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetNewtPosts {\n    posts(orderBy: createdAt_ASC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNewtPosts {\n    posts(orderBy: createdAt_ASC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOldestPosts {\n    posts(orderBy: createdAt_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOldestPosts {\n    posts(orderBy: createdAt_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetNewNamePosts {\n    posts(orderBy: title_ASC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNewNamePosts {\n    posts(orderBy: title_ASC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOldestNamePosts {\n    posts(orderBy: title_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOldestNamePosts {\n    posts(orderBy: title_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query getTeam {\n            authors {\n            id\n            name\n            stage\n            title\n            picture {\n                altText\n                url\n            }\n            }\n        }           \n    "): (typeof documents)["\n        query getTeam {\n            authors {\n            id\n            name\n            stage\n            title\n            picture {\n                altText\n                url\n            }\n            }\n        }           \n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query getAuthor($id: ID!) {\n            author(where: {id: $id}) {\n                id\n                name\n                title\n                picture {\n                    altText\n                    url\n                }\n                posts {\n                    excerpt\n                    id\n                    slug\n                    title\n                    coverImage {\n                    altText\n                    url\n                    }\n                }\n            }\n        }      \n    "): (typeof documents)["\n        query getAuthor($id: ID!) {\n            author(where: {id: $id}) {\n                id\n                name\n                title\n                picture {\n                    altText\n                    url\n                }\n                posts {\n                    excerpt\n                    id\n                    slug\n                    title\n                    coverImage {\n                    altText\n                    url\n                    }\n                }\n            }\n        }      \n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query getPosts($slug: String!) {\n            post(where: {slug: $slug}) {\n            content {\n                markdown\n            }\n            author {\n                id\n                name\n            }\n            date\n            excerpt\n            publishedAt\n            stage\n            title\n                coverImage {\n                    altText\n                    url\n                }\n            }\n        }\n    "): (typeof documents)["\n        query getPosts($slug: String!) {\n            post(where: {slug: $slug}) {\n            content {\n                markdown\n            }\n            author {\n                id\n                name\n            }\n            date\n            excerpt\n            publishedAt\n            stage\n            title\n                coverImage {\n                    altText\n                    url\n                }\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetNewestPosts {\n    posts(first: 3, orderBy: createdAt_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNewestPosts {\n    posts(first: 3, orderBy: createdAt_DESC) {\n      id\n      slug\n      excerpt\n      title\n      coverImage {\n        altText\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query getPages($slug: String!) {\n            page(where: {slug: $slug}) {\n                slug\n                subtitle\n                title\n                updatedAt\n                publishedAt\n                id\n                content {\n                    markdown\n                }\n            }\n        }\n    "): (typeof documents)["\n        query getPages($slug: String!) {\n            page(where: {slug: $slug}) {\n                slug\n                subtitle\n                title\n                updatedAt\n                publishedAt\n                id\n                content {\n                    markdown\n                }\n            }\n        }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;