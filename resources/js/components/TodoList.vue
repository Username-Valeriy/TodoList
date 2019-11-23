<template>
    <div class="list-content">
       <div class="list-header">
          <div class="container">
              <div class="list-header_content">
                  <h1>TodoList</h1>
                  <div>
                      <input type="text" placeholder="Name Task" id="itemForm">
                      <button v-on:click="AddItem" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/></svg>
                      </button>
                  </div>
              </div>
          </div>
       </div>
        <div class="list-body">
            <div class="container">
                <ul id="list_todo">
                    <li v-for="(item, index) in items" >
                        <input type="text" ref="inputs" :class="{ active: isActive }" v-on:blur="saveEdit(index),visible=!visible"  v-model="item.text" >
                        <button type="button" v-if="visible"   v-on:click="visible=!visible, isActive = true" >
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
                        </button>
                        <button v-else="" v-on:click="visible=!visible, saveEdit(index), isActive = false">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="save" class="svg-inline--fa fa-save fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/></svg>
                        </button>
                        <a v-on:click="RemoveTask(index)" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="list-footer">

        </div>
    </div>
</template>

<script>
    const Storage_key = 'todo-storage';
    export default {
        name: 'TodoList',
        data() {
                return {
                    items: [

                    ],
                    isActive: false,
                    visible: true,
                }
            },
        mounted (){

             this.items = JSON.parse(localStorage.getItem(Storage_key) || '[]');

        },
        created() {
            document.addEventListener('click', function () {

            });
        },
        methods:{
            saveEdit: function(index){
                let input   = document.getElementById('itemForm');
                if(input.value !== ''){
                    this.items.push({
                        text:input.value
                    });
                    input.value ="";
                }
                localStorage.setItem(Storage_key, JSON.stringify(this.items))
            },
            AddItem: function(){
                let input   = document.getElementById('itemForm');
                if(input.value !== ''){
                    this.items.push({
                        text:input.value
                    });
                    input.value ="";
                }
                localStorage.setItem(Storage_key, JSON.stringify(this.items))
            },
            RemoveTask: function(index){
                this.items.splice(index, 1);
                localStorage.setItem(Storage_key, JSON.stringify(this.items))
            }
        },

    }
</script>
