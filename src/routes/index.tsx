import React, { lazy, Suspense } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'

const Onboarding = lazy(() => import('@/pages/Onboarding'))
const Tasks = lazy(() => import('@/pages/Tasks'))
const Friends = lazy(() => import('@/pages/Friends'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
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
      <div className="h-[20vh]">
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
      path: '/Main',
      element: (
        <CenterLayout>
          <Onboarding />
        </CenterLayout>
      ),
    },
    {
      path: '/Tasks',
      element: (
        <CenterLayout>
          <Tasks />
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
      path: '/Dashboard',
      element: (
        <CenterLayout>
          <Dashboard />
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
