import React from 'react'

function Home() {
  const routerCode = `const router = createBrowserRouter([
    {
      path:'/',
      element:<Layouts/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/account',
          element:<Acount/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])`;

  return (
    <div className='p-4'>
      React Router : 
      <div className="bg-black w-[50%] text-white p-4">
        <pre>
       {routerCode}
        </pre>
      </div>
    </div>
  )
}

export default Home
