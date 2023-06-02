export default function ProfileCard(props) {
	const { title, campos } = props;
	return (
		<div className="card row mt-0 m-3 p-3 font-family--jetbrains-mono card-1">
			<p className="fs-5 fw-bold mb-4">{title}</p>
			{props.children}
			{campos &&
				campos.map((campo) => {
					return (
						<div className=" row p-1">
							<div className="col-lg-4">
								<p className="m-0 p-2">{campo.data}:</p>
							</div>
							<div className="col-lg">
								<p className="p-2 bg-light text-break">{campo.value}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
}
