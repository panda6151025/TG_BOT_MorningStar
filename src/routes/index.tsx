import { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'

const Onboarding = lazy(() => import('@/pages/Onboarding'))
const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))
const ConfirmOTP = lazy(() => import('@/pages/ConfirmOTP'))
const First = lazy(() => import('@/pages/First'))

const Routes = () => {
  const publicRoutes = [{ path: '/', element: <First /> }]
  const businessRoutes = [
    {
      path: '/Main',
      element: <Onboarding />,
    },
    {
      path: '/Task',
      element: <Login />,
    },
    {
      path: '/Buddy',
      element: <Register />,
    },
    {
      path: '/Dashboard',
      element: <ConfirmOTP />,
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
