import { FormOutlined } from '@ant-design/icons'
import LayoutApp from '@/layout/LayoutApp'
import type { MyRouterObject } from '@/types/router'

const FormRouter: MyRouterObject[] = [
  {
    path: '/form',
    meta: {
      title: 'Form',
      key: 'form',
      icon: <FormOutlined />,
      index: 2,
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'validate',
        element: <div>Validate</div>,
      },
      {
        path: 'step',
        element: <div>Step</div>,
      },
    ],
  },
]

export default FormRouter
