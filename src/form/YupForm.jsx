import * as Yup from 'yup';

export const YupForm =Yup.object({
    name:Yup.string().min(3,'To short').max(20).required('Name is must'),
    email:Yup.string().min(3).email().required('Email is must'),
})