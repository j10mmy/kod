import { type Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

// (Opsiyonel) SEO için metadata fonksiyonu
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Ürün: ${params.id}`,
  };
}

// Sayfa bileşeni
export default function Page({ params }: Props) {
  return <div>Ürün ID: {params.id}</div>;
}
