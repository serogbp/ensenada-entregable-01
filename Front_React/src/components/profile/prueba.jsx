export default function Prueba(props) {
	const { title, campos } = props;
	return (
		<div className="card">
			<p className="fs-3 card-header">{title}</p>
			{campos.map((campo) => {
				return (
					<div className="d-flex">
						<p>{campo.nombre}</p>
						<p className="p-4 bg-light">{campo.valor}</p>
					</div>
				);
			})}
		</div>
	);
}
