import { Repo } from "./Repo";

export async function User() {
    const res = await fetch("http://api.github.com/users/YuriCF1", { //OBS: O Next consegue reconhecer quando a mesma fetch está sendo executada diversas vezes. Executa uma e destribui os dados par aos componentes filhos
        next: {
            revalidate: 30, //Revalidando apenas essa chamada, a cada trinta segundos
            // cache: 'no-store' //O padrão é 'force-storage', para que todos os usuários recebam a mesma resposta. 
        },
    });
    const user = await res.json();
    return (
        <div>
            <h1>User!</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <div>
                <Repo />
            </div>
        </div>
    );
};

