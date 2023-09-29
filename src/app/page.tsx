/*
Notas:
Por padrão, o Next sempre é estático, então uma requisição direta só será feita no build
*/

import Link from "next/link";
import { User } from "./components/User";
import { Repo } from "./components/Repo";
import Cookies from "./components/Cookies";
// export const revalidate = 5; //Revalidando todas as requisições da página a cada 5 segundos.

const Page = async () => {
  //Dica: Caso eu pricesse fazer mais de um fetch, que sejam independentes, usar sempre o promisse all
  // const [res1, res2] = await Promise.all([
  //   fetch(''), fetch('')]
  // )
  return (
    <div>
      <h1>Home</h1>
      <Cookies />
      <User />
      {/* <Repo /> */}
    </div>
  )
};

export default Page;


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
