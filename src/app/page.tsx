/*
Notas:
Por padrão, o Next sempre é estático, então uma requisição direta só será feita no build
*/

import Link from "next/link";
// export const revalidate = 5; //Revalidando todas as requisições da página a cada 5 segundos.

const Page = async () => {
  const res = await fetch("http://api.github.com/users/YuriCF1", {
    next: {
      revalidate: 30, //Revalidando apenas essa chamada, a cada trinta segundos
      // cache: 'no-store' //O padrão é 'force-storage', para que todos os usuários recebam a mesma resposta. 
    },
  });
  const user = await res.json();

  type Time = {
    datetime: string
  }

  const contando = async function getTime(): Promise<Time> {
    const time = await fetch('http:worldtimeapi.org/api/timezone/America/Chicago', {
      cache: 'no-store' //O padrão é 'force-storage', para que todos os usuários recebam a mesma resposta. 
    })
    return time.json()
  }
  const [tempo] = await Promise.all([contando()])

  return (
    <div>
      <h1>Hello world!</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>{tempo.datetime}</p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
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



// import Image from 'next/image'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
