interface ProductProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductProps) {
  return {
    title: `Produto ${params.id}` //Contatenando o tittle com o layout
  }
}

export default function Product({ params }: ProductProps) {
  return <h1>Product: {params.id}</h1>;
}
