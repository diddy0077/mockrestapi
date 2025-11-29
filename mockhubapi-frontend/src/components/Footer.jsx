import React from 'react'
import rocket from '../assets/rocket.png'

const Footer = () => {
  return (
    <footer className='bg-blue-600 border-t border-blue-600 mt-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          {/* Logo and Description */}
          <div className='flex items-center space-x-3'>
            <img src={rocket} alt="logo"  className='w-10 h-10'/>
            <div>
              <h3 className='text-lg font-semibold text-white'>MockHub API</h3>
              <p className='text-sm text-blue-100'>Mock REST API for development & testing</p>
            </div>
          </div>

          {/* API Info */}
          <div className='flex items-center space-x-6 text-sm text-white'>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-green-300 rounded-full animate-pulse'></div>
              <span>API v1.0</span>
            </div>
            <div className='flex items-center space-x-1'>
              <span>Status:</span>
              <span className='text-green-300 font-medium'>Operational</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 pt-6 border-t border-blue-400 flex flex-col sm:flex-row justify-between items-center text-sm text-blue-100'>
          <div>
            © 2025 MockHub. All rights reserved.
          </div>
          <div className='flex items-center space-x-4 mt-2 sm:mt-0'>
            <span>Built for developers</span>
            <span>•</span>
            <span>Fast • Reliable • Free</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer