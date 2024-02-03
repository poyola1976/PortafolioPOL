import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Form from './components/form';

const ContactPage = () => {
  return (
    <main className='pb-10 border-b border-gray-500/30'>
      <Container>
        <Title title='Contacto' />
        <p className='text-gray-500 mb-10'>
        Si quieres hablar sobre un proyecto potencial o simplemente saludar, envíame un mensaje o envíame un correo electrónico a {' '}
          <span className='text-white'>poyola@gmail.com</span>
        </p>
        <Form />
      </Container>
    </main>
  );
};

export default ContactPage;
