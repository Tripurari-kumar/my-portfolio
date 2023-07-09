import Link from 'next/link';
import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi';

function SocialIcons() {
  const socialLinks = [
    {
      name: 'Github',
      icon: <FiGithub />,
      link: 'https://github.com/Tripurari-kumar',
    },
    {
      name: 'Linkdin',
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/tripurari-kumar-271457191',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      link: 'https://twitter.com/tripurari34',
    },
    {
      name: 'FaceBook',
      icon: <FiFacebook />,
      link: 'https://www.facebook.com/profile.php?id=100008815894377',
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      link: 'https://instagram.com/tripurari._.singh_?igshid=OGQ5ZDc2ODk2ZA==',
    },
  ];
  return (
    <div className='social-icons'>
      <ul className='social-icons-list'>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className='social-icons-list-item'>
            <Link
              href={link}
              className='social-icons-list-item-link'
              target='_blank'
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
