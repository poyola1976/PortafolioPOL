import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className='border-b border-gray-500/30 pb-10'>
      <Container>
        <Title title='Conocimientos como Desarrollador' />
          <div className='relative w-24 h-24'> 
          <Image
            src='https://i.postimg.cc/ZYx787xH/logos.jpg'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
        <div className='mt-10 space-y-10'>
          <p className='text-gray-500'>
Tecnologías Utilizadas<br></br>
Frontend:<br></br>
  - HTML5
  - CSS3
  - Stylesmodulecss
  - Material UI
  - JavaScrip
  - React.js
  - Bootstrap
  - Deploy: Netlify<br></br>
Backend:<br></br>
  - Node.js
  - Express.js
  - MongoDB
  - Deploy: Render<br></br>
Características Principales<br></br>
- Registro de usuarios con autenticación segura.
- Navegación intuitiva a través de un catálogo de productos.
- Carrito de compras para gestionar selecciones y realizar compras.
- Verificación de edad para cumplir con las regulaciones legales.
- Seguridad de token para proteger la autenticación de los usuarios.
- Interfaz de usuario responsive y amigable.<br></br>
Otros:<br></br>
HTML
CSS
JavaScript
Vite
React
React-Bootstrap
Chart.js
Firebase / Firestore
Google Maps
          </p>
  
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
