import { useState } from "react";
import arrowRight from "../assets/arrow-right.svg";

export default function AddTodo() {
	const [value, setValue] = useState("");

	return (
		<div className="addTodo-wrapper">
			<form>
				<input type="text" />
				<button>
					<img src={arrowRight} alt="submit" />
				</button>
			</form>
		</div>
	);
}
