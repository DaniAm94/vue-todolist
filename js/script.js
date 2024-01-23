console.log(Vue);
const { createApp } = Vue;
const app = createApp({
    data() {
        return {

            tasks: [
                { id: 1, done: false, text: 'Fare la spesa' },
                { id: 2, done: true, text: 'Lavare i capelli' },
                { id: 3, done: false, text: 'Comprare una marca da bollo' },
                { id: 4, done: false, text: 'Aggiornare il PC' }
            ],
            newTaskText: '',
            searchedText: ''
        }
    },
    computed: {
        filteredTasks() {
            return this.tasks.filter(({ text }) => text.includes(this.searchedText))
        }
    },
    methods: {
        deleteTask(id) {
            // Riaggiorna la task list escludendo l'elemento con id passato a parametro
            this.tasks = this.tasks.filter((task) => id !== task.id);
            console.log(this.tasks);
        },
        addTask() {
            if (!this.newTaskText) return;
            const newTask = {
                id: new Date().toISOString(),
                done: false,
                text: this.newTaskText
            };
            this.tasks.push(newTask);
            this.newTaskText = '';
        },
        toggleClass(id) {
            this.tasks.forEach(task => {
                if (task.id === id) {
                    task.done = !task.done;
                }
            });
        },
        setAllAs(done) {
            this.tasks.forEach(task => {
                task.done = done;
            })
        },
        deleteAll() {
            this.tasks = [];
        }
    }
})

app.mount('#root');