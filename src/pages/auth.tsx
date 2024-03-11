import * as React from 'react';
import RegisterForm from '../styles/components/RegisterForm'


export default function auth() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full h-100 flex items-center justify-center">
                <div className="w-full bg-white flex items-center justify-center">
                    <div className="w-full px-12 py-4">
                        <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
                            Register
                        </h2>
                        <p className="text-center text-sm text-gray-600 mt-2">Already have an account?&nbsp;
                            <a className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
                                Sign in
                            </a>
                        </p>
                        {/* SIGN UP FORM */}
                        <RegisterForm />
                    </div>

                </div>
            </div>
        </div>


    )






}