import PropTypes from "prop-types";

CharacterCounter.propsTypes = {
	charactersLength: PropTypes.number.isRequired,
	lengthLimit: PropTypes.number,
};

export default function CharacterCounter(props) {
	const { charactersLength, lengthLimit = 280 } = props;
	const difference = lengthLimit - charactersLength;

	let color = "";
	if (difference <= 20) color = "#ffc107";
	if (difference < 0) color = "#dc3545";

	return (
		<p className="counter m-0 h5 font-bold" style={{ color: color }}>
			{lengthLimit - charactersLength}
		</p>
	);
}
