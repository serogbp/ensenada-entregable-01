/* card con la foto, botones, nombre y apellidos */

//TODO REVISAR POR QUE EL ANCHO NO AJUSTA COMO ANTES ???

export default function PerfilCabecera() {
	return (
		<div>
			<div className="row justify-content-center m-3">
				<div className="col-lg-10 col-card">
					<div className="row">
						<div className="col-lg-10 text-center">
							<div className="row justify-content-center">
								<img id="avatar" src="/public/images/profile-icon.jpg" className="picture rounded-circle" alt="profile-icon" />
							</div>
							<div className="row h6 font-family--jetbrains-mono">
								<p className="userData"></p>
							</div>
							<div className="row font-family--jetbrains-mono">
								<p className="userData"></p>
							</div>
						</div>
						<div className="col-lg-2 text-center" id="editUser">
							<button type="button" className="btn btn-outline-dark" onclick="window.location.href ='modificar-perfil-de-usuario.html'">
								Editar perfil
							</button>

							<button type="button" className="btn btn-outline-danger" onclick="document.getElementById('id01').style.display='block'">
								Eliminar perfil
							</button>
							<div id="id01" className="modal">
								<span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">
									×
								</span>
								<form className="modal-content">
									<div>
										<h1>Eliminar cuenta</h1>
										<p>Seguro que desea eliminar la cuenta?</p>

										<div className="clearfix">
											<button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">
												Cancelar
											</button>
											<button type="button" id="deleteUser" className="deletebtn">
												Confirmar
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
