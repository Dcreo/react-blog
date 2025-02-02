/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as AdminIndexImport } from './routes/admin/index'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  id: '/admin/',
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsRoute
  '/admin': typeof AdminIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsRoute
  '/admin': typeof AdminIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsRoute
  '/admin/': typeof AdminIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/posts' | '/admin'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/posts' | '/admin'
  id: '__root__' | '/' | '/about' | '/posts' | '/admin/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  PostsRoute: typeof PostsRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  PostsRoute: PostsRoute,
  AdminIndexRoute: AdminIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/posts",
        "/admin/"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/posts": {
      "filePath": "posts.jsx"
    },
    "/admin/": {
      "filePath": "admin/index.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
