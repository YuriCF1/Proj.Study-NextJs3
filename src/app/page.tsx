/*
Notas:
Por padrão, o Next sempre é estático, então uma requisição direta só será feita no build
*/
'use client' //Necessário para roda o useRouter

import Link from "next/link";
import { User } from "./components/User";
import { Repo } from "./components/Repo";

import Cookies from "./components/Cookies";
import { Suspense } from 'react'
import { useRouter } from "next/navigation";


// export const revalidate = 5; //Revalidando todas as requisições da página a cada 5 segundos.

const Home = async () => {
  //  const {} = useRouter() //Há diversas funções úteis aqui, Ctrl Espaço nas chaves
  const router = useRouter()
  // router.refresh()

  // function submit() {
  //   router.push('/') //Enviando o usuário para outra página após uma ação de submit
  // } //Só funciona com use client ativo, lá em cima 

  //Dica: Caso eu pricesse fazer mais de um fetch, que sejam independentes, usar sempre o promisse all
  // const [res1, res2] = await Promise.all([
  //   fetch(''), fetch('')]
  // )
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando tudo...</p>}> {/*Colocando mensagem de loading envolvendo components que serão carregados*/}
        <User />
      </Suspense>
      <Link href="/dashboard">Dashboard</Link>
      {/* <Repo /> */}
    </div>
  )
};

export default Home;


/*EXEMPLO DE API


  type Time = {
    datetime: string
  }

  const contando = async function getTime(): Promise<Time> {
    const time = await fetch('http:worldtimeapi.org/api/timezone/America/Chicago', {
      cache: 'no-store'
    })
    return time.json()
  }
  const [tempo] = await Promise.all([contando()])
*/
