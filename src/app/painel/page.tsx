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
  <div className='sm:flex'>
    <div className='sm:w-[20vw] mx-auto text-center flex sm:flex-col justify-around sm:justify-between sm:h-[40vh] mb-3'>
      <SidebarLink href="/painel/profile">
        <div>
          <Image src="/images/myprofile.svg" alt="Next.js Logo" width={25} height={25} className='m-auto'/>
          <p className='hidden sm:inline'>My profile</p>          
        </div>
      </SidebarLink>
      <SidebarLink href="/painel/posts">
        <div>
        <Image src="/images/myposts.svg" alt="Next.js Logo" width={25} height={25} className='m-auto'/>
        <p className='hidden sm:inline'>My Posts</p>        
        </div>
      </SidebarLink>
      <SidebarLink href="/painel/friends">
        <div>
          <Image src="/images/friends.svg" alt="Next.js Logo" width={25} height={25} className='m-auto'/>
          <p className='hidden sm:inline'>My friends</p>          
        </div>
      </SidebarLink>
    </div>
    <div className='w-[80vw]'>      
      {children}
    </div>
  </div>
);

export default Layout;
