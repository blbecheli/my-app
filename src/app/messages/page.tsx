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
    <div className='w-[90vw] sm:w-[20vw] mx-auto text-center justify-center sm:p-2 flex sm:flex-col justify-evenly '>
      <SidebarLink href="/messages/inbox">
        <div className='flex justify-between mb-[7vh]'>
          <Image src="/images/messageInbox.svg" alt="Next.js Logo" width={25} height={25} />
          <p className='hidden sm:inline'>Inbox</p>
          <hr />
        </div>
      </SidebarLink>
      <SidebarLink href="/messages/outbox">
        <div className='flex justify-between mb-[7vh]'>
        <Image src="/images/messageSend.svg" alt="Next.js Logo" width={25} height={25} />
        <p className='hidden sm:inline'>Messages sent</p>
        <hr />
        </div>
      </SidebarLink>
      <SidebarLink href="/messages/send">
        <div className='flex justify-between'>
        <Image src="/images/messageEdit.svg" alt="Next.js Logo" width={25} height={25} />
        <p className='hidden sm:inline'>Send a Message</p>
        <hr />
        </div>
      </SidebarLink>      
    </div>
    <div className='w-[80vw]'>      
      {children}
    </div>
  </div>
);

export default Layout;
