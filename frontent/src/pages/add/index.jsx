import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/navbar'

const Add = () => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Navbar/>
        <div className='input-add'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
    


        </div>
    </div>
  )
}

export default Add