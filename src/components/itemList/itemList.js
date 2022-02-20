export const itemList = () => {
    return (<>
    <div className="row">
        {productos.map((el) => <Item key={el.id} {...el} />
        )}
        </div>
    </>
    )
}



