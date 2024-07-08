import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index(props) {
    const {about_me} = usePage().props;

    function destroy(e) {
        if (confirm("Are you sure you want to destroy")) {
            Inertia.delete(route("about_me.destroy", e.currentTarget.id))
            location.reload();
        }
    }

    return (
        <Authenticated user={props.auth.user}>
            <Head title="About Me"/>
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">About Me</h4>
                                    <Link href={route("about_me.create")} className="btn btn-primary my-4">Tambah Data About Me</Link>
                                    <table id="zero-conf" className="display" style={{ width: "100%", overflowX: "scroll" }}>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { about_me.map(({id, title, description}) => (
                                                <tr key={id}>
                                                    <td>{title}</td>
                                                    <td>{description}</td>
                                                    <td>
                                                        <Link href={route("about_me.edit", id)} className="btn btn-info">
                                                            Edit
                                                        </Link>
                                                        <button onClick={destroy} className="btn btn-danger" type="submit" id={id}>Hapus</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
