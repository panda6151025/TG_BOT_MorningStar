import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import taskimg from '@/assets/images/taskimg.png'
import farmimg from '@/assets/images/farmingimg.png'
import friendimg from '@/assets/images/friendimg.png'
import dashboardimg from '@/assets/images/dashboardimg.png'

interface FooterItem {
  id: string
  image: string
  label: string
  path: string
}

const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('')
  const navigate = useNavigate()

  const footerItems: FooterItem[] = [
    {
      id: 'Farming',
      image: farmimg,
      label: 'Farming',
      path: '/Main',
    },
    {
      id: 'Tasks',
      image: taskimg,
      label: 'Tasks',
      path: '/Tasks',
    },
    {
      id: 'Friends',
      image: friendimg,
      label: 'Friends',
      path: '/Friends',
    },
    {
      id: 'Dashboard',
      image: dashboardimg,
      label: 'Dashboard',
      path: '/Dashboard',
    },
  ]

  const handleNavigation = (path: string, tab: string) => {
    setActiveTab(tab)
    navigate(path)
  }

  return (
    <div className="h-[20vh] flex justify-around pt-4 pb-2 pl-2 pr-2">
      {footerItems.map((item) => (
        <div
          key={item.id}
          className={`h-[80%] w-[23%] flex flex-col justify-center items-center border-2 cursor-pointer rounded-2xl ${
            activeTab === item.id ? 'border-indigo-200' : 'border-dashed'
          }`}
          onClick={() => handleNavigation(item.path, item.id)}
        >
          <img src={item.image} className="h-[50%] w-[60%]" alt={item.label} />
          <span className="text-sm text-white">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Footer
