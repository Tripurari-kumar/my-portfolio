import Link from 'next/link';
import React from 'react';

function Email() {
  return (
    <div className='email'>
      <Link href={'mailto:tripurarisingh159@gmail.com'} className='email-link'>
        tripurarisingh159@gmail.com
      </Link>
    </div>
  );
}

export default Email;
