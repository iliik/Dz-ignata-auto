import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {

    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string,
                            setError: (a: string) => void,
                            setName: (a: string) => void,
                            addUserCallback: (a: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
        setName('')
    } else {
        addUserCallback(name)
        setName('')


    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (a: string) => void) => { // если имя пустое - показать ошибку
    if (name === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void ) => { // если нажата кнопка Enter - добавить
    if(e.key === 'Enter') {
        addUser()
    }
}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value.length < 1) {              // need to fix
            setName('')
            setError('Please enter a valid name')
        } else {
            setName(e.currentTarget.value)
            setError('')
        }

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer