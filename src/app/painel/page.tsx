import Link from 'next/link';
import Image from 'next/image';

const SidebarLink = ({ href, children }) => (
  <Link href={href}>
    <div>
      {children}
    </div>
  </Link>
);

const Layout = ({ children }) => (
  <div className='flex'>
    <div className='w-[20vw] mx-auto text-center'>
      <SidebarLink href="/painel/profile">
        <div>
          <Image src="/images/myprofile.svg" alt="Next.js Logo" width={25} height={25} />
          <p>My profile</p>
          <hr />
        </div>
      </SidebarLink>
      <SidebarLink href="/painel/posts">
        <div>
        <Image src="/images/myposts.svg" alt="Next.js Logo" width={25} height={25} />
        <p>My Posts</p>
        <hr />
        </div>
      </SidebarLink>
      <SidebarLink href="/painel/friends">
        <div>
          <Image src="/images/friends.svg" alt="Next.js Logo" width={25} height={25} />
          <p>My friends</p>          
        </div>
      </SidebarLink>
    </div>
    <div className='w-[80vw]'>      
      {children}
    </div>
  </div>
);

export default Layout;
