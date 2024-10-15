 
import LogoComponent from '../utils-component/logoComponent'
import ImageComponent from '../utils-component/imageComponent'
import whatsapp from '@/assets/icons/whatsapp.png';
import faceBook from '@/assets/icons/facebook.png';
import twitter from '@/assets/icons/twitter.png'  ;
import logo from '@/assets/images/image-login.jpg';

 export default function FooterComponent() {
   return (
    <footer className="flex h-40 items-center bg-black   text-white gap-4 px-4 md:px-6"  >
    <div className="flex w-full" style={{marginTop:0}}>
        <div className="relative">
         
        <LogoComponent imgUrl={logo} title='DreamTrip'  subTitle='Travel from home'/>
        <div className='mt-5'>
        <p>Email: info@DreamTrip.com</p>
        <p>Telephone : +222 23456789</p>
        </div>
        
        </div>
      </div>
      <div className="d-block">
      <div className='flex  gap-4'>
        <ImageComponent imgUrl={whatsapp} />
        <ImageComponent imgUrl={faceBook} />
        <ImageComponent imgUrl={twitter} />
      </div>
      <div className='mt-10'>@Copiright2024</div>
      </div>
     
    </footer>
   )
 }
 