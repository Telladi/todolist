import type {Meta, StoryObj} from '@storybook/react';
import {Task} from "../Task";
import {v1} from "uuid";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

// More on how to set up stories at:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes:
    // https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        changeTaskStatus: {
          description: 'changeTaskStatus',
          action: 'clicked'
        },
        changeTaskTitle: {
            description: 'changeTaskTitle',
            action: 'clicked'
        },
        removeTask: {
            description: 'removeTask',
            action: 'clicked'
        }
    },
};

export default meta;
type Story = StoryObj<typeof Task>;

export const TaskIsDoneStory: Story = {

    args: {
        task: {
            id: 'qwer', title: "JS", isDone: true
        },
        todolistId: 'sdagtrgertg',
        // changeTaskStatus: action('changeTaskStatus'),
        // changeTaskTitle: action('changeTaskTitle'),
        // removeTask: action('removeTask')
    }
}
export const TaskIsNotDoneStory: Story = {
    args: {
        task: {
            id: 'qwerty', title: "CSS", isDone: false
        },
        todolistId: 'sdagtrgertg',
        // changeTaskStatus: action('changeTaskStatus'),
        // changeTaskTitle: action('changeTaskTitle'),
        // removeTask: action('removeTask')
    }
}


const TaskToogle = () => {
    const [task, setTask] = useState({id: 'qwerty', title: "CSS", isDone: false})
    return <Task changeTaskStatus={()=> setTask({...task, isDone: !task.isDone})}
                 changeTaskTitle={(taskId, title)=> setTask({...task, title: title})}
                 removeTask={action('removeTask')}
                 task={task}
                 todolistId={'sdagtrgertg'}/>
}
export const TaskToogleStory: Story = {
    render: ()=><TaskToogle/>
}


