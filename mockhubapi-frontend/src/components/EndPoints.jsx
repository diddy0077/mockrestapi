import React from 'react'
import { users,posts,todos } from '../data'
const EndPoints = () => {
  return (
    <section className='bg-white rounded-xl shadow-sm mt-4 p-4'>
        <div className=''>
        <h1 className='text-2xl font-semibold'>🔗 API Endpoints</h1>
        <p className='text-lg mt-2'>All endpoints are accessible under the /api route:</p>
      </div>
      
      {/* Users Endpoints Section */}
      <section className='mt-8'>
        <div>
          <h2 className='text-blue-700 text-xl font-semibold mb-4'>👥 Users</h2>
          <div className='space-y-3'>
            {users.map((u, index) => {
            return  <div key={index} className='hover:bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between transition-colors'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      u.method === 'GET' ? 'bg-green-100 text-green-800' :
                      u.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      u.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      u.method === 'PATCH' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {u.method}
                    </span>
                    <code className='text-sm font-mono text-gray-700'>{u.url}</code>
                  </div>
                  <p className='text-sm text-gray-600'>{u.description}</p>
                </div>
              <div className='flex items-center gap-1 bg-green-100 p-2 px-3 rounded-full'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-xs text-green-700 font-medium'>online</span>
              </div>
            </div>
          })}
          </div>
        </div>
      </section>

      {/* Posts Endpoints Section */}
      <section className='mt-8'>
        <div>
          <h2 className='text-purple-700 text-xl font-semibold mb-4'>📝 Posts</h2>
          <div className='space-y-3'>
            {posts.map((p, index) => {
            return  <div key={index} className='hover:bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between transition-colors'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      p.method === 'GET' ? 'bg-green-100 text-green-800' :
                      p.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      p.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      p.method === 'PATCH' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {p.method}
                    </span>
                    <code className='text-sm font-mono text-gray-700'>{p.url}</code>
                  </div>
                  <p className='text-sm text-gray-600'>{p.description}</p>
                </div>
              <div className='flex items-center gap-1 bg-green-100 p-2 px-3 rounded-full'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-xs text-green-700 font-medium'>online</span>
              </div>
            </div>
          })}
          </div>
        </div>
      </section>

      {/* Todos Endpoints Section */}
      <section className='mt-8'>
        <div>
          <h2 className='text-orange-700 text-xl font-semibold mb-4'>✅ Todos</h2>
          <div className='space-y-3'>
            {todos.map((t, index) => {
            return  <div key={index} className='hover:bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between transition-colors'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      t.method === 'GET' ? 'bg-green-100 text-green-800' :
                      t.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      t.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      t.method === 'PATCH' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {t.method}
                    </span>
                    <code className='text-sm font-mono text-gray-700'>{t.url}</code>
                  </div>
                  <p className='text-sm text-gray-600'>{t.description}</p>
                </div>
              <div className='flex items-center gap-1 bg-green-100 p-2 px-3 rounded-full'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-xs text-green-700 font-medium'>online</span>
              </div>
            </div>
          })}
          </div>
        </div>
      </section>
      </section>
  )
}

export default EndPoints