function List() {
    const cars = ['BMW', 'Ayla', 'Volvo'];
    const users = [
        {
            username: "irvanda",
            email: 'email1@example.com',
            name: 'Irvanda'
        },
        {
            username: "Azizi",
            email: 'email2@example.com',
            name: 'Azizi'
        },
        {
            username: "Nizar",
            email: 'email3@example.com',
            name: 'Nizar'
        },
        {
            username: "Lintang",
            email: 'email4@example.com',
            name: 'Lintang'
        },
    ];

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;
