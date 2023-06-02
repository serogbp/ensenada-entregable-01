import moment from "moment";

export default function EventList() {
	const events = [
		{
			date: moment("2023-05-19"),
			body: "Weekly",
			detail: "Sprint 02",
			url: "https://docs.google.com/presentation/d/1Qp_f-k1RBdu-enZg3cjQg46ezIqRX7lQ/edit",
		},
		{
			date: moment("2023-06-02"),
			body: "Entrega final",
			detail: "Sprint 02",
			url: "https://docs.google.com/document/d/1iqK9n9YOgIWaR2KlP_jg6-JKGdfVvvz_/edit",
		},
	];
	return (
		<div className="card gap-4">
			<p className="h5 mb-1 font-family--jetbrains-mono">Eventos</p>
			<div className="d-flex flex-lg-column flex-wrap gap-4">
				{events.map((event, index) => (
					<EventListItem event={event} key={index} />
				))}
			</div>
		</div>
	);
}

function EventListItem({ event }) {
	const { date, body, detail, url } = event;
	// Cambiar color del evento según cuántos días faltan
	const diff = moment(date).diff(moment(), "days");
	const bg = diff > 3 ? "bg-success" : "bg-danger";
	return (
		<a href={url} target="_blank" rel="noreferrer noopener" className="d-flex gap-2 hover-scale">
			<div className={`event ${bg}`}>
				<p className="h5">{moment(date).format("MMM")}</p>
				<p className="h4">{moment(date).format("DD")}</p>
			</div>
			<div className="doble-texto">
				<strong>{body}</strong>
				<p>{detail}</p>
			</div>
		</a>
	);
}
