export default async function Feedback({ params }: RouteParams) {
    const { id } = await params;
    return (
        <div>
            <h1>Feedback: {id}</h1>
        </div>
    )
}