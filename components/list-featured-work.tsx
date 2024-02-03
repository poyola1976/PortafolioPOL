import CardFeaturedWork from '@/components/ui/card-featured-work';

const ListFeaturedWork = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
      <CardFeaturedWork
        href='https://andresestebanmu.github.io/Proyecto3-Grafico/'
        image='https://i.postimg.cc/zvzR5Y2W/Dashboard2.jpg'
        category='Proyecto que muestra gráficos de Películas y Series según votos recibidos'
        title='DASHBOARD'
      />
      <CardFeaturedWork
        href='https://master--voluble-boba-d82bef.netlify.app/'
        image='https://i.postimg.cc/g2jVj2fN/Restaurant.jpg'
        category='Página Web con menú administrable'
        title='RESTAURANT'
      />
      <CardFeaturedWork
        href='https://roaring-tulumba-ba31a3.netlify.app/'
        image='https://i.postimg.cc/52bTjTJs/Botilleria.jpg'
        category='E-Commerce con Carrito de Compras y MercadoPago'
        title='BOTILLERIA LA BOTIKA'
      />
    </div>
  );
};

export default ListFeaturedWork;
