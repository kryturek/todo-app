import arrowRight from "../assets/arrow-right.svg";
import capitalize from "../lib/capitalize";
import trim from "../lib/trim";

export default function AddTodo({ inputRef, input, setInput, setTasks }) {
	function handleSubmit(ev) {
		ev.preventDefault();

		const todoText = capitalize(trim(input));

		if (todoText !== "") {
			setTasks((prevTasks) => {
				return [
					...prevTasks,
					{ id: Date.now(), text: todoText, checked: false },
				];
			});
			setInput("");
		}
	}

	return (
		<div className="addTodo-wrapper">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={(ev) => setInput(ev.target.value)}
					ref={inputRef}
				/>
				<button>
					<img src={arrowRight} alt="submit" />
				</button>
			</form>
		</div>
	);
}
