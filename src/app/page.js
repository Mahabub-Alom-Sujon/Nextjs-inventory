import LoginForm from '@/components/users/LoginForm';
import { join } from '@prisma/client/runtime/library';
import React from 'react';
const page = () => {
    return (
        <>
            <LoginForm/>
        </>
    );
};

export default page;
