import * as zod from 'zod'
import { Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { TasksDone } from "./components";
import { FormContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form';
import { TasksContext } from '../../context/TaskContext';


const newTaskSchema = zod.object({
  text: zod.string().min(1, 'Informe a tarefa')
})

type NewTaskFormData = zod.infer<typeof newTaskSchema>

export function Todo() {

  const {
    createNewTask
  } = useContext(TasksContext)

  const newTaskForm = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      text: ''
    }
  })

  const { handleSubmit, register } = newTaskForm

  function handleCreateNewTask(data: NewTaskFormData) {
    createNewTask(data)
  }

  return (
    <FormContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewTask)}>
        <div className="formBox">
          <input
            type="text"
            id='task'
            placeholder="Escreva uma nova tarefa"
            {...register('text')}
          />
          <button type="submit">
            <Plus />
            Add
          </button>
        </div>
        <FormProvider {...newTaskForm}>
          <TasksDone />
        </FormProvider>
      </form>

    </FormContainer>
  )
}