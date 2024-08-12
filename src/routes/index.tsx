import React, { lazy, Suspense } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'

const Onboarding = lazy(() => import('@/pages/Onboarding'))
const Login = lazy(() => import('@/pages/Tasks'))
const Register = lazy(() => import('@/pages/Register'))
const ConfirmOTP = lazy(() => import('@/pages/ConfirmOTP'))
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
          <Login />
        </CenterLayout>
      ),
    },
    {
      path: '/Friends',
      element: (
        <CenterLayout>
          <Register />
        </CenterLayout>
      ),
    },
    {
      path: '/Dashboard',
      element: (
        <CenterLayout>
          <ConfirmOTP />
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
