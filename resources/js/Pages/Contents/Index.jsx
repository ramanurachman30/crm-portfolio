import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index(props){
    const {contents} = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to destroy")) {
            Inertia.delete(route("contents.destroy", e.currentTarget.id))
            location.reload();
        }
    }

    return(
        <Authenticated
            user={props.auth.user}
        >
        <Head title="Content Index" />
        <div className="pt-12 mt-12">
            <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contents</h5>
                                <Link href={ route("contents.create") } className="btn btn-primary my-4">Tambah Data</Link>
                                <table id="zero-conf" className="display" style={{ width: "100%", overflowX: "scroll" }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>IMG</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contents.map(({id, name, title, description, img}) => (
                                        <tr key={id}>
                                            <td>{ name }</td>
                                            <td>{ title }</td>
                                            <td>{ description }</td>
                                            <td>
                                                <img src={`/storage/${img}`} alt="Contents Image" style={{ maxWidth: "100px",maxHeight: "100px", }} />

                                            </td>
                                            <td>
                                                <Link href={route("contents.edit", id)} className="btn btn-primary">
                                                    Edit
                                                </Link>
                                                <button onClick={destroy} id={id} type="submit" className="btn btn-danger">Hapus</button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>IMG</th>
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
    );
}
