import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}

            <form onSubmit={submit}>
                <div className="mb-3">
                    <div className="form-floating">
                        <TextInput type="text" className="form-control" id="floatingInput" placeholder="Fullname" value={data.name} autoComplete="name" onChange={(e) => setData('name', e.target.value)} required />
                        <label for="floatingInput">Fullname</label>
                        <InputError message={errors.name} className="mt-2" />
                        </div>
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <TextInput type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" value={data.email} autoComplete="email" onChange={(e) => setData('email', e.target.value)} required />
                        <label for="floatingInput">Email address</label>
                        <InputError message={errors.email} className="mt-2" />
                        </div>
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <TextInput type="password" className="form-control" id="floatingPassword" placeholder="Password" value={data.password} autoComplete="password" onChange={(e) => setData('password', e.target.value)} required />
                        <label for="floatingPassword">Password</label>
                        <InputError message={errors.password} className="mt-2" />
                        </div>
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <TextInput type="password" className="form-control" id="floatingPassword1" placeholder="Confirm Password" value={data.password_confirmation} autoComplete="new-password" onChange={(e) => setData('password_confirmation', e.target.value)} required />
                        <label for="floatingPassword">Confirm Password</label>
                        <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                </div>
                <div className="mb-3 form-check">
                    <TextInput type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">I agree the <a href="#">Terms and Conditions</a></label>
                </div>
                <div className="d-grid">
                <button className="btn btn-primary m-b-xs" disabled={processing}>Register</button>
            </div>
                </form>
                <div className="authent-login">
                    <p>Already have an account? <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </Link></p>
                </div>
        </GuestLayout>
    );
}
