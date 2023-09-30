export async function Repo() {
    // const res = await fetch("http://api.github.com/users/YuriCF1/repos", {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        next: {
            revalidate: 30, //Revalidando apenas essa chamada, a cada trinta segundos
            // cache: 'no-store' //O padrão é 'force-storage', para que todos os usuários recebam a mesma resposta. 
        },
    });
    const repos = await res.json();


    return (
        <div>
            <h1>Repositórios!</h1>
            <pre>{JSON.stringify(repos, null, 2)}</pre>
        </div>
    );
};

