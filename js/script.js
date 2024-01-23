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
            ]
        }
    },
    methods: {
        deleteTask(i) {
            // Riaggiorna la task list eliminando l'elemento con indice passato a parametro
            this.tasks = this.tasks.filter((task, taskIndex) => i !== taskIndex);
        }
    }
})

app.mount('#root');