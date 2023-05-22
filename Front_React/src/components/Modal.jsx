export default function Modal() {
	return (
		<div className="modal" id="exampleModal" tabindex="9999" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">
							Eliminar cuenta?
						</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>Esta acción no se puede deshacer.</p>
					</div>
					<div className="modal-footer flex-nowrap">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Cancelar
						</button>
						<button type="button" className="btn btn-danger">
							Eliminar cuenta
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
