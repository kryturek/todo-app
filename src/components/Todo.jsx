import trash from "../assets/trash.svg";
import clsx from "clsx";
import checkmark from "../assets/checkmark.svg";
import close from "../assets/close.svg";

export default function Todo({ id, text, checked, setTasks, index }) {
	function handleDelete() {
		setTasks((prevTasks) => {
			return prevTasks.filter((el) => {
				return el.id !== id;
			});
		});
	}

	function handleToggle() {
		setTasks((prevTasks) =>
			prevTasks.map((el) =>
				el.id === id ? { ...el, checked: !checked } : el
			)
		);
	}

	const hue = ((index + 23) * 25) % 360;
	const taskColour = `hsl(${hue}, 35%, 45%)`;

	return (
		<div
			className={clsx(
				"single-todo-wrapper",
				checked ? "todo-checked" : "todo-unchecked"
			)}
			style={checked ? {} : { backgroundColor: taskColour }}
		>
			<div className="text" onClick={handleToggle}>
				{checked ? <img src={checkmark} alt="checkmark" /> : ""}
				<span>{text}</span>
			</div>
			<button onClick={handleDelete}>
				<img src={close} alt="delete task" />
			</button>
		</div>
	);
}
