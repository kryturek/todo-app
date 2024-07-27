import Todo from "./Todo";

export default function Todos({ tasks, setTasks, endOfTasksRef }) {
	return (
		<div className="todos-wrapper">
			{tasks.map((el, index) => {
				return (
					<Todo
						key={el.id}
						id={el.id}
						text={el.text}
						checked={el.checked}
						setTasks={setTasks}
						index={index}
					/>
				);
			})}
			<div className="endOfTasks" ref={endOfTasksRef}></div>
		</div>
	);
}
