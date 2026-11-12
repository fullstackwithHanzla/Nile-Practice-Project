
import SocialAndNavlinks from './SocialAndNavlinks'

const Footer = () => {
  return (
    <div>
      <SocialAndNavlinks />
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between px-5 py-2 border-t border-alabaster/20">
        <p className='text-sm'>© Limited 2026. All rights reserved.</p>
        <p className='text-sm'>Made by <span className='font-medium italic text-inch-worm'>@fullstackwithhanzla</span></p>
      </div>
    </div>
  );
}

export default Footer