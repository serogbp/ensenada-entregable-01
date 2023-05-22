import moment from "moment";

export default function EventList() {
	const events = [
		{
			date: moment("2023-05-19"),
			body: "Weekly",
			detail: "Sprint 02",
		},
		{
			date: moment("2023-06-02"),
			body: "Entrega final",
			detail: "Sprint 02",
		},
	];
	return (
		<div className="card gap-4 bg-light-subtle">
			<p className="h5 mb-1 font-family--jetbrains-mono">Eventos</p>
			{events.map((event, index) => (
				<EventListItem date={event.date} body={event.body} detail={event.detail} key={index} />
			))}
		</div>
	);
}

function EventListItem({ date, body, detail }) {
	// Cambiar color del evento según cuántos días faltan
	const diff = moment(date).diff(moment(), "days");
	const bg = diff > 3 ? "bg-success" : "bg-danger";
	return (
		<div className="d-flex gap-2">
			<div className={`event ${bg}`}>
				<p className="h5">{moment(date).format("MMM")}</p>
				<p className="h4">{moment(date).format("DD")}</p>
			</div>
			<div className="doble-texto">
				<strong>{body}</strong>
				<p>{detail}</p>
			</div>
		</div>
	);
}
