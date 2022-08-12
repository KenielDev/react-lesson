import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";

function App() {
    const [clientName, setClientName] = useState();
    const [clients, setClients] = useState([]);
    const [user, setUser] = useState({
        name: "",
        image: "",
    });

    function handleClient() {
        const newClient = {
            name: clientName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }),
        };
        setClients((prevState) => [...prevState, newClient]);
    }

    useEffect(() => {
        fetch("https://api.github.com/users/KenielDev")
            .then((response) => response.json())
            .then((result) => {
                setUser({ name: result.login, image: result.avatar_url });
            });
    }, []);

    return (
        <div className="flex flex-col py-4 gap-4 items-center">
            <div className="flex flex-col w-1/2 mx-auto">
                <div className="flex justify-between ">
                    <div>
                        <h1 className="text-3xl py-3">List</h1>
                    </div>
                    <div className="flex items-center justify-end gap-x-4">
                        <p className="font-semibold">{user.name}</p>
                        <img
                            className="w-[10%] rounded-full"
                            src={user.image}
                            alt=""
                        />
                    </div>
                </div>
                <input
                    onChange={(e) => setClientName(e.target.value)}
                    className="p-4 rounded-xl border"
                    type="text"
                    placeholder="Digite o nome do cliente..."
                />
            </div>
            <button
                onClick={handleClient}
                className="p-4 w-1/2 mx-auto rounded-xl border bg-rose-400  font-bold"
            >
                Adicionar
            </button>
            {clients.map((client) => {
                return (
                    <Cards
                        key={client.time}
                        name={client.name}
                        time={client.time}
                    />
                );
            })}
        </div>
    );
}

export default App;
