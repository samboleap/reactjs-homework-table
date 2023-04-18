export const Tables = ({products}) =>{
                return(
                  <tbody>
                    {products.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <img src={item.images[0]} width={100} alt=""/>
                        </td>
                        <td>${item.price}</td>
                        <td>{item.description}</td>
                    </tr>
                    ))}
                    </tbody>
        )}
