'use client';

import dynamic from 'next/dynamic'

const Temp2 = dynamic(() => import('./temp'), {
    ssr: false,
})


const Temp = () => {


return <>
<Temp2/>
</>
};


export { Temp as default}