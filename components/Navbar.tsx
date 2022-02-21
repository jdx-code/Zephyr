import React from 'react'
import { Transition } from '@headlessui/react' // smooth traasition between tabs
import { Link } from 'react-scroll' // Alternative for tag in netjs we use link

function Navbar() {
  return (
    <div>
        <nav className='px-4 py-4 bg-purple-800 text-white'>
            <ul className='flex'> {/* ul is flexbox because we want navbar in horizontal */}
                <li className='mx-2 cursor-pointer hover:bg-purple-500 rounded'>Home</li>
                <li className='mx-2 cursor-pointer hover:bg-purple-500 rounded'>About</li>
                <li className='mx-2 cursor-pointer hover:bg-purple-500 rounded'>Services</li>
                <li className='mx-2 cursor-pointer hover:bg-purple-500 rounded'>Career
                    <div className='hidden flex flex-col rounded mt-1 p-2 text-sm w-30'>
                        <ul className=''>
                            <li className='px-2 py-2 hover:bg-purple-500 rounded'>
                            Job Opportunities
                            </li>
                            <li className='px-2 py-2 hover:bg-purple-500 rounded'>
                            Training Placements
                            </li>
                        </ul>
                    </div>
                    
                </li>
                <li className='mx-2 cursor-pointer hover:bg-purple-500 rounded'>Contact</li>
            </ul>

        </nav>

    </div>
  )
}

export default Navbar