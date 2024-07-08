import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index(props) {
    const {medsoses} = usePage().props;

    function destroy(e) {
        if (confirm("Are you sure you want to destroy")) {
            Inertia.delete(route("medsoses.destroy", e.currentTarget.id))
            location.reload();
        }
    }

    return (
        <Authenticated user={props.auth.user}>
            <Head title="Media Sosial" />
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Media Sosial</h5>
                                    <Link href={ route("medsoses.create") } className="btn btn-primary my-4">Tambah Data</Link>
                                    <table id="zero-conf" className="display" style={{ width: "100%", overflowX: "scroll" }}>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>IMG</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {medsoses.map(({id, title, img}) => (
                                            <tr key={id}>
                                                <td>{ title }</td>
                                                <td>
                                                    <img src={`/storage/${img}`} alt="Media Sosial Image" style={{ maxWidth: "100px",maxHeight: "100px", }} />

                                                </td>
                                                <td>
                                                    <Link href={route("medsoses.edit", id)} className="btn btn-primary">
                                                        Edit
                                                    </Link>
                                                    <button onClick={destroy} id={id} type="submit" className="btn btn-danger">Hapus</button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Title</th>
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
    )
}
