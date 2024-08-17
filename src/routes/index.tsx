import React, { lazy, Suspense } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'

const Barse = lazy(() => import('@/pages/Barse'))
const Mining = lazy(() => import('@/pages/Mining'))
const Friends = lazy(() => import('@/pages/Friends'))
const Playground = lazy(() => import('@/pages/Playground'))
const AirDrop = lazy(() => import('@/pages/AirDrop'))
const Aufugaben = lazy(() => import('@/pages/Aufugaben'))

const First = lazy(() => import('@/pages/First'))
const Footer = lazy(() => import('@/components/Layout/Footer'))
type LayoutProps = {
  children: React.ReactNode
}

const FullScreenLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="w-full h-screen">{children}</div>
}

const CenterLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-grow h-[80vh] w-[100%]">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

const Routes: React.FC = () => {
  const publicRoutes: RouteObject[] = [
    {
      path: '/',
      element: (
        <FullScreenLayout>
          <First />
        </FullScreenLayout>
      ),
    },
  ]

  const businessRoutes: RouteObject[] = [
    {
      path: '/Barse',
      element: (
        <CenterLayout>
          <Barse />
        </CenterLayout>
      ),
    },
    {
      path: '/Mining',
      element: (
        <CenterLayout>
          <Mining />
        </CenterLayout>
      ),
    },
    {
      path: '/Playground',
      element: (
        <CenterLayout>
          <Playground />
        </CenterLayout>
      ),
    },
    {
      path: '/Friends',
      element: (
        <CenterLayout>
          <Friends />
        </CenterLayout>
      ),
    },
    {
      path: '/Aufugaben',
      element: (
        <CenterLayout>
          <Aufugaben />
        </CenterLayout>
      ),
    },
    {
      path: '/AirDrop',
      element: (
        <CenterLayout>
          <AirDrop />
        </CenterLayout>
      ),
    },
  ]

  const router = createBrowserRouter([...publicRoutes, ...businessRoutes])

  return (
    <Suspense fallback={<LazyLoad />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Routes
