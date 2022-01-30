class LS {
	getData(name){
		let data;
		if(localStorage.getItem(name) === null){
			data=[];
	} else {
		data = JSON.parse(localStorage.getItem(name));
	}
	return data;
}	
	setData(name, data){
		localStorage.setItem(name, JSON.stringify(data));
	}

	addTask(task){
		let tasks = this.getData('tasks');
		tasks.push(task);
		this.setData('tasks', tasks);
		task.addedToLS();
	}
	deleteTask(task){
		let tasks = this.getData('tasks');
		tasks.forEach(function(tasksElement, tasksIndex){
			if(tasksElement.name === task){
				tasks.splice(tasksIndex, 1);
			}
		});
		this.setData('tasks', tasks);
	}
	deleteTasks(){
		localStorage.clear();
	}

}